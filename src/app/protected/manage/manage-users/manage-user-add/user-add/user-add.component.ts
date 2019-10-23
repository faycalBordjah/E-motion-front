import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { NgForm } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  user: User;

  @ViewChild('loginForm', {static: false}) loginForm: NgForm;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  addUser(form: NgForm) {
    this.userService.addUser(form).subscribe(data => {
      console.log(data);
    });
  }

}
