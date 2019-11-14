import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousalOneLayoutsComponent } from './carousal-one-layouts.component';

describe('CarousalOneLayoutsComponent', () => {
  let component: CarousalOneLayoutsComponent;
  let fixture: ComponentFixture<CarousalOneLayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarousalOneLayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarousalOneLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
