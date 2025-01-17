/// <reference types="cypress" />

const visitSite = () => {
  cy.visit('https://www.demoblaze.com/');
};

describe('Suite de testes do Cadastro de novo ', () => {
  beforeEach(() => {
    visitSite();
  });

  context('Casos de teste', () => {
      it('#CT 01 - ERRO - Clique em Cadastre-se sem preencher os dados e valide a mensagem de erro', () => {
      cy.get('#signin2').click();
      cy.get('button[onclick="register()"]').click();
      cy.on('window:alert', (alertText) => {
        //expect(alertText).to.equal('Please fill out Username and Password.');
        expect(alertText).to.contains('Please fill out Username and Password.');
        cy.get('.modal-dialog').should('be.visible');
        //cy.wait(1000)
        //cy.screenshot('erro_sem dados');
      });
    });

    it('#CT 02 - ERRO - Preencher apenas o nome de usuário e validar a mensagem de erro', () => {
      cy.get('#signin2').click();
      cy.get('#sign-username').type('testuser');
      cy.get('button[onclick="register()"]').click();
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Please fill out Username and Password.');
      

      });
    });

    it('#CT 03 - ERRO - Preencher apenas a senha e validar a mensagem de erro ', () => {
      cy.get('#signin2').click();
      cy.get('#sign-password').type('testpassword');
      cy.get('button[onclick="register()"]').click();
      cy.wait(1000)
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Please fill out Username and Password.');
       
      });
    });

    it('#CT 04 - Fechar o modal Sign Up usando o botão X ', () => {
      cy.get('#signin2').click();
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-header > .close > span')
      cy.get('#signInModal').should('not.be.visible');
      
    });

    it('#CT 05 - ERRO - Fechar o modal Sign Up usando o botão close', () => {
      cy.get('#signin2').click();
      cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary')
      cy.get('#signInModal').should('not.be.visible');
    });
  });
});
