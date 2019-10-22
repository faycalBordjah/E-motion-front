import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/shared/models/rental';
import { RentalService } from 'src/app/shared/services/rental.service';

@Component({
  selector: 'app-manage-rentals',
  templateUrl: './manage-rentals.component.html',
  styleUrls: ['./manage-rentals.component.scss']
})
export class ManageRentalsComponent implements OnInit {

  // locations: Location[];
  // id = 1;

  featureAdd: any[];
  rentals: Rental[];
  rentalSelect;

  constructor(private rentalService: RentalService) {
    this.rentalService.getAll().subscribe();
    this.rentalService.rentals$.subscribe(rentals => {
      if (rentals) {
        this.rentals = rentals as Rental[];
        console.log(this.rentals);
      }
    });

    this.rentalService.rentalSelectedStored$.subscribe(rental => {
      if (rental) {
        this.rentalSelect = rental as Rental;
        console.log(this.rentalSelect);
      }
    });


   }

  ngOnInit() {

    this.featureAdd = [
      {
        icon: 'assets/img/icon-add.png',
        route: '/manage/location',
      },
    ];
  }

}
