import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeBannerComponent } from './home-carousel/home-banner/home-banner.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { HomeLocationFormComponent } from './home-carousel/home-location-form/home-location-form.component';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { frLocale } from 'ngx-bootstrap/locale';
import { AvailableVehiclesComponent } from './home-carousel/available-vehicles/available-vehicles.component';
defineLocale('fr', frLocale);

@NgModule({
  declarations: [
    HomeComponent,
    HomeBannerComponent,
    HomeCarouselComponent,
    HomeLocationFormComponent,
    AvailableVehiclesComponent
  ],
  imports: [
    SharedModule
  ]
})
export class HomeModule { }
