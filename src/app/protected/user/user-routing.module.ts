import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserProfilComponent } from './user-dashboard/user-profil/user-profil.component';
import { UserLocationsComponent } from './user-dashboard/user-locations/user-locations.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LocationDetailsComponent } from './user-dashboard/location-details/location-details.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'dashboard',
        component: UserDashboardComponent
      },
      {
        path: 'detailsprofil',
        component: UserProfilComponent
      },
      {
        path: 'listelocations',
        component: UserLocationsComponent
      },
      {
        path: 'detailslocation',
        component: LocationDetailsComponent
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
