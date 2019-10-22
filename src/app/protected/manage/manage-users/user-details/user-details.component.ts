import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input()
  user: User;

  @ViewChild('userUpdateForm', {static: false}) userUpdateForm: NgForm;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  updateUser(form: NgForm) {
    //this.vehicleService.update(form);
    console.log(form);
  }
}
