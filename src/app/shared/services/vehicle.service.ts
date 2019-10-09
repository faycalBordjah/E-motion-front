import { Injectable } from '@angular/core';
import { VehiculeModule } from 'src/app/protected/vehicle/vehicule.module';
import { AppConstants } from '../constants/app.constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from '../models/vehicle';


@Injectable({
  providedIn: VehiculeModule
})
export class VehicleService {

  public vehiculeApi = AppConstants.api_vehicle_url;

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(this.vehiculeApi);
  }

  getById(id: string): Observable<Vehicle> {
    return this.http.get<any>(this.vehiculeApi + '/' + id);
  }
}
