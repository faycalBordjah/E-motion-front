import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { Observable } from 'rxjs';
import { UserService } from './../../../../shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input()
  users: User[];
  user$: Observable<User>;
  user: User;

  constructor(private userService: UserService) {
    this.user$ = this.userService.userSelectedStored$;
   }

  ngOnInit() {
  }

  bindUser(indexOfUser: number) {
    this.user = this.users[indexOfUser];
    this.userService.storeUserDetails(this.user);
  }

}
