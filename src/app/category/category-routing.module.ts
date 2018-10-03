import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category.component';
import { CategoryAddComponent } from './category-add/category-add.component';

const categoryRoutes: Routes = [
  {
    path: '', component: CategoryComponent, children: [
      { path: 'add', component: CategoryAddComponent }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(categoryRoutes)
  ],
  exports: [RouterModule],
  declarations: [],
  bootstrap: [CategoryComponent],
  // entryComponents: [CategoryComponent]
})
export class CategoryRoutingModule { }
