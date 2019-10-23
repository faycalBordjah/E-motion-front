import { Component, OnInit, Input, TemplateRef, ViewChild } from '@angular/core';
import { Rental } from 'src/app/shared/models/rental';
import { Address } from 'src/app/shared/models/address';
import { User } from 'src/app/shared/models/user';
import { Vehicle } from 'src/app/shared/models/vehicle';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RentalService } from 'src/app/shared/services/rental.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rental-details',
  templateUrl: './rental-details.component.html',
  styleUrls: ['./rental-details.component.scss']
})
export class RentalDetailsComponent implements OnInit {

  @Input()
  rental: Rental;
  rentalUser: User;
  rentalUserAddress: Address;
  rentalVehicle: Vehicle;

  modalRef: BsModalRef;

  @ViewChild('updateStatusForm', {static: false}) updateStatusForm: NgForm;

  config = {
    keyboard: true
  };

  constructor(private rentalService: RentalService, private modalService: BsModalService) {}

  ngOnInit() {
    this.rentalUser = this.rental.user;
    this.rentalUserAddress = this.rental.user.address;
    this.rentalVehicle = this.rental.vehicle;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  updateStatus(statusForm: NgForm) {
    console.log(statusForm);
    this.rentalService.updateRentalStatus(this.rental.id, status).subscribe(data => {
      console.log(data);
    });
  }

}
