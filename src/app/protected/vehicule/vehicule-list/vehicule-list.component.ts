import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from 'src/app/shared/models/vehicle';

@Component({
  selector: 'app-vehicule-list',
  templateUrl: './vehicule-list.component.html',
  styleUrls: ['./vehicule-list.component.scss']
})
export class VehiculeListComponent implements OnInit {

  @Input()
  vehicules: Vehicle[];

  constructor() {
    console.log(JSON.stringify(this.vehicules));
   }

  ngOnInit() {
  }

}
