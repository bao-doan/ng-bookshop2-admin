import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './layout/login/login.component';
import { RegisterComponent } from './layout/register/register.component';
import { AdminComponent } from './layout/admin/admin.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import { AuthGuard } from './authentication/auth/auth.guard';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  { path: '', redirectTo: 'layout', pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'layout', loadChildren: 'app/layout/layout.module#LayoutModule'
  },
  { path: '**', component: NotFoundComponent},
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
