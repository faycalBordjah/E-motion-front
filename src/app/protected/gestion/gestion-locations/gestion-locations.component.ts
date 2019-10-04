import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { LocationService } from 'src/app/shared/services/location.service';

@Component({
  selector: 'app-gestion-locations',
  templateUrl: './gestion-locations.component.html',
  styleUrls: ['./gestion-locations.component.scss']
})
export class GestionLocationsComponent implements OnInit {

  locations: Location[];
  id = 1;

  constructor(private locationsService: LocationService, private errorService: ErrorHandlerService) { }

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
