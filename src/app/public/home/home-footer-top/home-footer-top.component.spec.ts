import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFooterTopComponent } from './home-footer-top.component';

describe('HomeFooterTopComponent', () => {
  let component: HomeFooterTopComponent;
  let fixture: ComponentFixture<HomeFooterTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFooterTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFooterTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
