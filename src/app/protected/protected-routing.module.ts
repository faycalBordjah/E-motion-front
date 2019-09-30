import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiculeListComponent } from './vehicule/vehicule-list/vehicule-list.component';


const routes: Routes = [
  {
    path: 'vehicules', component: VehiculeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule {}
