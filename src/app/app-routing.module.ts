// app-routing.module.ts
import { NgModule } from '@angular/core';
import { LoginComponent } from './modules/auth/login.component';
import { SignupComponent } from './modules/auth/signup.component';
import { PessoasListComponent } from './modules/pessoas/pessoas-list.component';
import { PessoaFormComponent } from './modules/pessoas/pessoa-form.component';
import { AtividadesListComponent } from './modules/atividades/atividades-list.component';
import { AtividadeFormComponent } from './modules/atividades/atividade-form.component';
import { AuthGuard } from './core/auth.guard';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'pessoas', component: PessoasListComponent, canActivate: [AuthGuard] },
  { path: 'pessoas/nova', component: PessoaFormComponent, canActivate: [AuthGuard] },
  { path: 'atividades', component: AtividadesListComponent, canActivate: [AuthGuard] },
  { path: 'atividades/nova', component: AtividadeFormComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
