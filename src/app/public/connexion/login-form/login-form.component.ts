import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';
import { LoginResponse } from 'src/app/shared/models/login-response';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  hideInput = true;
  invalidLogin = false;
  loginResponse$: Observable<LoginResponse>;
  user$: Observable<User>;
  user: User;

  @ViewChild('loginForm', {static: false}) loginForm: NgForm;

  constructor(private authService: AuthService,
              private router: Router,
              private alertService: AlertService) { }

  ngOnInit() {
  }

  logIn(form: NgForm) {
    this.authService.authenticate(form).subscribe(
      data => {
        this.loginForm.reset();
        this.loginResponse$ = this.authService.loginResponse$;
        this.authService.loginResponse$.subscribe( loginResponse => {
          this.authService.getById(loginResponse.sub);
        });
      });
    this.authService.user$.subscribe(user => {
      if (user) {
        if (user.roles[0].authority === 'ADMIN_ROLE') {
          this.router.navigate(['/manage']);
        } else {
          this.router.navigate(['/home']);
        }
      }
  });
  }
}
