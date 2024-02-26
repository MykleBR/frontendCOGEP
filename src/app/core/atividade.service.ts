// atividade.service.ts
import { Injectable } from '@angular/core';
import { Atividade } from '../shared/models/atividade.model';

@Injectable({
  providedIn: 'root',
})
export class AtividadeService {
  private atividades: Atividade[] = [];

  getAtividades(): Atividade[] {
    
    return this.atividades;
  }

  salvarAtividade(atividade: Atividade) {
    
    this.atividades.push(atividade);
  }
}
