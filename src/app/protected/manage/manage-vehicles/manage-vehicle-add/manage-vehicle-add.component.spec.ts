import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVehicleAddComponent } from './manage-vehicle-add.component';

describe('ManageVehicleAddComponent', () => {
  let component: ManageVehicleAddComponent;
  let fixture: ComponentFixture<ManageVehicleAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageVehicleAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageVehicleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
