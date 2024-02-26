// atividades/atividades.module.ts
import { NgModule } from '@angular/core';
import { AtividadesListComponent } from './atividades-list.component';
import { AtividadeFormComponent } from './atividade-form.component';

@NgModule({
  declarations: [
    AtividadesListComponent,
    AtividadeFormComponent,
  ],
  exports: [
    AtividadesListComponent,
    AtividadeFormComponent,
  ],
})
export class AtividadesModule { }
