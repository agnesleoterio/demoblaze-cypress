# DemoBlaze_teste_cypress


Este repositório contém o plano de teste para a aplicação Demo Blaze, que simula uma loja virtual com funcionalidades como cadastro de usuário e manipulação de produtos. Os testes serão realizados utilizando a ferramenta Cypress.


## Documentos 
* [Plano de teste](https://github.com/deborahmoura/DemoBlaze_teste_cypress/blob/main/Documentos/Plano%20de%20teste)

* [Metricas](https://github.com/deborahmoura/DemoBlaze_teste_cypress/blob/main/Documentos/Metricas%20dos%20testes)

## Como Rodar os Testes

### Pré-requisitos

- **Node.js** e **npm** (ou **yarn**) instalados.
- **Cypress** instalado no projeto.

### Passo 1: Instalar Dependências

No diretório raiz do projeto, execute:

```bash
npm install cypress --save-dev
```
depois
```bash
npm install
```

ou

```bash
yarn install
```

### Passo 2: Rodar os Testes

Para rodar os testes, execute o seguinte comando:

```bash
npx cypress open
```

Isso abrirá a interface do Cypress onde você pode executar os testes de forma interativa.

Você também pode rodar os testes em modo headless com o comando:

```bash
npx cypress run
