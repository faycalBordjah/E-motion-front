import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { SharedModule } from '../shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';
import { ConnexionModule } from './connexion/connexion.module';
import { RentalModule } from './rental/rental.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    PublicRoutingModule,
    HomeModule,
    ConnexionModule,
    RentalModule,
  ]
})
export class PublicModule { }
