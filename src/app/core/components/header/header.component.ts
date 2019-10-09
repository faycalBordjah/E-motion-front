import {Component, Input, Output, EventEmitter, ViewChild, OnInit} from '@angular/core';
import {Vehicle} from 'src/app/shared/models/vehicle';
import {NgForm, FormGroup} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth.service';
import {ErrorHandlerService} from 'src/app/shared/services/error-handler.service';
import {Router, NavigationEnd} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    navbarOpen = false;
    hideInput = true;
    invalidLogin = false;
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
                private errorService: ErrorHandlerService
        ,       private router: Router) {
    }

    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }

    logIn(form: NgForm) {
        this.authService.login(form).subscribe(data => {
                if (data.status === 200) {
                    sessionStorage.setItem('userId', data.result.Id);
                    this.role = 'admin';
                    console.log(data.result);
                    this.isAuthenticated = true;
                    this.loginForm.reset();
                    this.currentUrl = this.router.url;
                    console.log('currentUrl: ' + this.currentUrl);
                    this.router.navigate([this.currentUrl]);
                    // this.valueChange.emit(this.isAuthenticated);
                } else {
                    this.invalidLogin = true;
                    alert(data.message);
                }
            },
            (error) => {
                console.error(error);
                this.errorService.handleError(error);
            });
    }

    logOut() {
        window.localStorage.removeItem('userId');
        this.isAuthenticated = false;
        this.role = 'anonyme';
        const currentUrl = this.router.url;
        console.log(currentUrl);
        this.router.navigate([this.currentUrl]);
    }

}
