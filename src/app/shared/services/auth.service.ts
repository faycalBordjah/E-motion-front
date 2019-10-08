import {Injectable} from '@angular/core';
import {AppConstants} from './../constants/app.constants';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiResponse} from '../models/api.response';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public authApiUrl = AppConstants.api_authentication_url;

    private headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    constructor(private http: HttpClient) {
    }

    login(loginPayload: any): Observable<any> {
        return this.http.post(this.authApiUrl + '/signin', loginPayload);
    }
}
