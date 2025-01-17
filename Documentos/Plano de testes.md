# Plano de Teste

## Objetivo

O objetivo deste plano de teste é garantir que os fluxos principais da aplicação funcionem corretamente:

- **Cadastro de Usuário**: Validar o cadastro de um novo usuário com informações válidas.
- **Adição de Produto ao Carrinho**: Validar o login com o usuário cadastrado, a adição de um produto ao carrinho e a confirmação dessa adição.

---

## Escopo

### Funcionalidades a serem testadas

#### Cadastro de Usuário - Sucesso:

**#CT 01 - Sucesso** - Criar uma conta com sucesso e validar a mensagem de sucesso. <br>
**Dado** esteja na página de cadastro. <br>
**Quando** preencher o formulário com dados válidos.<br>
**E** clicar em submeter o formulário.<br>
**Então** a mensagem de sucesso é exibida.<br>

#### Cadastro de Usuário - Erro:

**#CT 01 - ERRO** - Clique em "Cadastre-se" sem preencher os dados e valide a mensagem de erro.<br>
**Dado** esteja na página de cadastro.<br>
**Quando** clicar em submeter o formulário.<br>
**Então** a mensagem de erro é exibida.<br>

**#CT 02 - ERRO** - Preencher apenas o nome de usuário e validar a mensagem de erro.<br>
**Dado** esteja na página de cadastro.<br>
**Quando** preencher apenas o username.<br>
**E** clicar em submeter o formulário.<br>
**Então** a mensagem de erro é exibida.<br>

**#CT 03 - ERRO** - Preencher apenas a senha e validar a mensagem de erro.<br>
**Dado** esteja na página de cadastro.<br>
**Quando** preencher apenas o password.<br>
**E** clicar em submeter o formulário.<br>
**Então** a mensagem de erro é exibida.<br>

**#CT 04 - ERRO** - Fechar o modal "Sign Up" usando o botão X.<br>
**Dado** esteja na página de cadastro.<br>
**Quando** clicar em "x".<br>
**Então** o usuário permanecerá na mesma página.<br>

**#CT 05 - ERRO** - Fechar o modal "Sign Up" usando o botão close.<br>
**Dado** esteja na página de cadastro.<br>
**Quando** clicar em "close".<br>
**Então** o usuário permanecerá na mesma página.<br>

#### Adição de Produto ao Carrinho:

**#CT 01 - SUCESSO** - Adicionar produto no carrinho.<br>
**Dado** esteja logado.<br>
**Quando** clicar no produto escolhido.<br>
**Então** será direcionado para a página de produto.<br>

**#CT 02 - SUCESSO** - Validar mensagem de produto adicionado com sucesso.<br>
**Dado** esteja na página do produto.<br>
**Quando** clicar em "add to cart".<br>
**Então** aparecerá uma mensagem de sucesso "product added".<br>

**#CT 03 - SUCESSO** - Validar o produto no carrinho.<br>
**Dado** esteja logado.<br>
**Quando** clicar no carrinho no cabeçalho.<br>
**Então** visualizará o produto escolhido.<br>

**#CT 04 - SUCESSO** - Validar exclusão de produto no carrinho.<br>
**Dado** esteja na página do carrinho.<br>
**Quando** clicar em "delete".<br>
**Então** o carrinho estará vazio.<br>

**#CT 05 - SUCESSO** - Validar carrinho vazio.<br>
**Dado** esteja na página do carrinho.<br>
**Quando** atualizar a página.<br>
**Então** o carrinho estará vazio.<br>

---
### Tipos de Teste

- **Funcional**: Validar que as funcionalidades de cadastro de usuário e adição de produto ao carrinho funcionem conforme esperado.
- **Integração**: Verificar a interação entre os fluxos de cadastro, login e adição e exclusão de produto ao carrinho (CRUD).
- **Regressão**: Garantir que mudanças na aplicação não impactem negativamente as funcionalidades testadas.

### Ferramentas Utilizadas

- **Cypress**: Para automação de testes end-to-end (E2E) e testes funcionais.
- **JavaScript (ou TypeScript)**: Linguagem utilizada para escrever os testes.
- **Chai**: Para asserções e validações nas respostas e interações.
- **Cypress Dashboard (opcional)**: Para visualização dos resultados dos testes.
