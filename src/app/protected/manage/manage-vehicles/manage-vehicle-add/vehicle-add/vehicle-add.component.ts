import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VehicleService } from './../../../../../shared/services/vehicle.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-vehicle-add',
  templateUrl: './vehicle-add.component.html',
  styleUrls: ['./vehicle-add.component.scss']
})
export class VehicleAddComponent implements OnInit {

  invalidForm = false;

  @ViewChild('vehicleForm', {static: false}) vehicleForm: NgForm;

  constructor(private vehicleService: VehicleService,
              private router: Router,
              private alertService: AlertService) { }

  ngOnInit() {
  }

  addVehicle(form: NgForm) {
    this.vehicleService.addVehicle(form).subscribe(
        (data) => {
                this.router.navigate(['/manage/vehicules']);
        },
        (error) => {
            console.error(error);
            this.invalidForm = true;
            this.alertService.error(error);
        });
  }

}
