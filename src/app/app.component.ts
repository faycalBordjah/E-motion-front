import { Component } from '@angular/core';
import { AppConstants } from './shared/constants/app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appTitle = AppConstants.appTitle;
  urlLogo = AppConstants.assetLogoPath;
  yearNow = new Date().getFullYear().toString();

}
