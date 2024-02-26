export interface Pessoa {
    id: string,
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
  