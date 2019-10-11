import { Injectable } from '@angular/core';
import { UserModule } from 'src/app/protected/user/user.module';
import { AppConstants } from '../constants/app.constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: UserModule
})
export class UserService {

  public userApi = AppConstants.api_user_url;
  public authApi = AppConstants.api_authentication_url;


  private headers = new HttpHeaders(
    {
      'Content-Type': 'application/json',
    });

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<User[]>(this.userApi);
  }

  getById(id: string): Observable<any> {
    console.log(this.userApi + '/' + id);
    return this.http.get<any>(this.userApi + '/' + id, {headers: this.headers});
  }

  register(registerPayload: any): Observable<any> {
    return this.http.post(this.authApi + '/signup', registerPayload, {headers: this.headers});
  }

}
