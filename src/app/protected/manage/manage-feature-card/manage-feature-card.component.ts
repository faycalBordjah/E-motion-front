import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-manage-feature-card',
  templateUrl: './manage-feature-card.component.html',
  styleUrls: ['./manage-feature-card.component.scss']
})
export class ManageFeatureCardComponent implements OnInit {

  @Input()
  description: string;

  @Input()
  icon: string;

  @Input()
  title: string;

  @Input()
  route: string;

  constructor() { }

  ngOnInit() {
  }

}
