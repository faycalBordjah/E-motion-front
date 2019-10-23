import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input()
  user: User;

  modalRef: BsModalRef;

  config = {
    keyboard: true
  };

  @ViewChild('userUpdateForm', {static: false}) userUpdateForm: NgForm;

  constructor(private userService: UserService, private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  updateUser(form: NgForm) {
    //this.vehicleService.update(form);
    console.log(form);
  }

  deleteUser(): void {
    const userId = this.user.id.valueOf();
    this.userService.deleteUser(userId).subscribe(data => {
      console.log(data);
    });
  }
}
