import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {

  featureAdd: any[];
  users: User[];
  userSelect;

  constructor(private userService: UserService, private authService: AuthService) {
    this.userService.getAll().subscribe();
    this.userService.users$.subscribe(users => {
      if (users) {
        this.users = users as User[];
        console.log(this.users);
      }
    });
    this.userService.userSelectedStored$.subscribe(user => {
      if (user) {
        this.userSelect = user as User;
        console.log(this.userSelect);
      }
    });
   }

  ngOnInit() {

    this.featureAdd = [
      {
        icon: 'assets/img/icon-add.png',
        route: '/manage/utilisateur',
      },
    ];
  }

}
