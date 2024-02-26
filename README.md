ESTE É MEU PRIMEIRO PROJETO UTILIZANDO ANGULAR E NGZORRO.

Pré-requisitos:

  Node.js e npm:
  Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em nodejs.org.

  Angular CLI:
  Instale o Angular CLI globalmente usando o seguinte comando:

        npm install -g @angular/cli

Passos:

  Clonar o Repositório:
  Clone o repositório do seu frontend para sua máquina.

        git clone https://github.com/MykleBR/frontendCOGEP.git
        cd frontendCOGEP

Instalar Dependências:

  Instale as dependências do projeto.
  
        npm install

Iniciar o Servidor de Desenvolvimento:

  Inicie o servidor de desenvolvimento do Angular.
  
        ng serve

O servidor estará disponível em http://localhost:4200/.


Documentação do Software

Este documento fornece uma visão geral e explicação do software Angular apresentado. O projeto é uma aplicação Angular que gerencia atividades, pessoas, e autenticação de usuários.


Estrutura do Projeto
    
    O projeto está estruturado em módulos, cada um responsável por uma funcionalidade específica. Aqui está uma breve descrição de cada componente do projeto:
    Atividade Module (atividades/atividades.module.ts)

    Este módulo contém os componentes relacionados às atividades. Os principais componentes são:

        AtividadesListComponent: Uma lista de todas as atividades.
        AtividadeFormComponent: Um formulário para adicionar ou editar uma atividade.

Auth Module (auth/auth.module.ts)

    Este módulo lida com a autenticação de usuários. Ele contém os seguintes componentes:

        LoginComponent: Página de login.
        SignupComponent: Página de cadastro.

Pessoa Module (pessoas/pessoas.module.ts)

    Este módulo gerencia as operações relacionadas a pessoas. Os principais componentes são:

        PessoasListComponent: Lista todas as pessoas.
        PessoaFormComponent: Formulário para adicionar ou editar informações de uma pessoa.

Core

    O módulo core contém serviços e guardas essenciais para o funcionamento da aplicação.

        AtividadeService: Gerencia as operações CRUD para atividades.
        PessoaService: Gerencia as operações CRUD para pessoas.
        AuthenticationService: Gerencia a autenticação do usuário.
        AuthGuard: Impede o acesso não autorizado às páginas protegidas.

Shared Module (shared/shared.module.ts)

    Este módulo contém componentes, modelos, e outros recursos compartilhados em toda a aplicação.

        Atividade e Pessoa Models: Definem a estrutura de dados para atividades e pessoas.
        FooterComponent: Componente do rodapé exibindo o ano e o nome da aplicação.
        HeaderComponent: Componente de cabeçalho com navegação e opções de login/logout.

Componentes Específicos

    AtividadeFormComponent: Um formulário para adicionar ou editar atividades.
    AtividadesListComponent: Lista todas as atividades.
    LoginComponent e SignupComponent: Páginas de login e cadastro, respectivamente.
    PessoaFormComponent: Um formulário para adicionar ou editar informações de pessoas.
    PessoasListComponent: Lista todas as pessoas.

Guardas e Serviços

    AuthGuard: Guarda de rota que impede o acesso não autorizado às páginas protegidas.
    AtividadeService e PessoaService: Serviços que gerenciam operações CRUD para atividades e pessoas.
    AuthenticationService: Serviço que gerencia a autenticação do usuário.

Configuração e Uso
    Configuração do Roteamento (app-routing.module.ts)

    O arquivo app-routing.module.ts configura as rotas da aplicação, especificando os componentes a serem exibidos em cada rota. Também utiliza o AuthGuard para proteger rotas que requerem autenticação.

Configuração do NgZorro Ant Design

    O arquivo app.config.ts configura o NgZorro Ant Design, fornecendo configurações para internacionalização e outras dependências.

Módulo Principal (app.module.ts)

    O módulo principal app.module.ts importa todos os módulos necessários, configurando as dependências e inicializando o componente principal (AppComponent).
    Utilização de Componentes

    Os componentes principais (como HeaderComponent, FooterComponent e os componentes específicos de cada módulo) são utilizados no componente principal (AppComponent). A navegação entre componentes é gerenciada pelas rotas configuradas no app-routing.module.ts.
    Execução do Projeto

Certifique-se de ter o Angular CLI instalado 17: npm install -g @angular/cli.
Navegue até o diretório do projeto e execute npm install para instalar as dependências.
Execute ng serve para iniciar o servidor de desenvolvimento.
Abra o navegador e acesse http://localhost:4200.

Considerações Finais

    Este software foi desenvolvido por Michael de Lima, com base no framework Angular e segue as melhores práticas recomendadas. Para contribuir ou estender as funcionalidades, consulte o código fonte e siga as diretrizes do Angular.

Licensa MIT.
