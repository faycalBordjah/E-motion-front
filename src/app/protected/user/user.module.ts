import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserComponent } from './user.component';
import { UserProfilComponent } from './user-dashboard/user-profil/user-profil.component';
import { UserLocationsComponent } from './user-dashboard/user-locations/user-locations.component';
import { LocationDetailsComponent } from './user-dashboard/location-details/location-details.component';
import { LocationListComponent } from './user-dashboard/location-list/location-list.component';

@NgModule({
  declarations: [
    UserDashboardComponent,
    UserComponent,
    UserProfilComponent,
    UserLocationsComponent,
    LocationDetailsComponent,
    LocationListComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule,
  ]
})
export class UserModule { }
