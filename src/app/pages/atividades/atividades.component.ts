import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-atividades',
  standalone: true,
  imports: [
    NzLayoutModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzIconModule,
    ReactiveFormsModule
  ],
  templateUrl: './atividades.component.html',
  styleUrls: ['./atividades.component.css']
})
export class AtividadesComponent {
  atividadesForm: FormGroup;
  // Simulação de dados de pessoas para a seleção
  pessoas = [{ id: 1, nome: 'Pessoa 1' }, { id: 2, nome: 'Pessoa 2' }];

  constructor(private fb: FormBuilder) {
    this.atividadesForm = this.fb.group({
      nome: [null, Validators.required],
      descricao: [null, Validators.required],
      pessoaId: [null, Validators.required],
      status: [null, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.atividadesForm.valid) {
      console.log(this.atividadesForm.value);
    }
  }
}
