import { Component } from '@angular/core';
import { AppConstants } from './shared/constants/app.constants';
import { ErrorHandlerService } from './shared/services/error-handler.service';
import { Vehicule } from './shared/models/vehicule';
import { VehiculeService } from './shared/services/vehicule.service';
import { UserService } from './shared/services/user.service';
import { User } from './shared/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  appTitle = AppConstants.appTitle;
  urlLogo = AppConstants.assetLogoPath;
  yearNow = new Date().getFullYear().toString();
  role = 'anonyme';
  user: User;
  userId: any;

  vehicules: Vehicule[];

  constructor(private vehiculeService: VehiculeService, private userService: UserService, private errorService: ErrorHandlerService) {
    this.userId = parseInt(window.localStorage.getItem('userId'), 0);
    console.log(this.userId);
    if (this.userId !== null) {
      this.userService.getById(this.userId).subscribe(data => {
        if (data.result) {
          this.user = data.result as User;
          console.log(this.user);
          this.role = 'admin';
        }
      });
    }
  }
}
