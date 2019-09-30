import { Component, Input } from '@angular/core';

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

  constructor() { }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
