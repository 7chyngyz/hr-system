import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { LatestVacanciesComponent } from './pages/home-sections/latest-vacancies/latest-vacancies.component';
import { HomeComponent } from './pages/home-sections/hero/home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: Date },
      { path: '', component: Date },
      { path: '', component: Date },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
