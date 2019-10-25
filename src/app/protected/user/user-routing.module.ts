import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserProfilComponent } from './user-dashboard/user-profil/user-profil.component';
import { LocationDetailsComponent } from './user-dashboard/location-details/location-details.component';
import {LocationListComponent} from './user-dashboard/location-list/location-list.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'detailsprofil',
        component: UserProfilComponent
      },
      {
        path: 'detailslocation',
        component: LocationDetailsComponent
      },      {
        path: 'listelocations',
        component: LocationListComponent
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
