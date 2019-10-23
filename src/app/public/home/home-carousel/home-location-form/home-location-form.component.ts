import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RentalService } from 'src/app/shared/services/rental.service';

@Component({
  selector: 'app-home-location-form',
  templateUrl: './home-location-form.component.html',
  styleUrls: ['./home-location-form.component.scss']
})
export class HomeLocationFormComponent implements OnInit {

  currentDate: Date;

  @ViewChild('searchForm', {static: false}) searchForm: NgForm;

  constructor(private rentalService: RentalService) {
    this.currentDate = new Date();
   }

  ngOnInit() {
  }

  SearchLocation(form: NgForm) {
    console.log(form);
  }

}
