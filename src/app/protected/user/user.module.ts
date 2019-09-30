import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [UserListComponent],
  imports: [
    SharedModule
  ]
})
export class UserModule { }
