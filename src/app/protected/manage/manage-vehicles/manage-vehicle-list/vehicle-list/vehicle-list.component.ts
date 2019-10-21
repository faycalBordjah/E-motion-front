import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss']
})
export class VehicleListComponent implements OnInit {

  @Input()
  vehicles;

  constructor() { }

  ngOnInit() {
  }

}
