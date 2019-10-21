import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {

  features: any[];

  constructor() { }

  ngOnInit() {

    this.features = [
      {
        title: 'Afficher la liste',
        description: 'liste des utilisateurs',
        icon: 'assets/img/icon-list.png',
        route: '/manage/utilisateurs',
      },
      {
        title: 'Ajouter un élément',
        description: 'ajouter un utilsiateur',
        icon: 'assets/img/icon-add.png',
        route: '/manage/utilisateur',
      },
    ];
  }

}
