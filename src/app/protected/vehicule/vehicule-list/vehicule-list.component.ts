import { Component, OnInit, Input } from '@angular/core';
import { Vehicule } from 'src/app/shared/models/vehicule';

@Component({
  selector: 'app-vehicule-list',
  templateUrl: './vehicule-list.component.html',
  styleUrls: ['./vehicule-list.component.scss']
})
export class VehiculeListComponent implements OnInit {

  @Input()
  vehicules: Vehicule[];

  constructor() {
    console.log(JSON.stringify(this.vehicules));
   }

  ngOnInit() {
  }

}
