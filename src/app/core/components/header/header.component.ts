import {Component, Input, Output, EventEmitter, ViewChild, OnInit} from '@angular/core';
import {Vehicle} from 'src/app/shared/models/vehicle';
import {subtract} from 'ngx-bootstrap/chronos/public_api';
import {NgForm, FormGroup} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth.service';
import {ErrorHandlerService} from 'src/app/shared/services/error-handler.service';
import {Router, NavigationEnd} from '@angular/router';
import {Location} from '@angular/common';

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

    /*@Output()
    valueChange = new EventEmitter();*/

   /* @Input()
    appTitle: string;*/

    @Input()
    urlLogo: string;

    @Input()
    role: string;

    @Input()
    vehicles: Vehicle[];

    constructor(private authService: AuthService, private errorService: ErrorHandlerService
        ,       private router: Router, private location: Location) {
    }

    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;
    }

    rootUtilisateur() {

    }

    logIn(form: NgForm) {
        console.log(form);
        this.authService.login(form).subscribe(data => {
                if (data.status === 200) {
                    sessionStorage.setItem('username', data.result.username);
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
