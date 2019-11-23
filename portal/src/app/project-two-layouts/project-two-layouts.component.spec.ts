import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTwoLayoutsComponent } from './project-two-layouts.component';

describe('ProjectTwoLayoutsComponent', () => {
  let component: ProjectTwoLayoutsComponent;
  let fixture: ComponentFixture<ProjectTwoLayoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectTwoLayoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTwoLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
