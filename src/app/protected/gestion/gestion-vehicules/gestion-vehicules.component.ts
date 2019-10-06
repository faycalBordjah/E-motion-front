import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/shared/models/vehicle';
import { VehicleService } from 'src/app/shared/services/vehicle.service';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';

@Component({
  selector: 'app-gestion-vehicules',
  templateUrl: './gestion-vehicules.component.html',
  styleUrls: ['./gestion-vehicules.component.scss']
})
export class GestionVehiculesComponent implements OnInit {

  vehicules: Vehicle[];

  constructor(private vehiculeService: VehicleService, private errorService: ErrorHandlerService) { }

  ngOnInit() {
    this.vehiculeService.getAll().subscribe(data => {
      if (data) {
        this.vehicules = data.result as Vehicle[];
        console.log(this.vehicules);
        }
      },
      (error) => {
        this.errorService.handleError(error);
      }
    );
  }
}
