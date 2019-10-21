import {Component} from '@angular/core';
import {AppConstants} from './shared/constants/app.constants';
import {User} from './shared/models/user';
import {AuthService} from './shared/services/auth.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    urlLogo = AppConstants.asset_logo_path;
    yearNow = new Date().getFullYear().toString();
    user$: Observable<User>;
    role$: Observable<string>;

    constructor(private authService: AuthService) {
      this.user$ = this.authService.user$;
      if (this.authService.role$) {
        this.authService.refreshRole();
      }
      this.role$ = this.authService.role$;
    }
}
