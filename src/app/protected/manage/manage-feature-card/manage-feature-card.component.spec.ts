import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFeatureCardComponent } from './manage-feature-card.component';

describe('ManageFeatureCardComponent', () => {
  let component: ManageFeatureCardComponent;
  let fixture: ComponentFixture<ManageFeatureCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageFeatureCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageFeatureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
