import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';

@NgModule({
  declarations: [HomeComponent, HomeBannerComponent],
  imports: [
    SharedModule
  ]
})
export class HomeModule { }
