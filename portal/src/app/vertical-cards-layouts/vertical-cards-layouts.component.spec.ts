import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalCardsLayoutsComponent } from './vertical-cards-layouts.component';

describe('VerticalCardsLayoutsComponent', () => {
  let component: VerticalCardsLayoutsComponent;
  let fixture: ComponentFixture<VerticalCardsLayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalCardsLayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalCardsLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
