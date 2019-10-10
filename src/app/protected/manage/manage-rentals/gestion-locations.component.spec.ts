import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRentalsComponent } from './manage-rentals.component';

describe('GestionLocationsComponent', () => {
  let component: ManageRentalsComponent;
  let fixture: ComponentFixture<ManageRentalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageRentalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
