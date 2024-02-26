// atividades-list.component.ts
import { Component, OnInit } from '@angular/core';
import { AtividadeService } from '../../core/atividade.service';
import { Atividade } from '../../shared/models/atividade.model';

@Component({
  selector: 'app-atividades-list',
  templateUrl: './atividades-list.component.html',
  styleUrls: ['./atividades-list.component.scss']
})
export class AtividadesListComponent implements OnInit {
  atividades: Atividade[] = [];

  constructor(private atividadeService: AtividadeService) {}

  ngOnInit() {
    this.loadAtividades();
  }

  loadAtividades() {
  
    this.atividades = this.atividadeService.getAtividades();
  }
}
