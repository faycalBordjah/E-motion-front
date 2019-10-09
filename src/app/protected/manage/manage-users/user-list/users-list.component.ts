import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-utilisateurs-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  @Input()
  utilisateurs;

  constructor() {
   }

  ngOnInit() {
  }

}
