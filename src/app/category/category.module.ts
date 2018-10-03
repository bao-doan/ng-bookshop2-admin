import { NgModule } from '@angular/core';
import { CategoryComponent } from './category.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryRoutingModule } from './/category-routing.module';

@NgModule({
  imports: [
  CategoryRoutingModule],
  declarations: [
    CategoryComponent,
    CategoryAddComponent
  ],
})
export class CategoryModule { }
