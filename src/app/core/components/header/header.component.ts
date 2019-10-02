import { Component, Input } from '@angular/core';
import { Vehicule } from 'src/app/shared/models/vehicule';
import { subtract } from 'ngx-bootstrap/chronos/public_api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  navbarOpen = false;

  @Input()
  appTitle: string;

  @Input()
  urlLogo: string;

  @Input()
  role: string;

  @Input()
  vehicules: Vehicule[];

  constructor() { }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  rootUtilisateur() {

  }
}
