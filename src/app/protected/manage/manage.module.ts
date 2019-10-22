import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ManageComponent } from './manage.component';
import { ManageVehiclesComponent } from './manage-vehicles/manage-vehicles.component';
import { ManageRoutingModule } from './manage-routing.module';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageRentalsComponent } from './manage-rentals/manage-rentals.component';

import { ManageRentalAddComponent } from './manage-rentals/manage-rental-add/manage-rental-add.component';
import { RentalAddComponent } from './manage-rentals/manage-rental-add/rental-add/rental-add.component';
import { ManageUserAddComponent } from './manage-users/manage-user-add/manage-user-add.component';
import { UserListComponent } from './manage-users/user-list/user-list.component';
import { UserAddComponent } from './manage-users/manage-user-add/user-add/user-add.component';
import { ManageVehicleAddComponent } from './manage-vehicles/manage-vehicle-add/manage-vehicle-add.component';
import { VehicleListComponent } from './manage-vehicles/vehicle-list/vehicle-list.component';
import { VehicleAddComponent } from './manage-vehicles/manage-vehicle-add/vehicle-add/vehicle-add.component';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { frLocale } from 'ngx-bootstrap/locale';
import { VehicleDetailsComponent } from './manage-vehicles/vehicle-details/vehicle-details.component';
import { UserDetailsComponent } from './manage-users/user-details/user-details.component';
import { RentalDetailsComponent } from './manage-rentals/rental-details/rental-details.component';
import { RentalListComponent } from './manage-rentals/rental-list/rental-list.component';
defineLocale('fr', frLocale);

@NgModule({
  declarations: [
    ManageComponent,
    ManageVehiclesComponent,
    ManageUsersComponent,
    ManageRentalsComponent,
    ManageRentalAddComponent,
    RentalAddComponent,
    RentalListComponent,
    RentalDetailsComponent,
    ManageUserAddComponent,
    UserListComponent,
    UserAddComponent,
    ManageVehicleAddComponent,
    VehicleListComponent,
    VehicleAddComponent,
    VehicleDetailsComponent,
    UserDetailsComponent,
  ],
  imports: [
    SharedModule,
    ManageRoutingModule
  ]
})
export class ManageModule { }


