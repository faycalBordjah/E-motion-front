import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RentalModule } from './rental/rental.module';
import { ProtectedRoutingModule } from './protected-routing.module';
import { ManageModule } from './manage/manage.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    ProtectedRoutingModule,
    ManageModule,
    RentalModule,
    UserModule,
  ]
})
export class ProtectedModule { }
