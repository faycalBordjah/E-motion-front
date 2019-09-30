import { Injectable } from '@angular/core';
import { UserModule } from 'src/app/protected/user/user.module';
import { AppConstants } from '../constants/app.constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: UserModule
})
export class UserService {

  public userApi = AppConstants.api_User_Url;

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(this.userApi);
  }

  getById(id: string): Observable<any> {
    return this.http.get<any>(this.userApi + '/' + id);
  }

}
