import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/shared/services/vehicle.service';
import { UserService } from 'src/app/shared/services/user.service';
import { Vehicle } from 'src/app/shared/models/vehicle';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-manage-rental-add',
  templateUrl: './manage-rental-add.component.html',
  styleUrls: ['./manage-rental-add.component.scss']
})
export class ManageRentalAddComponent implements OnInit {

  users: User[];
  vehicles: Vehicle[];

  constructor(private vehicleService: VehicleService, private userService: UserService) {
    this.vehicleService.getAll().subscribe();
    this.vehicleService.vehicles$.subscribe(vehicles => {
      if (vehicles) {
        this.vehicles = vehicles as Vehicle[];
        console.log(this.vehicles);
      }
    });
    this.userService.getAll().subscribe();
    this.userService.users$.subscribe(users => {
      if (users) {
        this.users = users as User[];
        console.log(this.users);
      }
    });
   }

  ngOnInit() {
  }

}
