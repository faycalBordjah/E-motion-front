import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeBannerComponent } from './home-carousel/home-banner/home-banner.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, HomeBannerComponent, HomeCarouselComponent],
  imports: [
    SharedModule
  ]
})
export class HomeModule { }
