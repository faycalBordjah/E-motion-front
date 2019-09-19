import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeCarrouselComponent } from './home-carrousel/home-carrousel.component';
import { HomeFeaturesComponent } from './home-features/home-features.component';



@NgModule({
  declarations: [HomeComponent, HomeBannerComponent, HomeCarrouselComponent, HomeFeaturesComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
