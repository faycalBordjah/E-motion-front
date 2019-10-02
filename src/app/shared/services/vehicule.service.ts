import { Injectable } from '@angular/core';
import { VehiculeModule } from 'src/app/protected/vehicule/vehicule.module';
import { AppConstants } from '../constants/app.constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicule } from '../models/vehicule';


@Injectable({
  providedIn: VehiculeModule
})
export class VehiculeService {

  public vehiculeApi = AppConstants.api_vehicule_Url;

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(this.vehiculeApi);
  }

  getById(id: string): Observable<Vehicule> {
    return this.http.get<any>(this.vehiculeApi + '/' + id);
  }
}
