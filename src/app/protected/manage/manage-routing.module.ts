import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageComponent } from './manage.component';
import { ManageVehiclesComponent } from './manage-vehicles/manage-vehicles.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageRentalsComponent } from './manage-rentals/manage-rentals.component';

const routes: Routes = [
  {
    path: 'manage',
    component: ManageComponent,
    children: [
      {
        path: 'vehicules',
        component: ManageVehiclesComponent
      },
      {
        path: 'utilisateurs',
        component: ManageUsersComponent
      },
      {
        path: '',
        redirectTo: 'vehicules',
        pathMatch: 'full'
      },
      {
        path: 'locations',
        component: ManageRentalsComponent

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule {}
