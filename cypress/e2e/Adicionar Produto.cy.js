/// <reference types="cypress" />

describe('Teste de funcionalidade do carrinho - DemoBlaze', () => {
  it('Deve fazer login, adicionar produto no carrinho e verificar no carrinho', () => {
    // Acesse a página principal
    cy.visit('https://www.demoblaze.com');

    // Realize o login
    cy.get('#login2').click();
    cy.wait(1000);
    cy.get('#loginusername').type('deborahmouras');
    cy.get('#loginpassword').type('teste1234');
    cy.wait(1000);
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.wait(1000);

    // Voltar para a home
    cy.get('.navbar-brand').click();

    // #CT 01 - Adicionar produto no carrinho
    cy.get(':nth-child(3) > .card > .card-block > .card-title > .hrefch').click();
    cy.get('.btn.btn-success.btn-lg').click();
    cy.wait(1000);

    // #CT 02 - SUCESSO - Validar mensagem de produto adicionado com sucesso
     cy.on('window:alert', (alertText) => {  
    expect(alertText).to.equal('Product added');
    cy.screenshot('mensagem_sucesso_produto_carrinho');
    });

    // #CT 03 - SUCESSO - Validar o produto no carrinho
    cy.get('#cartur').click();
    cy.contains('Nexus 6').should('be.visible');
    cy.screenshot('Produto_carrinho');

    // #CT 04 - SUCESSO - Validar exclusão produto no carrinho
    cy.get('.success > :nth-child(4) > a').click();
    
    // #CT 05 - SUCESSO - Validar  carrinho vazio
    cy.contains('Nexus 6').should('not.exist'); 
    cy.screenshot('Vazio_produto_carrinho');
  });
});
