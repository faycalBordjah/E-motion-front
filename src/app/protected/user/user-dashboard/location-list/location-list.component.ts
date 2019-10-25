import {Component, OnInit} from '@angular/core';
import {RentalService} from '../../../../shared/services/rental.service';
import {Rental} from '../../../../shared/models/rental';

@Component({
    selector: 'app-location-list',
    templateUrl: './location-list.component.html',
    styleUrls: ['./location-list.component.scss']
})
export class LocationListComponent implements OnInit {
    locations: Rental[];
    /*current = JSON.parse(sessionStorage.getItem('currentUser'));
    userId = this.current[0];*/

    constructor(private locationService: RentalService) {
        this.locationService.getAllByUser(2).subscribe(data => {
            this.locations = data.result as Rental[];

        });
    }

    ngOnInit() {
    }

}
