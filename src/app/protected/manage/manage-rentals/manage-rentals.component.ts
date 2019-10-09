import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { RentalService } from 'src/app/shared/services/rental.service';

@Component({
  selector: 'app-gestion-locations',
  templateUrl: './manage-rentals.component.html',
  styleUrls: ['./gestion-locations.component.scss']
})
export class ManageRentalsComponent implements OnInit {

  locations: Location[];
  id = 1;

  constructor(private locationsService: RentalService, private errorService: ErrorHandlerService) { }

  ngOnInit() {

    this.locationsService.getAll(this.id).subscribe(data => {
      if (data) {
        this.locations = data.result as Location[];
        console.log(this.locations);
      }
    },
    (error) => {
      this.errorService.handleError(error);
    }
    );
  }

}
