import { Injectable } from '@angular/core';
import { RentalModule } from 'src/app/protected/rental/rental.module';
import { AppConstants } from './../constants/app.constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: RentalModule
})
export class RentalService {

  public apiLocation = AppConstants.api_location_url;

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
