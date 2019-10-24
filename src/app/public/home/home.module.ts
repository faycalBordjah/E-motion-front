import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeBannerComponent } from './home-carousel/home-banner/home-banner.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { HomeSearchFormComponent } from './home-search-form/home-search-form.component';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { frLocale } from 'ngx-bootstrap/locale';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeVehicleCarouselComponent } from './home-vehicle-carousel/home-vehicle-carousel.component';
import { HomeFooterTopComponent } from './home-footer-top/home-footer-top.component';
import { HomeRoutingModuleModule } from './home-routing-module.module';
import { HomeAccueilComponent } from './home-accueil/home-accueil.component';
import { HomeHeaderNavComponent } from './home-header-nav/home-header-nav.component';
defineLocale('fr', frLocale);

@NgModule({
  declarations: [
    HomeComponent,
    HomeBannerComponent,
    HomeCarouselComponent,
    HomeSearchFormComponent,
    HomeHeaderComponent,
    HomeVehicleCarouselComponent,
    HomeFooterTopComponent,
    HomeAccueilComponent,
    HomeHeaderNavComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModuleModule
  ]
})
export class HomeModule { }
