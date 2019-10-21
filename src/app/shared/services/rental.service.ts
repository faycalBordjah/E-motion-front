import { Injectable } from '@angular/core';
import { AppConstants } from './../constants/app.constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Rental } from '../models/rental';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RentalService {

  public apiLocation = AppConstants.api_location_url;

  private readonly Rentals: BehaviorSubject<Rental[]>;
  public readonly rentals$: Observable<Rental[]>;
  private listRentals: Rental[];

  private headers = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  });


  constructor(private http: HttpClient) {
    this.Rentals = new BehaviorSubject<Rental[]>(this.listRentals);
    this.rentals$ = this.Rentals.asObservable();
   }

  getAll(): Observable<any> {
    return this.http.get<any>(this.apiLocation, {headers: this.headers})
    .pipe(map(data => {
      this.storeRentalsList(data.result);
    }));
  }
  /*
  // user$ is id
  getAll(user$: number): Observable<any> {
    return this.http.get<any>(this.apiLocation + '/' + user$, {headers: this.headers});
  }*/

  storeRentalsList(rentals: Rental[]) {
    console.log(rentals);
    this.listRentals = rentals as Rental[];
    this.Rentals.next(this.listRentals);
  }

  public get currentRentalsValue(): Rental[] {
    return this.Rentals.value;
  }


}
