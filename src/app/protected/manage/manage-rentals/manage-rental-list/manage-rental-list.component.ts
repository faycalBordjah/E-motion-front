import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/shared/models/rental';
import { RentalService } from './../../../../shared/services/rental.service';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manage-rental-list',
  templateUrl: './manage-rental-list.component.html',
  styleUrls: ['./manage-rental-list.component.scss']
})
export class ManageRentalListComponent {

  rentals$: Observable<Rental[]>;

  constructor(private rentalService: RentalService) {
    this.rentalService.getAll();
    this.rentals$ = this.rentalService.rentals$;
   }

}
