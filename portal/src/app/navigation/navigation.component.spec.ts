import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListServiceService } from '../list-service.service';

import { NavigationComponent } from './navigation.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
//import {HttpClientModule} from '@angular/common/http';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MDBBootstrapModule.forRoot() // <-- this line is important
        
        ],
      declarations: [ NavigationComponent ],
      providers : [ListServiceService,
        ],
      schemas: [

        NO_ERRORS_SCHEMA // <-- this line is also important
        
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    //fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
