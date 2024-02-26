export interface Pessoa {
    nome: string;
    telefone: string;
    email: string;
    endereco: {
      rua: string;
      numero: string;
      complemento: string;
      cidade: string;
    };
  }
  