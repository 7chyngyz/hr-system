import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: false,
  template: `
    <section class="flex flex-col gap-7 items-center bg-slate-200">
      <div>
      <div class="flex flex-col gap-7 mb-3">
        <h1 class="text-[32px] font-bold">Создайте аккаунт</h1>
        <p class="text-[17px] font-medium">Выберите роль:</p>
      </div>
      <div class="flex gap-5">
        <button class="w-[200px] text-[17px] font-medium h-[59px] bg-white rounded-lg">Я соискатель</button>
        <button class="w-[200px] text-[17px] font-medium h-[59px] bg-white rounded-lg">Я работодатель</button>
      </div>
      <div class="flex items-center justify-center mt-5 gap-1">
      <span class="opacity-[0.7] text-[17px]">У вас уже есть аккаунт?</span>
      <a class="text-[17px] font-medium" href="">Войти</a>
      </div>
      </div>
    </section>
  `,
})
export class RegisterPageComponent {

}
