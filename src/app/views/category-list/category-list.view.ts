import { Component } from '@angular/core';
import { CategoriesService } from '../../services';
import { Category } from '../../interfaces/category.interface';

@Component({
  templateUrl: './category-list.view.pug',
})

export class CategoryListView {
  public name: string = 'Akos';
  public number: number = 3;
  public date: Date = new Date();
  public categories: Category[] = [];

  constructor(private categoriesService: CategoriesService) {
    this.categoriesService.createCategory({id: 1, title: 'test'});
  }
}