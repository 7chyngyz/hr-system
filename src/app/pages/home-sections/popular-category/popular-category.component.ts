import { Component } from '@angular/core';

interface Category {
  logo: string;
  type: string;
  quantity: string | number;
  color: string;
}

@Component({
  selector: 'app-popular-category',
  standalone: false,
  template: `
    <section class="px-4 md:px-16 lg:px-60 py-6 mt-[70px] mb-[70px]">
      <h2 class="text-2xl md:text-3xl text-gray-900 font-bold mb-4">Популярные категории</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
        <div *ngFor="let category of categories" class="bg-white shadow-md rounded-xl p-4 flex items-center gap-4">
          <div [style.backgroundColor]="category.color" class="w-12 h-12 flex items-center justify-center rounded-full">
            <img class="w-6 h-6" [src]="category.logo" alt="{{ category.type }}">
          </div>
          <div>
            <p class="text-gray-900 font-semibold">{{ category.type }}</p>
            <p class="text-gray-500 text-sm">{{ category.quantity }} вакансий</p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class PopularCategoryComponent {
  categories: Category[] = [
    { logo: '/assets/images/category-1.svg', type: 'Искусство, развлечение', quantity: 35, color: '#8E44AD' },
    { logo: '/assets/images/category-2.svg', type: 'Информационные технологии', quantity: 120, color: '#3498DB' },
    { logo: '/assets/images/category-3.svg', type: 'Маркетинг и PR', quantity: 500, color: '#F1C40F' },
    { logo: '/assets/images/category-4.svg', type: 'Наука, образование', quantity: 35, color: '#2ECC71' },
    { logo: '/assets/images/category-5.svg', type: 'Бухгалтерия', quantity: 120, color: '#95A5A6' },
    { logo: '/assets/images/category-6.svg', type: 'Административный персонал', quantity: 500, color: '#2980B9' },
    { logo: '/assets/images/category-7.svg', type: 'Медицина, фармацевтика', quantity: 120, color: '#E74C3C' },
    { logo: '/assets/images/category-8.svg', type: 'Инвестиции, консалтинг', quantity: 35, color: '#1ABC9C' },
    { logo: '/assets/images/category-9.svg', type: 'Транспорт, логистика', quantity: 500, color: '#D35400' },
  ];
}