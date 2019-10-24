import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RentalService } from 'src/app/shared/services/rental.service';

@Component({
  selector: 'app-home-search-form',
  templateUrl: './home-search-form.component.html',
  styleUrls: ['./home-search-form.component.scss']
})
export class HomeSearchFormComponent implements OnInit {

  currentDate: Date;

  @ViewChild('searchForm', {static: false}) searchForm: NgForm;

  constructor(private rentalService: RentalService) {
    this.currentDate = new Date();
   }

  ngOnInit() {
  }

  SearchLocationDate(form: NgForm) {
    console.log(form);
  }

  SearchLocationDateTime(form: NgForm) {
    console.log(form);
  }

}
