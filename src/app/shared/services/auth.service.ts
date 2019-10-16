import {Injectable} from '@angular/core';
import {AppConstants} from './../constants/app.constants';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, BehaviorSubject} from 'rxjs';
import { User } from '../models/user';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public authApiUrl = AppConstants.api_authentication_url;

    private readonly jwt = AppConstants.jwt_token;
    public authApi = AppConstants.api_authentication_url;

    private readonly User: BehaviorSubject<User>;
    private readonly Token: BehaviorSubject<string>;
    public readonly user$: Observable<User>;
    public readonly token$: Observable<string>;

    private headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
      });


    constructor(private http: HttpClient) {
      this.Token = new BehaviorSubject<string>(JSON.parse(sessionStorage.getItem(this.jwt)));
      this.token$ = this.Token.asObservable();
      this.User = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
      this.user$ = this.User.asObservable();
    }

    authenticate(loginPayload): Observable<any> {
      return this.http.post<any>(this.authApiUrl + '/signin', loginPayload , {headers: this.headers})
      .pipe(map(data => {
        this.storeJwtToken(JSON.stringify(data.result.token));
        this.Token.next(data);
      }));
    }

    register(registerPayload: any): Observable<any> {
      return this.http.post<any>(this.authApi + '/signup', registerPayload, {headers: this.headers})
      .pipe(map(data => {
        this.storeCurrentUser(data.result);
        this.User.next(data);
      }));
    }

    logout() {
        // remove user from session storage and set current user to null
        sessionStorage.removeItem(this.jwt);
        sessionStorage.removeItem('currentUser');
        this.Token.next(null);
        this.User.next(null);
    }

    getJwtToken() {
      return sessionStorage.getItem(this.jwt);
    }

    isLoggedIn() {
      return !!this.getJwtToken();
    }

    storeJwtToken(token: string) {
      sessionStorage.setItem(this.jwt, token);
    }

    storeCurrentUser(user: User) {
      sessionStorage.setItem('currentUser', JSON.stringify(user));
    }

    public get currentTokenValue(): string {
      return this.Token.value;
    }

    set token(val: string) {
      this.Token.next(val);
    }

    public get currentUserValue(): User {
      return this.User.value;
    }

    set user(val: User) {
      this.User.next(val);
    }

}
