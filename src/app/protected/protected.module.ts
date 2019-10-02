import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { UserModule } from '../protected/user/user.module';
import { LocationModule } from '../protected/location/location.module';
import { FactureModule } from '../protected/facture/facture.module';
import { VehiculeModule } from '../protected/vehicule/vehicule.module';
import { ProtectedRoutingModule } from './protected-routing.module';
import { GestionModule } from './gestion/gestion.module';

@NgModule({
  declarations: [

  ],
  imports: [
    SharedModule,
    ProtectedRoutingModule,
    GestionModule,
    UserModule,
    LocationModule,
    FactureModule,
    VehiculeModule
  ]
})
export class ProtectedModule { }
