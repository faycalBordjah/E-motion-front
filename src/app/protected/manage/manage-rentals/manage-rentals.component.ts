import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-rentals',
  templateUrl: './manage-rentals.component.html',
  styleUrls: ['./manage-rentals.component.scss']
})
export class ManageRentalsComponent implements OnInit {

  // locations: Location[];
  // id = 1;

  features: any[];

  constructor() { }

  ngOnInit() {

    this.features = [
      {
        title: 'Afficher la liste',
        description: 'liste des locations',
        icon: 'assets/img/icon-list.png',
        route: '/manage/locations',
      },
      {
        title: 'Ajouter un élément',
        description: 'ajouter une location',
        icon: 'assets/img/icon-add.png',
        route: '/manage/location',
      },
    ];

    /*this.locationsService.getAll(this.id).subscribe(data => {
      if (data) {
        this.locations = data.result as Location[];
        console.log(this.locations);
      }
    },
    (error) => {
      this.errorService.handleError(error);
    }
    );*/
  }

}
