import {Component, Input} from '@angular/core';
import {AuthService} from '../../../shared/services/auth.service';
import { User } from 'src/app/shared/models/user';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    navbarOpen = false;

    @Input()
    user: User;

    @Input()
    role: string;

    @Input()
    token: string;

    @Input()
    urlLogo: string;

    constructor(private authService: AuthService, private router: Router) {}

    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }

    logOut() {
      this.authService.logout();
      const currentUrl = this.router.url;
      console.log(currentUrl);
      this.router.navigate(['/home']);
  }

}
