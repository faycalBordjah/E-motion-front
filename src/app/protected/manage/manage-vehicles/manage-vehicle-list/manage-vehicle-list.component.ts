import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/shared/models/vehicle';
import { VehicleService } from 'src/app/shared/services/vehicle.service';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manage-vehicle-list',
  templateUrl: './manage-vehicle-list.component.html',
  styleUrls: ['./manage-vehicle-list.component.scss']
})
export class ManageVehicleListComponent {

  vehicles$: Observable<Vehicle[]>;

  constructor(private vehicleService: VehicleService) {
    this.vehicleService.getAll();
    this.vehicles$ = this.vehicleService.vehicles$;
   }

}
