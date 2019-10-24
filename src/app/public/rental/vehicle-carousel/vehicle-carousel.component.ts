import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from 'src/app/shared/models/vehicle';

@Component({
  selector: 'app-vehicle-carousel',
  templateUrl: './vehicle-carousel.component.html',
  styleUrls: ['./vehicle-carousel.component.scss']
})
export class VehicleCarouselComponent implements OnInit {

  @Input()
  vehicles: Vehicle[];

  constructor() { }

  ngOnInit() {
  }

}
