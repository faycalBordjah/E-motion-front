import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { Vehicle } from 'src/app/shared/models/vehicle';
import { NgForm } from '@angular/forms';
import { VehicleService } from 'src/app/shared/services/vehicle.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnInit {

  @Input()
  vehicle: Vehicle;

  modalRef: BsModalRef;

  config = {
    keyboard: true
  };

  @ViewChild('vehicleUpdateForm', {static: false}) vehicleUpdateForm: NgForm;

  constructor(private vehicleService: VehicleService, private modalService: BsModalService) {
  }

  ngOnInit() {
  }

  updateVehicle(form: NgForm) {
    const vehicleId = this.vehicle.id;
    console.log(form);
    this.vehicleService.updateVehicle(vehicleId, form).subscribe(data => {
      console.log(data);
    }
    );
  }

  openModal(confirm: TemplateRef<any>) {
    this.modalRef = this.modalService.show(confirm, this.config);
  }

  deleteVehicle(): void {
    const vehicleId = this.vehicle.id.valueOf();
    this.vehicleService.deleteVehicle(vehicleId).subscribe(data => {
      console.log(data);
    });
  }

}
