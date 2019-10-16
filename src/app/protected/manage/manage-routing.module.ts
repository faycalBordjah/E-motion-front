import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageComponent } from './manage.component';
import { ManageVehiclesComponent } from './manage-vehicles/manage-vehicles.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageRentalsComponent } from './manage-rentals/manage-rentals.component';

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
        path: 'utilisateurs',
        component: ManageUsersComponent
      },
      {
        path: 'vehicules',
        component: ManageVehiclesComponent
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
