import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRentalListComponent } from './manage-rental-list.component';

describe('ManageRentalListComponent', () => {
  let component: ManageRentalListComponent;
  let fixture: ComponentFixture<ManageRentalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageRentalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRentalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
