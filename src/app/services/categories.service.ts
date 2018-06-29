import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { State as RootState } from '../reducers/root.reducer';
import { Category } from '../interfaces/category.interface';
import { AddCategoryAction } from '../actions/categories.action';

@Injectable()
export class CategoriesService {

  constructor(private store: Store<RootState>, private httpClient: HttpClient) {
    //
  }

  public createCategory(category: Category): void {
    // this.httpClient.post('https://car-crud.herokuapp.com/create', car)
    //   .subscribe((category: Category) => {
    //     // console.log(car);
    //   });
    this.store.dispatch(new AddCategoryAction(category));
  }

  public getCategories(skip: number = 0, take: number = 5): void {
    // this.httpClient.get(`https://car-crud.herokuapp.com/?skip=${skip}&take=${take}`)
    //   .subscribe((cars: Car[]) => {
    //     this.store.dispatch(new AddCarsAction(cars));
    //   });
  }
}