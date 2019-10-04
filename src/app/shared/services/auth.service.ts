import { Injectable } from '@angular/core';
import { AppConstants } from './../constants/app.constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api.response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authApi = AppConstants.api_authentication_Url;

  private headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  // pour les test : form avec mail et password
  login(loginPayload: any): Observable<any> {
    return this.http.post(this.authApi, loginPayload); //, {headers: this.headers}
    //return this.http.post<ApiResponse>(this.authApi + 'token/generate-token', loginPayload);
  }
}
