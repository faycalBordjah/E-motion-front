import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageComponent } from './manage.component';
import { ManageVehiclesComponent } from './manage-vehicles/manage-vehicles.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageRentalsComponent } from './manage-rentals/manage-rentals.component';
import { ManageRentalAddComponent } from './manage-rentals/manage-rental-add/manage-rental-add.component';
import { ManageUserAddComponent } from './manage-users/manage-user-add/manage-user-add.component';
import { ManageVehicleAddComponent } from './manage-vehicles/manage-vehicle-add/manage-vehicle-add.component';

const routes: Routes = [
  {
    path: '',
    component: ManageComponent,
    children: [
      {
        path: 'locations',
        component: ManageRentalsComponent
      },
      {
        path: 'location',
        component: ManageRentalAddComponent
      },
      {
        path: 'utilisateurs',
        component: ManageUsersComponent
      },
      {
        path: 'utilisateur',
        component: ManageUserAddComponent
      },
      {
        path: 'vehicules',
        component: ManageVehiclesComponent
      },
      {
        path: 'vehicule',
        component: ManageVehicleAddComponent
      },
      {
        path: '',
        redirectTo: 'locations',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule {}
