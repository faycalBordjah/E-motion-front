import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Vehicle } from 'src/app/shared/models/vehicle';
import { NgForm } from '@angular/forms';
import { VehicleService } from 'src/app/shared/services/vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnInit {

  @Input()
  vehicle: Vehicle;

  vehicleTmp: Vehicle;

  @ViewChild('vehicleUpdateForm', {static: false}) vehicleUpdateForm: NgForm;

  constructor(private vehicleService: VehicleService) {
  }

  ngOnInit() {
  }

  updateVehicle(form: NgForm) {
    //this.vehicleService.update(form);
    console.log(form);
  }

  checkIfModified(form: NgForm) {
    console.log(form.statusChanges);

  }

}
