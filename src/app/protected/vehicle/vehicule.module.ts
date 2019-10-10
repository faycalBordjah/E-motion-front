import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { VehiculeListComponent } from './vehicle-list/vehicule-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [VehiculeListComponent],
  imports: [
    SharedModule,
    RouterModule
  ]
})
export class VehiculeModule { }
