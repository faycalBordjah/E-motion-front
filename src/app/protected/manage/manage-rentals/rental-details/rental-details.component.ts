import { Component, OnInit, Input } from '@angular/core';
import { Rental } from 'src/app/shared/models/rental';
import { Address } from 'src/app/shared/models/address';
import { User } from 'src/app/shared/models/user';
import { Vehicle } from 'src/app/shared/models/vehicle';

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

  constructor() {}

  ngOnInit() {
    this.rentalUser = this.rental.user;
    this.rentalUserAddress = this.rental.user.address;
    this.rentalVehicle = this.rental.vehicle;
  }

}
