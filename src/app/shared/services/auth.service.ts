import {Injectable} from '@angular/core';
import {AppConstants} from './../constants/app.constants';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {ApiResponse} from '../models/api.response';
import {User} from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public authApiUrl = AppConstants.api_authentication_url;

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    private headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(loginPayload: any): Observable<any> {
        return this.http.post(this.authApiUrl + '/signin', loginPayload);
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
