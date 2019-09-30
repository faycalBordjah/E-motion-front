import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { SharedModule } from '../shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';
import { RegisterModule } from './register/register.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    PublicRoutingModule,
    HomeModule,
    RegisterModule
  ]
})
export class PublicModule { }
