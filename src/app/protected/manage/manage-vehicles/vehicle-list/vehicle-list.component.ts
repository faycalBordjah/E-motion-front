import { Component, OnInit, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { EventEmitter } from 'events';
import { Vehicle } from 'src/app/shared/models/vehicle';
import { VehicleService } from './../../../../shared/services/vehicle.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {

  @Input()
  vehicles: Vehicle[];
  vehicle$: Observable<Vehicle>;
  vehicle: Vehicle;

  constructor(private vehicleService: VehicleService) {
    this.vehicle$ = this.vehicleService.vehicleSelectedStored$;
   }

  ngOnInit() {
  }

  bindVehicle(indexOfVehicle: number) {
    this.vehicle = this.vehicles[indexOfVehicle];
    this.vehicleService.storeVehicleDetails(this.vehicle);
    /*this.vehicleService.vehicleStored$.subscribe(data => {
      this.vehicle = data as Vehicle;
    });
    console.log(this.vehicle);*/
  }

}
