import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth.service';
import {UserService} from '../../../shared/services/user.service';
import {AlertService} from '../../../shared/services/alert.service';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import { PayLoad } from './../../../shared/models/payload';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    private registerForm: FormGroup;
    private submitted = false;
    private loading = false;
    payload: PayLoad = new PayLoad();

    constructor(private formBuilder: FormBuilder,
                private authService: AuthService,
                private userService: UserService,
                private alertService: AlertService,
                private router: Router) {
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            mail: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            birthDay: ['', Validators.required],
            phone: ['', Validators.required],
            permitNum: ['', Validators.required],
            roadNumber: ['', Validators.required],
            street: ['', Validators.required],
            town: ['', Validators.required],
            zipCode: ['', Validators.required],
        });
    }

    get getFields() {
        return this.registerForm.controls;
    }

    onSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        this.payload.mail = this.registerForm.controls.mail.value;
        this.payload.password = this.registerForm.controls.password.value;
        this.alertService.clear();
        this.loading = true;
        console.log(this.registerForm.controls);
        this.userService.register(this.registerForm.value).pipe(first())
            .subscribe(
                dataRegister => {
                    this.authService.login(this.payload).subscribe(dataLogin => {
                      this.authService.storeJwtToken(dataLogin.result.token);
                    });

                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['home']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

}
