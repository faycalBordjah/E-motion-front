import { Component } from '@angular/core';
import { AppConstants } from './shared/constants/app.constants';
import { ErrorHandlerService } from './shared/services/error-handler.service';
import { Vehicule } from './shared/models/vehicule';
import { VehiculeService } from './shared/services/vehicule.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  appTitle = AppConstants.appTitle;
  urlLogo = AppConstants.assetLogoPath;
  yearNow = new Date().getFullYear().toString();
  role = 'admin';

  vehicules: Vehicule[];

  constructor(private vehiculeService: VehiculeService, private errorService: ErrorHandlerService) {
      this.vehiculeService.getAll().subscribe(data => {
        if (data) {
          //console.log(JSON.stringify(data.result));
          this.vehicules = data.result as Vehicule[];
          }
        },
        (error) => {
          this.errorService.handleError(error);
        }
      );
  }
}
