import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageComponent } from './manage.component';
import { ManageVehiclesComponent } from './manage-vehicles/manage-vehicles.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageRentalsComponent } from './manage-rentals/manage-rentals.component';
import { ManageRentalListComponent } from './manage-rentals/manage-rental-list/manage-rental-list.component';
import { ManageRentalAddComponent } from './manage-rentals/manage-rental-add/manage-rental-add.component';
import { ManageUserListComponent } from './manage-users/manage-user-list/manage-user-list.component';
import { ManageUserAddComponent } from './manage-users/manage-user-add/manage-user-add.component';
import { ManageVehicleListComponent } from './manage-vehicles/manage-vehicle-list/manage-vehicle-list.component';
import { ManageVehicleAddComponent } from './manage-vehicles/manage-vehicle-add/manage-vehicle-add.component';
import { ManageFeatureListComponent } from './manage-feature-list/manage-feature-list.component';

const routes: Routes = [
  {
    path: '',
    component: ManageComponent,
    children: [
      {
        path: 'locationfeature',
        component: ManageRentalsComponent
      },
      {
        path: 'locations',
        component: ManageRentalListComponent
      },
      {
        path: 'location',
        component: ManageRentalAddComponent
      },
      {
        path: 'utilisateurfeature',
        component: ManageUsersComponent
      },
      {
        path: 'utilisateurs',
        component: ManageUserListComponent
      },
      {
        path: 'utilisateur',
        component: ManageUserAddComponent
      },
      {
        path: 'vehiculefeature',
        component: ManageVehiclesComponent
      },
      {
        path: 'vehicules',
        component: ManageVehicleListComponent
      },
      {
        path: 'vehicule',
        component: ManageVehicleAddComponent
      },
      {
        path: '',
        redirectTo: 'locationfeature',
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
