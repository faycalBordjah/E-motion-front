import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { UserModule } from '../protected/user/user.module';
import { LocationModule } from '../protected/location/location.module';
import { FactureModule } from '../protected/facture/facture.module';
import { VehiculeModule } from '../protected/vehicule/vehicule.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    LoginModule,
    UserModule,
    LocationModule,
    FactureModule,
    VehiculeModule
  ]
})
export class PublicModule { }
