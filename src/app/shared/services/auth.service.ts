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

    private readonly userBehaviorSub: BehaviorSubject<User>;
    private readonly tokenBehaviorSub: BehaviorSubject<string>;
    private readonly roleBehaviorSub: BehaviorSubject<string>;
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
      this.tokenBehaviorSub = new BehaviorSubject<string>(JSON.parse(sessionStorage.getItem(this.jwt)));
      this.token$ = this.tokenBehaviorSub.asObservable();
      this.userBehaviorSub = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
      this.user$ = this.userBehaviorSub.asObservable();
      this.roleBehaviorSub = new BehaviorSubject<string>(this.userRole.authority);
      this.role$ = this.roleBehaviorSub.asObservable();
    }

    authenticate(loginPayload): Observable<any> {
      return this.http.post<any>(this.authApiUrl + '/signin', loginPayload , {headers: this.headers})
      .pipe(map(data => {
        this.storeJwtToken(JSON.stringify(data.result.token));
        this.tokenBehaviorSub.next(data);
      }));
    }

    register(registerPayload: any): Observable<any> {
      return this.http.post<any>(this.authApi + '/signup', registerPayload, {headers: this.headers})
      .pipe(map(data => {
        this.storeCurrentUser(data.result);
        this.userBehaviorSub.next(data);
      }));
    }

    logout() {
        // remove user from session storage and set current user to null
        sessionStorage.removeItem(this.jwt);
        sessionStorage.removeItem('currentUser');
        this.tokenBehaviorSub.next(null);
        this.userBehaviorSub.next(null);
        this.roleBehaviorSub.next(null);
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
      this.userBehaviorSub.next(JSON.parse(sessionStorage.getItem('currentUser')));
      sessionStorage.setItem(this.jwt, token);
      this.roleBehaviorSub.next(this.userRole.authority);
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
          this.roleBehaviorSub.next(this.userRole.authority);
        } else {
          this.roleBehaviorSub.next(null);
        }
    }

    storeCurrentUser(user: User) {
      sessionStorage.setItem('currentUser', JSON.stringify(user));
    }

    public get currentTokenValue(): string {
      return this.tokenBehaviorSub.value;
    }

    set token(val: string) {
      this.tokenBehaviorSub.next(val);
    }

    public get currentUserValue(): User {
      return this.userBehaviorSub.value;
    }

    set user(val: User) {
      this.userBehaviorSub.next(val);
    }

    public get currentRoleValue(): string {
      return this.roleBehaviorSub.value;
    }

}
