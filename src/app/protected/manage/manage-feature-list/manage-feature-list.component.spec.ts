import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFeatureListComponent } from './manage-feature-list.component';

describe('ManageFeatureListComponent', () => {
  let component: ManageFeatureListComponent;
  let fixture: ComponentFixture<ManageFeatureListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageFeatureListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageFeatureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
