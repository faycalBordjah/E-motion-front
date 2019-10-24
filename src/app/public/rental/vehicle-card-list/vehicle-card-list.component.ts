import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from 'src/app/shared/models/vehicle';

@Component({
  selector: 'app-vehicle-card-list',
  templateUrl: './vehicle-card-list.component.html',
  styleUrls: ['./vehicle-card-list.component.scss']
})
export class VehicleCardListComponent implements OnInit {

  @Input()
  vehicles: Vehicle[];

  constructor() { }

  ngOnInit() {
  }

}
