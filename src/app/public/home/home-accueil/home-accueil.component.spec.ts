import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAccueilComponent } from './home-accueil.component';

describe('HomeAccueilComponent', () => {
  let component: HomeAccueilComponent;
  let fixture: ComponentFixture<HomeAccueilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAccueilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
