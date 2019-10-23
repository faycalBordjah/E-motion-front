import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RentalService } from 'src/app/shared/services/rental.service';
import { Vehicle } from 'src/app/shared/models/vehicle';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.scss']
})
export class RentalAddComponent implements OnInit {

  @Input()
  vehicles: Vehicle[];

  @Input()
  users: User[];

  @ViewChild('rentaForm', {static: false}) rentalForm: NgForm;

  constructor(private rentalService: RentalService) { }

  ngOnInit() {
  }

  addRental(form: NgForm) {
    this.rentalService.addRental(form).subscribe(
        (data) => {
            console.log(data);
            // this.authService.storeJwtToken(data.result.token);
            // this.vehicleForm.reset();
            // this.router.navigate(['vehicules']);
        });
  }

}
