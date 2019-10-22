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

  public apiLocation = AppConstants.api_admin_locations;

  private readonly rentals: BehaviorSubject<Rental[]>;
  public readonly rentals$: Observable<Rental[]>;
  private readonly rentalSelectedStored: BehaviorSubject<Rental>;
  public readonly rentalSelectedStored$: Observable<Rental>;
  private listRentals: Rental[];
  private rentalDetails: Rental;

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {
    this.rentals = new BehaviorSubject<Rental[]>(this.listRentals);
    this.rentals$ = this.rentals.asObservable();
    this.rentalSelectedStored = new BehaviorSubject<Rental>(this.rentalDetails);
    this.rentalSelectedStored$ = this.rentalSelectedStored.asObservable();
   }

  getAll(): Observable<any> {
    return this.http.get<any>(this.apiLocation, {headers: this.headers})
    .pipe(map(data => {
      this.storeRentalsList(data.result);
    }));
  }

  storeRentalsList(rentals: Rental[]) {
    console.log(rentals);
    this.listRentals = rentals as Rental[];
    this.rentals.next(this.listRentals);
  }

  public get currentRentalsValue(): Rental[] {
    return this.rentals.value;
  }

  storeRentalDetails(rental: Rental) {
    this.rentalDetails = rental as Rental;
    this.rentalSelectedStored.next(this.rentalDetails);
  }
}
