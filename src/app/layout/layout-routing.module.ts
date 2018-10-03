import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const layoutRoutes:Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full'},
  { path: 'admin', component: AdminComponent, 
    children : 
    [
      { path: 'category', loadChildren: 'app/category/category.module#CategoryModule'}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(layoutRoutes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class LayoutRoutingModule { }
