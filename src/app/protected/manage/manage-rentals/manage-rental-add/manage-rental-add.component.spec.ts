import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRentalAddComponent } from './manage-rental-add.component';

describe('ManageRentalAddComponent', () => {
  let component: ManageRentalAddComponent;
  let fixture: ComponentFixture<ManageRentalAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageRentalAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRentalAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
