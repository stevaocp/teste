import {Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given("que estou na página inicial do site", ()=>{
    cy.visit('https://www.advantageonlineshopping.com/');
})

When('eu busco por {string}', (produto) => {
    cy.get('#searchInput').type(produto);
    cy.get('#searchInput').type('{enter}');
  });
  
  Then('os resultados da busca devem ser exibidos', () => {
    cy.get('#searchResults').should('be.visible');
  });
  
  When('eu adiciono o primeiro produto ao carrinho', () => {
    cy.get('.product:first').click();
    cy.get('#addToCartButton').click();
  });
  
  Then('o produto deve ser adicionado ao carrinho', () => {
    cy.get('#cartIcon').click();
    cy.get('.cart-item').should('be.visible');
  });
  
  When('eu vou para o carrinho', () => {
    cy.get('#cartIcon').click();
  });
  
  Then('o produto {string} deve estar no carrinho', (produto) => {
    cy.get('.cart-item').should('contain.text', produto);
  });

