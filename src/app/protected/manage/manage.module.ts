import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ManageComponent } from './manage.component';
import { ManageVehiclesComponent } from './manage-vehicles/manage-vehicles.component';
import { ManageRoutingModule } from './manage-routing.module';
import { VehiclesListComponent } from './manage-vehicles/vehicle-list/vehicles-list.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { UsersListComponent } from './manage-users/user-list/users-list.component';
import { ManageRentalsComponent } from './manage-rentals/manage-rentals.component';
import { RentalsListComponent } from './manage-rentals/rental-list/rentals-list.component';

@NgModule({
  declarations: [
    ManageComponent,
    ManageVehiclesComponent,
    VehiclesListComponent,
    ManageUsersComponent,
    UsersListComponent,
    ManageRentalsComponent,
    RentalsListComponent
  ],
  imports: [
    SharedModule,
    ManageRoutingModule
  ]
})
export class ManageModule { }
