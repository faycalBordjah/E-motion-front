import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vehicule-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent implements OnInit {

  @Input()
  vehicules;

  constructor() { }

  ngOnInit() {
  }

}
