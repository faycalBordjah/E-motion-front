import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { GestionComponent } from './gestion.component';
import { GestionVehiculesComponent } from './gestion-vehicules/gestion-vehicules.component';
import { GestionRoutingModule } from './gestion-routing.module';
import { VehiculeListComponent } from './gestion-vehicules/vehicule-list/vehicule-list.component';
import { GestionUtilisateursComponent } from './gestion-utilisateurs/gestion-utilisateurs.component';
import { UtilisateursListComponent } from './gestion-utilisateurs/utilisateurs-list/utilisateurs-list.component';
import { GestionLocationsComponent } from './gestion-locations/gestion-locations.component';
import { LocationsListComponent } from './gestion-locations/locations-list/locations-list.component';

@NgModule({
  declarations: [
    GestionComponent,
    GestionVehiculesComponent,
    VehiculeListComponent,
    GestionUtilisateursComponent,
    UtilisateursListComponent,
    GestionLocationsComponent,
    LocationsListComponent
  ],
  imports: [
    SharedModule,
    GestionRoutingModule
  ]
})
export class GestionModule { }
