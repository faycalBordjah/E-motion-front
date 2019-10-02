import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionComponent } from './gestion.component';
import { GestionVehiculesComponent } from './gestion-vehicules/gestion-vehicules.component';
import { GestionUtilisateursComponent } from './gestion-utilisateurs/gestion-utilisateurs.component';

const routes: Routes = [
  {
    path: 'gestion',
    component: GestionComponent,
    children: [
      {
        path: 'vehicules',
        component: GestionVehiculesComponent
      },
      {
        path: 'utilisateurs',
        component: GestionUtilisateursComponent
      },
      {
        path: '',
        redirectTo: 'vehicules',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionRoutingModule {}
