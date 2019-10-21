import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-vehicules',
  templateUrl: './manage-vehicles.component.html',
  styleUrls: ['./manage-vehicles.component.scss']
})
export class ManageVehiclesComponent implements OnInit {

  features: any[];

  constructor() { }

  ngOnInit() {

    this.features = [
      {
        title: 'Afficher la liste',
        description: 'liste des vehicules',
        icon: 'assets/img/icon-list.png',
        route: '/manage/vehicules',
      },
      {
        title: 'Ajouter un élément',
        description: 'ajouter un vehicule',
        icon: 'assets/img/icon-add.png',
        route: '/manage/vehicule',
      },
    ];
  }

}
