import { Injectable } from '@angular/core';
import { AppConstants } from '../constants/app.constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Vehicle } from '../models/vehicle';
import { ApiResponse } from './../models/api.response';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  public vehiculeApi = AppConstants.api_vehicle_url;

  private adminApi = AppConstants.api_admin_vehicule;

  private readonly Vehicles: BehaviorSubject<Vehicle[]>;
  public readonly vehicles$: Observable<Vehicle[]>;
  private listVehicles: Vehicle[];

  private headers = new HttpHeaders(
    {
      'Content-Type': 'application/json',
    });

  constructor(private http: HttpClient) {
    this.Vehicles = new BehaviorSubject<Vehicle[]>(this.listVehicles);
    this.vehicles$ = this.Vehicles.asObservable();
   }

  getAll(): Observable<any> {
    return this.http.get<any>(this.vehiculeApi)
    .pipe(map(data => {
      this.storeVehiclesList(data.result);
    }));
  }

  getById(id: string): Observable<Vehicle> {
    return this.http.get<any>(this.vehiculeApi + '/' + id);
  }

  addVehicle(vehicle: any): Observable<ApiResponse> {
    console.log('service vehicule add : ' + JSON.stringify(vehicle));
    return this.http.post<ApiResponse>(this.adminApi + '/vehicles', vehicle, {headers: this.headers});
  }

  storeVehiclesList(vehicles: Vehicle[]) {
    console.log(vehicles);
    this.listVehicles = vehicles as Vehicle[];
    this.Vehicles.next(this.listVehicles);
  }

  public get currentVehiclesValue(): Vehicle[] {
    return this.Vehicles.value;
  }
}
