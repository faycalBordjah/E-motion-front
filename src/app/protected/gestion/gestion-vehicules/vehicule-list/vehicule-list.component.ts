import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vehicule-list',
  templateUrl: './vehicule-list.component.html',
  styleUrls: ['./vehicule-list.component.scss']
})
export class VehiculeListComponent implements OnInit {

  @Input()
  vehicules;

  constructor() { }

  ngOnInit() {
  }

}
