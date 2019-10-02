import { Component, OnInit } from '@angular/core';
import { Vehicule } from 'src/app/shared/models/vehicule';
import { VehiculeService } from 'src/app/shared/services/vehicule.service';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';

@Component({
  selector: 'app-gestion-vehicules',
  templateUrl: './gestion-vehicules.component.html',
  styleUrls: ['./gestion-vehicules.component.scss']
})
export class GestionVehiculesComponent implements OnInit {

  vehicules: Vehicule[];

  constructor(private vehiculeService: VehiculeService, private errorService: ErrorHandlerService) { }

  ngOnInit() {
    this.vehiculeService.getAll().subscribe(data => {
      if (data) {
        this.vehicules = data.result as Vehicule[];
        console.log(this.vehicules);
        }
      },
      (error) => {
        this.errorService.handleError(error);
      }
    );
  }
}
