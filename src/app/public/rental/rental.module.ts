import { NgModule } from '@angular/core';
import { RentalComponent } from './rental.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { VehicleCarouselComponent } from './vehicle-carousel/vehicle-carousel.component';
import { VehicleCardListComponent } from './vehicle-card-list/vehicle-card-list.component';

@NgModule({
  declarations: [
    RentalComponent,
    VehicleCarouselComponent,
    VehicleCardListComponent
  ],
  imports: [
    SharedModule,
  ]
})
export class RentalModule { }
