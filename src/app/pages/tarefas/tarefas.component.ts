import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';

interface Tarefa {
  id: number;
  titulo: string;
  descricao: string;
  responsavel: string;
  prazo: string;
  status: string;
}

@Component({
  selector: 'app-tarefas',
  standalone: true,
  imports: [
        NzTableModule,
        CommonModule
      ], // Importe os módulos necessários do NG-ZORRO
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {
  tarefas: Tarefa[] = []; // Mock de dados para a tabela
  tarefaSelecionada?: Tarefa; // Tarefa selecionada para detalhes

  ngOnInit(): void {
    // Aqui você carregaria suas tarefas, por exemplo, de um serviço
  }

  onSelect(tarefa: Tarefa): void {
    this.tarefaSelecionada = tarefa;
  }
}
