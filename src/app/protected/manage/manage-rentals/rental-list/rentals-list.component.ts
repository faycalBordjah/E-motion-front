import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-locations-list',
  templateUrl: './rentals-list.component.html',
  styleUrls: ['./rentals-list.component.scss']
})
export class RentalsListComponent implements OnInit {

  @Input()
  locations;

  constructor() { }

  ngOnInit() {
  }

}
