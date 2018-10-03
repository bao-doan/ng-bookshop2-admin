import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';
import { LayoutRoutingModule } from './/layout-routing.module';

@NgModule({
  imports: [
  AdminModule,
  LayoutRoutingModule],
  exports:[
    // AdminComponent
  ],
  declarations: [
    LoginComponent, 
    RegisterComponent, 
    AdminComponent
  ],
  bootstrap: [
    AdminComponent
  ],
  // entryComponents: [AdminComponent]
})
export class LayoutModule { }
