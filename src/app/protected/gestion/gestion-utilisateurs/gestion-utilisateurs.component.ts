import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/shared/services/user.service';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';

@Component({
  selector: 'app-gestion-utilisateurs',
  templateUrl: './gestion-utilisateurs.component.html',
  styleUrls: ['./gestion-utilisateurs.component.scss']
})
export class GestionUtilisateursComponent implements OnInit {

  utilisateurs: User[];

  constructor(private userService: UserService, private errorService: ErrorHandlerService) { }

  ngOnInit() {
    this.userService.getAll().subscribe(data => {
      if (data) {
        this.utilisateurs = data.result as User[];
        console.log(this.utilisateurs);
        }
      },
      (error) => {
        this.errorService.handleError(error);
      }
    );
  }

}
