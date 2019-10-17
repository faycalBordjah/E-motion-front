import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './connexion.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';


const routes: Routes = [
  {
    path: '',
    component: ConnexionComponent,
    children: [
      {
        path: 'signin',
        component: LoginFormComponent
      },
      {
        path: 'signup',
        component: RegisterFormComponent
      },
      {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnexionRoutingModule {}
