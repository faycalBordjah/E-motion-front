import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionLocationsComponent } from './gestion-locations.component';

describe('GestionLocationsComponent', () => {
  let component: GestionLocationsComponent;
  let fixture: ComponentFixture<GestionLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
