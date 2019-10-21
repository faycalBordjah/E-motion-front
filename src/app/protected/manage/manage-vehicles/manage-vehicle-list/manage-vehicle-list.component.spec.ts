import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVehicleListComponent } from './manage-vehicle-list.component';

describe('ManageVehicleListComponent', () => {
  let component: ManageVehicleListComponent;
  let fixture: ComponentFixture<ManageVehicleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageVehicleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageVehicleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
