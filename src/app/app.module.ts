import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home-sections/components/hero/home.component';
import { LatestVacanciesComponent } from './pages/home-sections/components/latest-vacancies/latest-vacancies.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { HomeSectionsPageComponent } from './pages/home-sections/home-sections-page.component';
import { PopularCategoryComponent } from './pages/home-sections/components/popular-category/popular-category.component';
import { TwoCardsComponent } from './pages/home-sections/components/two-cards/two-cards.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { RegisterPageComponent } from './pages/register/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    LatestVacanciesComponent,
    HeaderComponent,
    HomeSectionsPageComponent,
    PopularCategoryComponent,
    TwoCardsComponent,
    FooterComponent,
    RegisterPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
