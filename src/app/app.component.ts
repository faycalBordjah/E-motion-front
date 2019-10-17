import {Component} from '@angular/core';
import {AppConstants} from './shared/constants/app.constants';
import {ErrorHandlerService} from './shared/services/error-handler.service';
import {Vehicle} from './shared/models/vehicle';
import {VehicleService} from './shared/services/vehicle.service';
import {UserService} from './shared/services/user.service';
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
    role: string;
    token$: Observable<string>;

    constructor(private authService: AuthService) {
      this.user$ = this.authService.user$;
      this.token$ = this.authService.token$;
      if (this.user$ || this.token$) {
        this.role = 'admin';
      }
    }
}
