import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { GestionComponent } from './gestion.component';
import { GestionVehiculesComponent } from './gestion-vehicules/gestion-vehicules.component';
import { GestionRoutingModule } from './gestion-routing.module';
import { VehiculeListComponent } from './gestion-vehicules/vehicule-list/vehicule-list.component';
import { GestionUtilisateursComponent } from './gestion-utilisateurs/gestion-utilisateurs.component';
import { UtilisateursListComponent } from './gestion-utilisateurs/utilisateurs-list/utilisateurs-list.component';

@NgModule({
  declarations: [
    GestionComponent,
    GestionVehiculesComponent,
    VehiculeListComponent,
    GestionUtilisateursComponent,
    UtilisateursListComponent
  ],
  imports: [
    SharedModule,
    GestionRoutingModule
  ]
})
export class GestionModule { }
