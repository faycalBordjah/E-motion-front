import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HommeCarouselComponent } from './homme-carousel.component';

describe('HommeCarouselComponent', () => {
  let component: HommeCarouselComponent;
  let fixture: ComponentFixture<HommeCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HommeCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HommeCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
