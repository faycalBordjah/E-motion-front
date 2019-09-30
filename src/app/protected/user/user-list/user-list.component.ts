import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService, private router: Router, private errorService: ErrorHandlerService) { }

  ngOnInit() {
    this.userService.getAll().subscribe(data => {
      if (data) {
        console.log(data);
        this.users = data.result as User[];
        }
      },
      (error) => {
        this.errorService.handleError(error);
      }
    );
  }

}
