import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectOneLayoutsComponent } from './project-one-layouts.component';

describe('ProjectOneLayoutsComponent', () => {
  let component: ProjectOneLayoutsComponent;
  let fixture: ComponentFixture<ProjectOneLayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectOneLayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectOneLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
