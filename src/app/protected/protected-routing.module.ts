import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiculeListComponent } from './vehicle/vehicle-list/vehicule-list.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { ManageComponent } from './manage/manage.component';


const routes: Routes = [
  {
    path: 'manage',
    loadChildren: () => import('./manage/manage.module').then(m => m.ManageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule {}
