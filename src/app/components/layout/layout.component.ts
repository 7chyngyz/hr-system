import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: false,
  template: `
    <app-header></app-header>
    <app-home-sections></app-home-sections>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
})
export class LayoutComponent {

}
