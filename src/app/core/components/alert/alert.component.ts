import {Component, OnInit} from '@angular/core';
import {AlertService} from '../../../shared/alert.service';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
    message: any;

    constructor(private alertService: AlertService) {
    }

    ngOnInit() {
        this.alertService.getAlert().subscribe(msg => {
            switch (msg) {
                case 'success':
                    msg.cssClass = 'alert alert-success';
                    break;
                case 'error':
                    msg.cssClass = 'alert alert-danger';
                    break;
            }
        });
    }

}
