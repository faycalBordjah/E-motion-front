import {Injectable} from '@angular/core';
import {AppConstants} from './../constants/app.constants';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';
import {Rental} from '../models/rental';
import {map} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class RentalService {

    public apiLocation = AppConstants.api_admin_locations;
    public apiLocationUser = AppConstants.api_user_locations;

    private readonly Rentals: BehaviorSubject<Rental[]>;
    public readonly rentals$: Observable<Rental[]>;
    private readonly RentalSelectedStored: BehaviorSubject<Rental>;
    public readonly rentalSelectedStored$: Observable<Rental>;
    private listRentals: Rental[];
    private rentalDetails: Rental;

    private headers = new HttpHeaders({
        'Content-Type': 'application/json',
    });


    constructor(private http: HttpClient) {
        this.Rentals = new BehaviorSubject<Rental[]>(this.listRentals);
        this.rentals$ = this.Rentals.asObservable();
        this.RentalSelectedStored = new BehaviorSubject<Rental>(this.rentalDetails);
        this.rentalSelectedStored$ = this.RentalSelectedStored.asObservable();
    }

    getAll(): Observable<any> {
        return this.http.get<any>(this.apiLocation, {headers: this.headers})
            .pipe(map(data => {
                this.storeRentalsList(data.result);
            }));
    }

    getAllByUser(userId: number): Observable<any> {
        console.log(userId);
        return this.http.get(this.apiLocationUser + '/' + userId, {headers: this.headers});
    }

    /*
    // user$ is id
    getAll(user$: number): Observable<any> {
      return this.http.get<any>(this.apiLocation + '/' + user$, {headers: this.headers});
    }*/

    addRental(rental: any): Observable<any> {
        return this.http.post<any>(this.apiLocation, rental, {headers: this.headers});
    }

    updateRentalStatus(id: string, status: any): Observable<any> {
        return this.http.put<any>(this.apiLocation + '/' + id, status, {headers: this.headers});
    }

    storeRentalsList(rentals: Rental[]) {
        console.log(rentals);
        this.listRentals = rentals as Rental[];
        this.Rentals.next(this.listRentals);
    }

    public get currentRentalsValue(): Rental[] {
        return this.Rentals.value;
    }

    storeRentalDetails(rental: Rental) {
        this.rentalDetails = rental as Rental;
        this.RentalSelectedStored.next(this.rentalDetails);

    }


}
