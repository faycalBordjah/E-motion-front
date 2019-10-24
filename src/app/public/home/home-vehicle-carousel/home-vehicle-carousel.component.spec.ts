import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVehicleCarouselComponent } from './home-vehicle-carousel.component';

describe('HomeVehicleCarouselComponent', () => {
  let component: HomeVehicleCarouselComponent;
  let fixture: ComponentFixture<HomeVehicleCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeVehicleCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVehicleCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
