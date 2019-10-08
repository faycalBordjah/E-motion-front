import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlertService} from '../../../shared/services/alert.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
    message: any;

    constructor(private alertService: AlertService,
                private subscription: Subscription) {
    }

    ngOnInit() {
        this.subscription = this.alertService.getAlert().subscribe(msg => {
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

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
