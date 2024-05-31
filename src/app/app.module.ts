import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AgentDetailsComponent } from './agent-details/agent-details.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PoojaCategoryComponent } from './pooja-category/pooja-category.component';
import { SearchPoojaComponent } from './search-pooja/search-pooja.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { AdvanSectionComponent } from './advan-section/advan-section.component';
import { StoryDetailComponent } from './story-detail/story-detail.component';
import { TopNavComponent } from './top-nav/top-nav.component';
// import { BookingPageComponent } from './booking-page/booking-page.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { HighlightDirective } from './highlight.directive';
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    AppHomeComponent,
    SignUpComponent,
    AgentDetailsComponent,
    FooterComponent,
    HomeComponent,
    PoojaCategoryComponent,
    SearchPoojaComponent,
    AdvanSectionComponent,
    StoryDetailComponent,
    TopNavComponent,
    BookingPageComponent,
    HighlightDirective,

      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSelectModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
