import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-utilisateurs-list',
  templateUrl: './utilisateurs-list.component.html',
  styleUrls: ['./utilisateurs-list.component.scss']
})
export class UtilisateursListComponent implements OnInit {

  @Input()
  utilisateurs;

  constructor() {
   }

  ngOnInit() {
  }

}
