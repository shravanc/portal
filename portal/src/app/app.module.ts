import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CarousalOneLayoutsComponent } from './carousal-one-layouts/carousal-one-layouts.component';
import { WebsiteBodyComponent } from './website-body/website-body.component';
import { GalleryOneComponent } from './gallery-one/gallery-one.component';
import { VerticalCardsLayoutsComponent } from './vertical-cards-layouts/vertical-cards-layouts.component';
import { CarousalTwoLayoutsComponent } from './carousal-two-layouts/carousal-two-layouts.component';
import { CarousalThreeLayoutsComponent } from './carousal-three-layouts/carousal-three-layouts.component';
import { GalleryTwoComponent } from './gallery-two/gallery-two.component';
import { GalleryThreeComponent } from './gallery-three/gallery-three.component';
import { ProjectOneLayoutsComponent } from './project-one-layouts/project-one-layouts.component';
import { ProjectTwoLayoutsComponent } from './project-two-layouts/project-two-layouts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    LoginComponent,
    CarousalOneLayoutsComponent,
    WebsiteBodyComponent,
    GalleryOneComponent,
    VerticalCardsLayoutsComponent,
    CarousalTwoLayoutsComponent,
    CarousalThreeLayoutsComponent,
    GalleryTwoComponent,
    GalleryThreeComponent,
    ProjectOneLayoutsComponent,
    ProjectTwoLayoutsComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
