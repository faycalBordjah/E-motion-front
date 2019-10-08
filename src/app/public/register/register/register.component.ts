import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, NgForm, Validators} from '@angular/forms';
import {AuthService} from '../../../shared/services/auth.service';
import {UserService} from '../../../shared/services/user.service';
import {AlertService} from '../../../shared/services/alert.service';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    private registerForm: FormGroup;
    private submitted = false;
    private loading = false;

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
            mail: ['', Validators.required, Validators.email],
            password: ['', [Validators.required, Validators.minLength(6)]],
            birthDate: ['', Validators.required],
            phone: ['', Validators.required],
            permitNumber: ['', Validators.required],
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
        this.alertService.clear();
        this.loading = true;
        this.userService.register(this.registerForm.value).pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    register(form: FormGroup) {
        console.log(form.controls);
    }
}
