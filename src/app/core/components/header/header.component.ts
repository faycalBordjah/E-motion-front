import {Component, Input, ViewChild, OnInit} from '@angular/core';
import {Vehicle} from 'src/app/shared/models/vehicle';
import {NgForm, FormGroup} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth.service';
import {ErrorHandlerService} from 'src/app/shared/services/error-handler.service';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import {AlertService} from '../../../shared/services/alert.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    navbarOpen = false;
    hideInput = true;
    invalidLogin = false;

    @Input()
    isAuthenticated: boolean;

    currentUrl: string;

    @ViewChild('loginForm', {static: false}) loginForm: NgForm;

    @Input()
    urlLogo: string;

    @Input()
    role: string;

    @Input()
    vehicles: Vehicle[];

    constructor(private authService: AuthService,
                private errorService: ErrorHandlerService,
                private router: Router,
                private alertService: AlertService) {

        this.ngOnInit();
    }

    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }

    logIn(form: NgForm) {
        this.authService.login(form).subscribe(
            (data) => {
                console.log(data.result);
                this.authService.storeJwtToken(data.result.token);
                this.role = 'admin';
                this.isAuthenticated = true;
                this.loginForm.reset();
                this.currentUrl = this.router.url;
                console.log('currentUrl: ' + this.currentUrl);
                this.router.navigate([this.currentUrl]);
            },
            (error) => {
                console.error(error);
                this.invalidLogin = true;
                this.alertService.error(error);
            });
    }

    logOut() {
        this.authService.logout();
        this.isAuthenticated = false;
        this.role = 'anonyme';
        const currentUrl = this.router.url;
        console.log(currentUrl);
        this.router.navigate(['/home']);
    }

    ngOnInit(): void {
        if (this.authService.getJwtToken()) {
            this.isAuthenticated = true;
        }
    }

}
