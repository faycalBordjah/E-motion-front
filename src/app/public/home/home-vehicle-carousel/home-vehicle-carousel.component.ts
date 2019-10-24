import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from 'src/app/shared/models/vehicle';

@Component({
  selector: 'app-home-vehicle-carousel',
  templateUrl: './home-vehicle-carousel.component.html',
  styleUrls: ['./home-vehicle-carousel.component.scss']
})
export class HomeVehicleCarouselComponent implements OnInit {

  @Input()
  vehicles: Vehicle[];

  constructor() { }

  ngOnInit() {
  }

}
