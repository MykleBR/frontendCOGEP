import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { 
    path: 'dashboard', 
    loadComponent: () => import('./pages/pages.component').then(m => m.PagesComponent),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'tarefas' },
      { path: 'tarefas', loadComponent: () => import('./pages/tarefas/tarefas.component').then(m => m.TarefasComponent) },
      { path: 'pessoas', loadComponent: () => import('./pages/pessoas/pessoas.component').then(m => m.PessoasComponent) },
      { path: 'atividades', loadComponent: () => import('./pages/atividades/atividades.component').then(m => m.AtividadesComponent) },
    ]
  },
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },
];
