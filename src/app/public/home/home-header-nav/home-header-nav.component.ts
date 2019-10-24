import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-home-header-nav',
  templateUrl: './home-header-nav.component.html',
  styleUrls: ['./home-header-nav.component.scss']
})
export class HomeHeaderNavComponent implements OnInit {

  @Input()
  user: User;

  constructor() { }

  ngOnInit() {
  }

}
