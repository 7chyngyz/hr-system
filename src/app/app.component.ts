import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-home></app-home>
  <app-latest-vacancies></app-latest-vacancies>
  `,
  standalone: false,
})
export class AppComponent {
  title = 'hr-system';
}
