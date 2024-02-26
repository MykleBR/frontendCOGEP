// pessoas-list.component.ts
import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../core/pessoa.service';
import { Pessoa } from '../../shared/models/pessoa.model';

@Component({
  selector: 'app-pessoas-list',
  templateUrl: './pessoas-list.component.html',
  styleUrls: ['./pessoas-list.component.scss']
})
export class PessoasListComponent implements OnInit {
  pessoas: Pessoa[] = [];

  constructor(private pessoaService: PessoaService) {}

  ngOnInit() {
    this.loadPessoas();
  }

  loadPessoas() {
  
    this.pessoas = this.pessoaService.getPessoas();
  }
}
