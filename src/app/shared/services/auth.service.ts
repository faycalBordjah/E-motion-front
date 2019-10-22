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

    public authApiUrl = AppConstants.api_authentication_url;

    private readonly jwt = AppConstants.jwt_token;
    public authApi = AppConstants.api_authentication_url;

    private readonly User: BehaviorSubject<User>;
    private readonly Token: BehaviorSubject<string>;
    private readonly Role: BehaviorSubject<string>;
    public readonly user$: Observable<User>;
    public readonly token$: Observable<string>;
    public readonly role$: Observable<string>;

    private loginResponse: LoginResponse;
    private userAuthority: UserAuthority;
    private userRole = new Role();

    private headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
      });


    constructor(private http: HttpClient) {
      this.Token = new BehaviorSubject<string>(JSON.parse(sessionStorage.getItem(this.jwt)));
      this.token$ = this.Token.asObservable();
      this.User = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
      this.user$ = this.User.asObservable();
      this.Role = new BehaviorSubject<string>(this.userRole.authority);
      this.role$ = this.Role.asObservable();
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
        this.Role.next(null);
    }

    getJwtToken() {
      const tokenSession = sessionStorage.getItem(this.jwt);
      if (tokenSession !== null) {
        const token = tokenSession.slice(1, -1);
        return token;
      }
    }

    isLoggedIn() {
      return !!this.getJwtToken();
    }

    storeJwtToken(token: string) {
      this.loginResponse = new LoginResponse();
      this.loginResponse = jwt_decode(token);
      this.userAuthority = new UserAuthority();
      this.userAuthority.roles = this.loginResponse.roles[0];
      this.userRole.authority = this.userAuthority.roles.authority;
      console.log(this.userRole.authority);
      if (this.userRole.authority === 'ADMIN_ROLE') {
        this.userRole.authority = 'admin';
      }
      console.log(this.userRole.authority);
      sessionStorage.setItem('currentUser', JSON.stringify(jwt_decode(token)));
      this.User.next(JSON.parse(sessionStorage.getItem('currentUser')));
      sessionStorage.setItem(this.jwt, token);
      this.Role.next(this.userRole.authority);
    }

    refreshRole() {
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
          console.log(this.userRole.authority);
          this.Role.next(this.userRole.authority);
        } else {
          this.Role.next(null);
        }
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

    public get currentRoleValue(): string {
      return this.Role.value;
    }

}
