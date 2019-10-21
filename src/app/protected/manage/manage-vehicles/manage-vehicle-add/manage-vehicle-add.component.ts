import { Component, OnInit } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-manage-vehicle-add',
  templateUrl: './manage-vehicle-add.component.html',
  styleUrls: ['./manage-vehicle-add.component.scss']
})
export class ManageVehicleAddComponent implements OnInit {

  constructor(private localeService: BsLocaleService) { }

  ngOnInit() {
    this.localeService.use('fr');
  }

}
