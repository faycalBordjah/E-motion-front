import {NgModule} from '@angular/core';
import {SharedModule} from 'src/app/shared/shared.module';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RouterModule } from '@angular/router';
import { ConnexionComponent } from './connexion.component';
import { ConnexionRoutingModule } from './connexion-routing.module';

@NgModule({
    declarations: [ConnexionComponent, RegisterFormComponent, LoginFormComponent],
    imports: [
        RouterModule,
        SharedModule,
        ConnexionRoutingModule
    ]
})
export class ConnexionModule {
}
