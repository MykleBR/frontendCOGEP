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

  salvarPessoa(pessoa: Pessoa) {
    this.pessoas.push(pessoa);
  }
}
