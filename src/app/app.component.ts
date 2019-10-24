import {Component} from '@angular/core';
import {AppConstants} from './shared/constants/app.constants';
import {User} from './shared/models/user';
import { Observable } from 'rxjs';
import { VehicleService } from './shared/services/vehicle.service';
import { AuthService } from './shared/services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    urlLogo = AppConstants.asset_logo_path;
    yearNow = new Date().getFullYear().toString();
    user$: Observable<User>;
    // role$: Observable<string>;

    constructor(private authService: AuthService, private vehicleService: VehicleService) {
      if (!this.user$ && this.authService.getJwtToken()) {
        this.authService.refreshCurrentUser();
        this.user$ = this.authService.user$;
      }
      this.vehicleService.getAll().subscribe();
    }

}

