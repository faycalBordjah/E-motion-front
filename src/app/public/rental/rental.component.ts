import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/shared/models/vehicle';
import { VehicleService } from 'src/app/shared/services/vehicle.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.scss']
})
export class RentalComponent implements OnInit {

  vehicles: Vehicle[];

  constructor(private vehicleService: VehicleService ) {
    this.fetchVehicleListFromStore();
   }

  ngOnInit() {
  }

  fetchVehicleListFromStore() {
    this.vehicleService.vehicles$.subscribe(vehicles => {
      if (vehicles) {
        this.vehicles = vehicles as Vehicle[];
        console.log(this.vehicles);
      }
    });
  }

}
