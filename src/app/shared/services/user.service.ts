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

  private readonly usersBehaviorSub: BehaviorSubject<User[]>;
  public readonly users$: Observable<User[]>;
  private readonly userSelectedStored: BehaviorSubject<User>;
  public readonly userSelectedStored$: Observable<User>;
  private userDetails: User;
  private listUsers: User[];

  private headers = new HttpHeaders(
    {
      'Content-Type': 'application/json',
    });

  constructor(private http: HttpClient) {
    this.usersBehaviorSub = new BehaviorSubject<User[]>(this.listUsers);
    this.users$ = this.usersBehaviorSub.asObservable();
    this.userSelectedStored = new BehaviorSubject<User>(this.userDetails);
    this.userSelectedStored$ = this.userSelectedStored.asObservable();
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
    this.usersBehaviorSub.next(this.listUsers);
  }

  public get currentUsersValue(): User[] {
    return this.usersBehaviorSub.value;
  }

  storeUserDetails(user: User) {
    this.userDetails = user as User;
    this.userSelectedStored.next(this.userDetails);
  }

}
