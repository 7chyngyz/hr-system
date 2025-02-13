import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home-sections/hero/home.component';
import { LatestVacanciesComponent } from './pages/home-sections/latest-vacancies/latest-vacancies.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { HomeSectionsComponent } from './pages/home-sections/home-sections.component';
import { PopularCategoryComponent } from './pages/home-sections/popular-category/popular-category.component';
import { TwoCardsComponent } from './pages/home-sections/two-cards/two-cards.component';
import { FooterComponent } from './components/layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    LatestVacanciesComponent,
    HeaderComponent,
    HomeSectionsComponent,
    PopularCategoryComponent,
    TwoCardsComponent,
    FooterComponent,
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
