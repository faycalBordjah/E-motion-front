import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserModule } from '../protected/user/user.module';
import { RentalModule } from './rental/rental.module';
import { BillModule } from './bill/bill.module';
import { VehiculeModule } from './vehicle/vehicule.module';
import { ProtectedRoutingModule } from './protected-routing.module';
import { ManageModule } from './manage/manage.module';

@NgModule({
  declarations: [

  ],
  imports: [
    SharedModule,
    ProtectedRoutingModule,
    ManageModule,
    UserModule,
    RentalModule,
    BillModule,
    VehiculeModule
  ]
})
export class ProtectedModule { }
