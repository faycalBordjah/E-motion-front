import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from 'src/app/shared/models/vehicle';
import { VehicleService } from 'src/app/shared/services/vehicle.service';

@Component({
  selector: 'app-gestion-vehicules',
  templateUrl: './manage-vehicles.component.html',
  styleUrls: ['./manage-vehicles.component.scss']
})
export class ManageVehiclesComponent implements OnInit {

  featureAdd: any[];
  vehicles: Vehicle[];
  vehicleSelect;

  constructor(private vehicleService: VehicleService) {
    this.vehicleService.getAll().subscribe();
    this.vehicleService.vehicles$.subscribe(vehicles => {
      if (vehicles) {
        this.vehicles = vehicles as Vehicle[];
        console.log(this.vehicles);
      }
    });
    this.vehicleService.vehicleSelectedStored$.subscribe(vehicle => {
      if (vehicle) {
        this.vehicleSelect = vehicle as Vehicle;
        console.log(this.vehicleSelect);
      }
    });
   }

  ngOnInit() {

    this.featureAdd = [
      {
        icon: 'assets/img/icon-add.png',
        route: '/manage/vehicule',
      },
    ];
  }
}

