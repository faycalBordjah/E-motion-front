import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { VehiculeListComponent } from './vehicule-list/vehicule-list.component';


@NgModule({
  declarations: [VehiculeListComponent],
  imports: [
    SharedModule
  ]
})
export class VehiculeModule { }
