import { Injectable } from '@angular/core';
import { AppConstants } from '../constants/app.constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userApi = AppConstants.api_admin_users;

  private readonly Users: BehaviorSubject<User[]>;
  public readonly users$: Observable<User[]>;
  private readonly UserSelectedStored: BehaviorSubject<User>;
  public readonly userSelectedStored$: Observable<User>;
  private userDetails: User;
  private listUsers: User[];

  private headers = new HttpHeaders(
    {
      'Content-Type': 'application/json',
    });

  constructor(private http: HttpClient) {
    this.Users = new BehaviorSubject<User[]>(this.listUsers);
    this.users$ = this.Users.asObservable();
    this.UserSelectedStored = new BehaviorSubject<User>(this.userDetails);
    this.userSelectedStored$ = this.UserSelectedStored.asObservable();
  }

  getAll(): Observable<any> {
    return this.http.get<any>(this.userApi)
    .pipe(map(data => {
      this.storeUsersList(data.result);
    }));
  }

  getById(id: string): Observable<any> {
    console.log(this.userApi + '/' + id);
    return this.http.get<any>(this.userApi + '/' + id, {headers: this.headers});
  }

  storeUsersList(users: User[]) {
    console.log(users);
    this.listUsers = users as User[];
    this.Users.next(this.listUsers);
  }

  public get currentUsersValue(): User[] {
    return this.Users.value;
  }

  storeUserDetails(user: User) {
    this.userDetails = user as User;
    this.UserSelectedStored.next(this.userDetails);
  }

}
