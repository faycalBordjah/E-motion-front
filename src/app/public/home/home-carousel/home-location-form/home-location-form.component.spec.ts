import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLocationFormComponent } from './home-location-form.component';

describe('HomeLocationFormComponent', () => {
  let component: HomeLocationFormComponent;
  let fixture: ComponentFixture<HomeLocationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLocationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLocationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
