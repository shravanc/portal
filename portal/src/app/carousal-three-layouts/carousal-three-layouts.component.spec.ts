import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousalThreeLayoutsComponent } from './carousal-three-layouts.component';

describe('CarousalThreeLayoutsComponent', () => {
  let component: CarousalThreeLayoutsComponent;
  let fixture: ComponentFixture<CarousalThreeLayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarousalThreeLayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarousalThreeLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
