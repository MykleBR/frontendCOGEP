// atividade-form.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AtividadeService } from '../../core/atividade.service';

@Component({
  selector: 'app-atividade-form',
  templateUrl: './atividade-form.component.html',
  styleUrls: ['./atividade-form.component.scss']
})
export class AtividadeFormComponent {
  atividadeForm: FormGroup;

  constructor(private fb: FormBuilder, private atividadeService: AtividadeService) {
    this.atividadeForm = this.fb.group({
      nome: ['', Validators.required],
      descricao: [''],
      dataInicio: ['', Validators.required],
      dataFim: ['', Validators.required],
      dataCriacao: ['']
    });
  }

  salvarAtividade() {
    if (this.atividadeForm.valid) {
      
      this.atividadeService.salvarAtividade(this.atividadeForm.value);
      this.atividadeForm.reset();
    }
  }
}
