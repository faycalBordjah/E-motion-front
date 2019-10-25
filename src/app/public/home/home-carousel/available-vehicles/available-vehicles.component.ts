import {Component, Input, OnInit} from '@angular/core';
import {Vehicle} from '../../../../shared/models/vehicle';
import {Observable, Subscription} from 'rxjs';
import {VehicleService} from '../../../../shared/services/vehicle.service';

@Component({
    selector: 'app-available-vehicles',
    templateUrl: './available-vehicles.component.html',
    styleUrls: ['./available-vehicles.component.scss']
})
export class AvailableVehiclesComponent implements OnInit {

    vehicles: Vehicle[] = [];

    constructor(private vehicleService: VehicleService) {
        this.vehicleService.findAllAvailable().subscribe(data => this.vehicles = data.result as Vehicle[]);
    }


    ngOnInit() {

    }

}
