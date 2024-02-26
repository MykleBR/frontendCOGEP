// pessoa-form.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PessoaService } from '../../core/pessoa.service';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.scss']
})
export class PessoaFormComponent {
  pessoaForm: FormGroup;

  constructor(private fb: FormBuilder, private pessoaService: PessoaService) {
    this.pessoaForm = this.fb.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      endereco: this.fb.group({
        rua: [''],
        numero: [''],
        complemento: [''],
        cidade: ['']
      })
    });
  }

  salvarPessoa() {
    if (this.pessoaForm.valid) {

      this.pessoaService.salvarPessoa(this.pessoaForm.value);
      this.pessoaForm.reset();
    }
  }
}
