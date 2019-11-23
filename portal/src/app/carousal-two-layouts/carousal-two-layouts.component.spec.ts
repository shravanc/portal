import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousalTwoLayoutsComponent } from './carousal-two-layouts.component';

describe('CarousalTwoLayoutsComponent', () => {
  let component: CarousalTwoLayoutsComponent;
  let fixture: ComponentFixture<CarousalTwoLayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarousalTwoLayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarousalTwoLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
