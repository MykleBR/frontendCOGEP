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

  getAtividade(id: string): Atividade | undefined {
    return this.atividades.find((atividade) => atividade.id === id);
  }

  salvarAtividade(atividade: Atividade) {
    const index = this.atividades.findIndex((a) => a.id === atividade.id);

    if (index !== -1) {
      // Atualizar atividade existente
      this.atividades[index] = atividade;
    } else {
      // Criar nova atividade (geralmente, você geraria um ID único aqui)
      atividade.id = this.generateUniqueId();
      this.atividades.push(atividade);
    }
  }

  excluirAtividade(id: string) {
    const index = this.atividades.findIndex((atividade) => atividade.id === id);

    if (index !== -1) {
      this.atividades.splice(index, 1);
    }
  }

  private generateUniqueId(): string {
    // Lógica genérica para gerar um ID único (pode usar bibliotecas como uuid)
    return 'id_unico_gerado';
  }
}
