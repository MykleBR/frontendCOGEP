// pessoas/pessoas.module.ts
import { NgModule } from '@angular/core';
import { PessoasListComponent } from './pessoas-list.component';
import { PessoaFormComponent } from './pessoa-form.component';

@NgModule({
  declarations: [
    PessoasListComponent,
    PessoaFormComponent,
  ],
  exports: [
    PessoasListComponent,
    PessoaFormComponent,
  ],
})
export class PessoasModule { }
