import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form'; // Importe adicional necessário
import { NzInputModule } from 'ng-zorro-antd/input'; // Certifique-se de importar
import { NzButtonModule } from 'ng-zorro-antd/button'; // Certifique-se de importar
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pessoas',
  standalone: true,
  imports: [
      ReactiveFormsModule, // Para suporte a formulários reativos
      NzFormModule, // Para os componentes de formulário
      NzInputModule, // Para input
      NzButtonModule, // Para botão
      // Outros módulos do NG-ZORRO conforme necessário
  ],
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css'] // Correção de 'styleUrl' para 'styleUrls'
})
export class PessoasComponent {
  formPessoa: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formPessoa = this.fb.group({
      nome: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      idade: [null, [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit(): void {
    if (this.formPessoa.valid) {
      console.log(this.formPessoa.value);
      // Aqui você pode adicionar a lógica para processar o formulário
    }
  }
}
