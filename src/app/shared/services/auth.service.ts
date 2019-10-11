import {Injectable} from '@angular/core';
import {AppConstants} from './../constants/app.constants';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {ApiResponse} from '../models/api.response';
import {User} from '../models/user';
import { Tokens } from '../models/tokens';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public authApiUrl = AppConstants.api_authentication_url;

    private readonly JWT_TOKEN = 'JWT_TOKEN';

    private headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
      });


    constructor(private http: HttpClient) {
    }

    login(loginPayload): Observable<any> {
      console.log(loginPayload);
      return this.http.post(this.authApiUrl + '/signin', loginPayload , {headers: this.headers});
    }

    logout() {
        // remove user from session storage and set current user to null
        sessionStorage.removeItem(this.JWT_TOKEN);
    }

    getJwtToken() {
      return sessionStorage.getItem(this.JWT_TOKEN);
    }

    isLoggedIn() {
      return !!this.getJwtToken();
    }

    storeJwtToken(token: string) {
      sessionStorage.setItem(this.JWT_TOKEN, token);
    }

    removeJwtToken() {
      sessionStorage.removeItem(this.JWT_TOKEN);
    }
}
