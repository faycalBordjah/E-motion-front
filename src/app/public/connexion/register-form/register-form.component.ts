import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth.service';
import {UserService} from '../../../shared/services/user.service';
import {AlertService} from '../../../shared/services/alert.service';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {LoginPayLoad} from '../../../shared/models/loginPayLoad';
import {Address} from '../../../shared/models/address';
import {User} from '../../../shared/models/user';

@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
    private registerForm: FormGroup;
    private submitted = false;
    private loading = false;

    payload: User = new User();

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
            city: ['', Validators.required],
            state: ['', Validators.required],
            zip: ['', Validators.required],
            country: ['', Validators.required]
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
        this.payload.address = new Address(this.getFields.roadNumber.value, this.getFields.street.value, this.getFields.city.value,
            this.getFields.state.value, this.getFields.zip.value, this.getFields.country.value
        );
        this.payload.mail = this.registerForm.controls.mail.value;
        this.payload.password = this.registerForm.controls.password.value;
        this.payload.firstName = this.getFields.firstName.value;
        this.payload.lastName = this.getFields.lastName.value;
        this.payload.birthDay = this.getFields.birthDay.value;
        this.payload.phone = this.getFields.phone.value;
        this.payload.permitNum = this.getFields.permitNum.value;
        this.alertService.clear();
        this.loading = true;
        this.authService.register(this.payload).subscribe(
            () => {
                this.alertService.success('Registration successful', true);
                this.router.navigate(['home']);
            },
            (error) => {
                this.alertService.error(error);
                this.loading = false;
            });
    }

}
