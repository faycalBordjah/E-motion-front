import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  hideInput = true;
  invalidLogin = false;
  role$: Observable<string>;

  @ViewChild('loginForm', {static: false}) loginForm: NgForm;

  constructor(private authService: AuthService,
              private router: Router,
              private alertService: AlertService) { }

  ngOnInit() {
  }

  logIn(form: NgForm) {
    this.authService.authenticate(form).subscribe(
        (data) => {
            console.log(data);
            // this.authService.storeJwtToken(data.result.token);
            this.loginForm.reset();
            this.role$ = this.authService.role$;
            this.role$.subscribe(role => {
              if (role === 'admin') {
                this.router.navigate(['/manage']);
              } else {
                this.router.navigate(['/home']);
              }
            });
        },
        (error) => {
            console.error(error);
            this.invalidLogin = true;
            this.alertService.error(error);
        });
  }


}
