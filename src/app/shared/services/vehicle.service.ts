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

  public vehicleApi = AppConstants.api_vehicle_url;

  private adminApi = AppConstants.api_admin_vehicule;

  private readonly vehicleBehaviorSub: BehaviorSubject<Vehicle[]>;
  public readonly vehicles$: Observable<Vehicle[]>;
  private readonly vehicleSelectedStored: BehaviorSubject<Vehicle>;
  public readonly vehicleSelectedStored$: Observable<Vehicle>;
  private vehicleDetails: Vehicle;
  private listVehicles: Vehicle[];

  private headers = new HttpHeaders(
    {
      'Content-Type': 'application/json',
    });

  constructor(private http: HttpClient) {
    this.vehicleBehaviorSub = new BehaviorSubject<Vehicle[]>(this.listVehicles);
    this.vehicles$ = this.vehicleBehaviorSub.asObservable();
    this.vehicleSelectedStored = new BehaviorSubject<Vehicle>(this.vehicleDetails);
    this.vehicleSelectedStored$ = this.vehicleSelectedStored.asObservable();
   }

  getAll(): Observable<any> {
    return this.http.get<any>(this.vehicleApi)
    .pipe(map(data => {
      this.storeVehiclesList(data.result);
    }));
  }

  getById(id: string): Observable<Vehicle> {
    return this.http.get<any>(this.vehicleApi + '/' + id);
  }

  addVehicle(vehicle: any): Observable<ApiResponse> {
    console.log('service vehicule add : ' + JSON.stringify(vehicle));
    return this.http.post<ApiResponse>(this.adminApi + '/vehicles', vehicle, {headers: this.headers});
  }

  storeVehiclesList(vehicles: Vehicle[]) {
    this.listVehicles = vehicles as Vehicle[];
    this.vehicleBehaviorSub.next(this.listVehicles);
  }

  public get currentVehiclesValue(): Vehicle[] {
    return this.vehicleBehaviorSub.value;
  }

  storeVehicleDetails(vehicle: Vehicle) {
    this.vehicleDetails = vehicle as Vehicle;
    this.vehicleSelectedStored.next(this.vehicleDetails);
  }
}
