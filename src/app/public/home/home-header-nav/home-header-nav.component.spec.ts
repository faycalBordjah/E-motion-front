import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeaderNavComponent } from './home-header-nav.component';

describe('HomeHeaderNavComponent', () => {
  let component: HomeHeaderNavComponent;
  let fixture: ComponentFixture<HomeHeaderNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeHeaderNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHeaderNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
