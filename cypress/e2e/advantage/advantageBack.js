import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';


// Cenário 1: Procurar por um produto
Given('que estou acessando a API de busca de produtos', () => {
  // Não é necessário fazer nada aqui
});

When('eu busco por {string}', (produto) => {
  cy.request({
    method: 'GET',
    url: `/catalog/api/v1/products/search?query=${produto}`,
  }).as('searchResponse');
});

Then('a lista de produtos deve conter apenas itens relacionados à busca', () => {
  cy.get('@searchResponse').then((response) => {
    expect(response.status).to.eq(200);
    response.body.products.forEach((product) => {
      expect(product.name.toLowerCase()).to.include('laptop');
    });
  });
});

Then('o status code da resposta deve ser {int}', (statusCode) => {
  cy.get('@searchResponse').its('status').should('eq', statusCode);
});

// Cenário 2: Atualizar a imagem de um produto
Given('que estou acessando a API de atualização de imagem de produto', () => {
  // Não é necessário fazer nada aqui
});

When('eu atualizo a imagem do produto com userId {704472700}, source {string}, e color {string}', (userId, source, color) => {
  cy.request({
    method: 'PUT',
    url: `/catalog/api/v1/product/image/${704472700}/${source}/${color}`,
    body: {
      imageId: 'newImageId123',
    },
  }).as('updateImageResponse');
});

Then('o produto deve ser atualizado corretamente', () => {
  cy.get('@updateImageResponse').then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.message).to.eq('Product image updated successfully');
  });
});

Then('o id da nova imagem deve ser retornado', () => {
  cy.get('@updateImageResponse').then((response) => {
    expect(response.body.imageId).to.eq('newImageId123');
  });
});

Then('o status code da resposta deve ser {int}', (statusCode) => {
  cy.get('@updateImageResponse').its('status').should('eq', statusCode);
});