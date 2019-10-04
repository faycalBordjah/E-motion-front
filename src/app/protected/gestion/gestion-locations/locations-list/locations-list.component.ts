import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.scss']
})
export class LocationsListComponent implements OnInit {

  @Input()
  locations;

  constructor() { }

  ngOnInit() {
  }

}
