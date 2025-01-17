/// <reference types="cypress" />

const visitSite = () => {
  cy.visit('https://www.demoblaze.com/');
};

describe('Suite de testes do Cadastro de novo ', () => {
  beforeEach(() => {
    visitSite();
  });

  context('Casos de teste', () => {
    it('#CT 01 - Sucesso - Criar uma conta com sucesso e validar a mensagem de sucesso', () => {
      cy.get('#signin2').click();
      cy.get('#sign-username').type('?952NgDe');
      cy.get('#sign-password').type('pb1234');
      cy.get('button[onclick="register()"]').click();
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Sign up successful.');
      });
    });
  });
});
