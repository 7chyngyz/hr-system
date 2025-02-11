import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  template: `
  <header class="w-full bg-white py-4 px-6">
    <div class="flex justify-between items-center max-w-6xl mx-auto">
      <div class="flex items-center space-x-6">
        <div>
        <h1>HR System</h1>
        <span>Вакансии</span>
        <span>FAQ</span>
        <span>Контакты</span>
        </div>
        <div>
          <button>Войти</button>
          <button>Регистрация</button>
        </div>
      </div>
    </div>
  </header>
  `,
})
export class HeaderComponent {

}
