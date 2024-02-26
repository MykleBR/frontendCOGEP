// auth/auth.module.ts
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
  ],
  exports: [
    LoginComponent,
    SignupComponent,
  ],
})
export class AuthModule { }
