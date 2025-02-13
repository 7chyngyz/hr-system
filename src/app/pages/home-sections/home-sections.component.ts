import { Component } from '@angular/core';

@Component({
  selector: 'app-home-sections',
  standalone: false,
  template: `
  <app-home></app-home>
  <app-latest-vacancies></app-latest-vacancies>
  <app-popular-category></app-popular-category>
  <app-two-cards></app-two-cards>
  `,
})
export class HomeSectionsComponent {

}
