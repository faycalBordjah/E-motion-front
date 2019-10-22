import { Component, OnInit, Input } from '@angular/core';
import { Rental } from 'src/app/shared/models/rental';
import { RentalService } from 'src/app/shared/services/rental.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { Address } from 'src/app/shared/models/address';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  @Input()
  rentals: Rental[];
  rental$: Observable<Rental>;
  rental: Rental;


  constructor(private rentalService: RentalService) {
    this.rental$ = this.rentalService.rentalSelectedStored$;
   }

  ngOnInit() {
  }

  bindRental(indexOfUser: number) {
    this.rental = this.rentals[indexOfUser];
    this.rentalService.storeRentalDetails(this.rental);
  }
}
