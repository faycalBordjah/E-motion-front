import {Component} from '@angular/core';
import {AppConstants} from './shared/constants/app.constants';
import {ErrorHandlerService} from './shared/services/error-handler.service';
import {Vehicle} from './shared/models/vehicle';
import {VehicleService} from './shared/services/vehicle.service';
import {UserService} from './shared/services/user.service';
import {User} from './shared/models/user';
import {AuthService} from './shared/services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    urlLogo = AppConstants.asset_logo_path;
    yearNow = new Date().getFullYear().toString();
    isAuthenticated = false;
    role = 'anonyme';
    currentUser: User;

    vehicles: Vehicle[];

    constructor(private vehicleService: VehicleService, private authService: AuthService,
    ) {
       if (this.authService.isLoggedIn() === true) {
        this.role = 'admin';
        this.isAuthenticated = true;
        console.log(this.role);
       }
    }
}
