import { Injectable } from '@angular/core';
import { LocationModule } from 'src/app/protected/location/location.module';
import { AppConstants } from './../constants/app.constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: LocationModule
})
export class LocationService {

  public apiLocation = AppConstants.api_location_Url;

  private headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  });


  constructor(private http: HttpClient) { }

  // user$ is id
  getAll(user$: number): Observable<any> {
    return this.http.get<any>(this.apiLocation + '/' + user$, {headers: this.headers});
  }

}
