import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

const adminRoutes:Routes = [
  // { path: 'category', loadChildren: 'app/category/category.module#CategoryModule'}
]

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [RouterModule],
declarations: []
})
export class AdminRoutingModule { }
