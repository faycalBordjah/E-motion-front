import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiculeListComponent } from './vehicule/vehicule-list/vehicule-list.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { GestionComponent } from './gestion/gestion.component';


const routes: Routes = [
  {
    path: 'vehicules', component: VehiculeListComponent
  },
  {
    path: 'users', component: UserListComponent
  },
  {
    path: 'gestion', component: GestionComponent
    //loadChildren: () => import('./gestion/gestion.module').then(m => m.GestionModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule {}
