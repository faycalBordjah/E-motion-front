import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleCardListComponent } from './vehicle-card-list.component';

describe('VehicleCardListComponent', () => {
  let component: VehicleCardListComponent;
  let fixture: ComponentFixture<VehicleCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
