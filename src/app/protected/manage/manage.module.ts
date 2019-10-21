import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ManageComponent } from './manage.component';
import { ManageVehiclesComponent } from './manage-vehicles/manage-vehicles.component';
import { ManageRoutingModule } from './manage-routing.module';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageRentalsComponent } from './manage-rentals/manage-rentals.component';
import { RentalListComponent } from './manage-rentals/manage-rental-list/rental-list/rental-list.component';

import { ManageFeatureCardComponent } from './manage-feature-card/manage-feature-card.component';
import { ManageRentalListComponent } from './manage-rentals/manage-rental-list/manage-rental-list.component';
import { ManageRentalAddComponent } from './manage-rentals/manage-rental-add/manage-rental-add.component';
import { RentalAddComponent } from './manage-rentals/manage-rental-add/rental-add/rental-add.component';
import { ManageUserListComponent } from './manage-users/manage-user-list/manage-user-list.component';
import { ManageUserAddComponent } from './manage-users/manage-user-add/manage-user-add.component';
import { UserListComponent } from './manage-users/manage-user-list/user-list/user-list.component';
import { UserAddComponent } from './manage-users/manage-user-add/user-add/user-add.component';
import { ManageVehicleListComponent } from './manage-vehicles/manage-vehicle-list/manage-vehicle-list.component';
import { ManageVehicleAddComponent } from './manage-vehicles/manage-vehicle-add/manage-vehicle-add.component';
import { VehicleListComponent } from './manage-vehicles/manage-vehicle-list/vehicle-list/vehicle-list.component';
import { VehicleAddComponent } from './manage-vehicles/manage-vehicle-add/vehicle-add/vehicle-add.component';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { frLocale } from 'ngx-bootstrap/locale';
import { ManageFeatureListComponent } from './manage-feature-list/manage-feature-list.component';
import { FeatureDetailsComponent } from './manage-feature-list/feature-details/feature-details.component';
import { VehicleDetailsComponent } from './manage-vehicles/manage-vehicle-list/vehicle-details/vehicle-details.component';
import { UserDetailsComponent } from './manage-users/manage-user-list/user-details/user-details.component';
import { RentalDetailsComponent } from './manage-rentals/manage-rental-list/rental-details/rental-details.component';
defineLocale('fr', frLocale);

@NgModule({
  declarations: [
    ManageComponent,
    ManageVehiclesComponent,
    ManageUsersComponent,
    ManageRentalsComponent,
    RentalListComponent,
    ManageRentalListComponent,
    ManageRentalAddComponent,
    RentalAddComponent,
    ManageUserListComponent,
    ManageUserAddComponent,
    UserListComponent,
    UserAddComponent,
    ManageVehicleListComponent,
    ManageVehicleAddComponent,
    VehicleListComponent,
    ManageFeatureCardComponent,
    VehicleAddComponent,
    ManageFeatureListComponent,
    FeatureDetailsComponent,
    VehicleDetailsComponent,
    UserDetailsComponent,
    RentalDetailsComponent
  ],
  imports: [
    SharedModule,
    ManageRoutingModule
  ]
})
export class ManageModule { }


