import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ReadingComponent } from './pages/reading/reading.component';
import { WritingComponent } from './pages/writing/writing.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { HeroSectionComponent } from './pages/home/section/hero-section/hero-section.component';
import { WelcomeSectionComponent } from './pages/home/section/welcome-section/welcome-section.component';
import { ServiceSectionComponent } from './pages/home/section/service-section/service-section.component';
import { NewsletterSectionComponent } from './pages/home/section/newsletter-section/newsletter-section.component';
import { FeaturedSectionComponent } from './pages/home/section/featured-section/featured-section.component';
import { TopSectionComponent } from './pages/reading/section/top-section/top-section.component';
import { SubmitComponent } from './pages/submit/submit.component';
import { CustomDropdownComponent } from './component/custom-dropdown/custom-dropdown.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpService } from './http.service';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReadingComponent,
    WritingComponent,
    NavBarComponent,
    HeroSectionComponent,
    WelcomeSectionComponent,
    ServiceSectionComponent,
    NewsletterSectionComponent,
    FeaturedSectionComponent,
    TopSectionComponent,
    SubmitComponent,
    CustomDropdownComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
