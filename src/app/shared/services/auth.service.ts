import {Injectable} from '@angular/core';
import {AppConstants} from './../constants/app.constants';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, BehaviorSubject} from 'rxjs';
import { User } from '../models/user';
import { map } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';
import { LoginResponse } from '../models/login-response';
import { UserAuthority } from '../models/user-authority';
import { Role } from '../models/role';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private authApi = AppConstants.api_authentication_url;
    private userApi = AppConstants.api_admin_users;
    private readonly jwt = AppConstants.jwt_token;

    private readonly User: BehaviorSubject<User>;
    public readonly user$: Observable<User>;
    private readonly LoginResponse: BehaviorSubject<LoginResponse>;
    public readonly loginResponse$: Observable<LoginResponse>;
    public readonly token$: Observable<string>;
    private readonly Token: BehaviorSubject<string>;

    private loginResponse: LoginResponse;
    private currentUser: User;


    private headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
      });


    constructor(private http: HttpClient) {
      this.Token = new BehaviorSubject<string>(sessionStorage.getItem(this.jwt));
      this.token$ = this.Token.asObservable();
      this.LoginResponse = new BehaviorSubject<LoginResponse>(this.loginResponse);
      this.loginResponse$ = this.LoginResponse.asObservable();
      this.User = new BehaviorSubject<User>(this.currentUser);
      this.user$ = this.User.asObservable();

    }

    authenticate(loginPayload): Observable<any> {
      return this.http.post<any>(this.authApi + '/signin', loginPayload , {headers: this.headers})
      .pipe(map(data => {
        this.storeJwtToken(data.result.token);
        this.storeLoginResponsseAfterAuthenticate(data.result.token);
      }));
    }

    register(registerPayload: any): Observable<any> {
      return this.http.post<any>(this.authApi + '/signup', registerPayload, {headers: this.headers})
      .pipe(map(data => {
        // this.storeCurrentUser(data.result);
        //this.User.next(data);
      }));
    }

    getById(id: string): Observable<any> {
      console.log(this.userApi + '/' + id);
      return this.http.get<any>(this.userApi + '/' + id, {headers: this.headers}).
      pipe(map(data => {
        this.storeCurrentUser(data.result);
      }));
    }

    logout() {
        // remove user from session storage and set current user to null
        sessionStorage.removeItem(this.jwt);
        this.Token.next(null);
        this.User.next(null);
    }

    getJwtToken() {
      const tokenSession = sessionStorage.getItem(this.jwt);
      if (tokenSession !== null) {
        const token = tokenSession;
        return token;
      }
    }

    isLoggedIn() {
      return !!this.getJwtToken();
    }

    refreshCurrentUser() {
      const token = this.getJwtToken();
      this.storeLoginResponsseAfterAuthenticate(token);
      this.loginResponse$.subscribe( loginResponse => {
        this.getById(loginResponse.sub).subscribe();
      });
    }

    storeLoginResponsseAfterAuthenticate(token: string) {
      this.loginResponse = new LoginResponse();
      this.loginResponse = jwt_decode(token);
      console.log(this.loginResponse);
      this.LoginResponse.next(this.loginResponse);
    }

    storeJwtToken(token: string) {
      console.log(token);
      sessionStorage.setItem(this.jwt, token);
      this.Token.next(sessionStorage.getItem(this.jwt));
    }

    storeCurrentUser(user: User) {
      console.log(user);
      this.currentUser = user as User;
      this.User.next(this.currentUser);
    }

    /*refreshRole() {
      if (JSON.parse(sessionStorage.getItem(this.jwt)) !== null) {
          const token = JSON.parse(sessionStorage.getItem(this.jwt));
          this.loginResponse = new LoginResponse();
          this.loginResponse = jwt_decode(token);
          this.userAuthority = new UserAuthority();
          this.userAuthority.roles = this.loginResponse.roles[0];
          this.userRole.authority = this.userAuthority.roles.authority;
          console.log(this.userRole.authority);
          if (this.userRole.authority === 'ADMIN_ROLE') {
            this.userRole.authority = 'admin';
          }
          if (this.userRole.authority === 'USER_ROLE') {
            this.userRole.authority = 'user';
          }
          console.log(this.userRole.authority);
          this.Role.next(this.userRole.authority);
        } else {
          this.Role.next(null);
        }
    }*/

    public get currentTokenValue(): string {
      return this.Token.value;
    }

    set token(val: string) {
      this.Token.next(val);
    }

}
