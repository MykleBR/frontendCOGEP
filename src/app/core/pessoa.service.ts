// pessoa.service.ts
import { Injectable } from '@angular/core';
import { Pessoa } from '../shared/models/pessoa.model';

@Injectable({
  providedIn: 'root',
})
export class PessoaService {
  private pessoas: Pessoa[] = [];

  getPessoas(): Pessoa[] {
    return this.pessoas;
  }

  getPessoa(id: string): Pessoa | undefined {
    return this.pessoas.find((p) => p.id === id);
  }

  salvarPessoa(pessoa: Pessoa) {
    
    const index = this.pessoas.findIndex((p) => p.id === pessoa.id);

    if (index !== -1) {
      
      this.pessoas[index] = { ...this.pessoas[index], ...pessoa };
    } else {
      
      pessoa.id = this.generateUniqueId();
      this.pessoas.push(pessoa);
    }
  }

  excluirPessoa(id: string) {
    
    const index = this.pessoas.findIndex((p) => p.id === id);

    if (index !== -1) {
      this.pessoas.splice(index, 1);
    }
  }

  private generateUniqueId(): string {
    
    return 'id_unico_gerado';
  }
}
