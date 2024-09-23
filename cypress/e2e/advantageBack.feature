Feature: Advantage Online Shopping API


Scenario: Procurar por um produto
  Given que estou acessando a API de busca de produtos
  When eu busco por "laptop"
  Then a lista de produtos deve conter apenas itens relacionados à busca
  And o status code da resposta deve ser 200

Scenario: Atualizar a imagem de um produto
  Given que estou acessando a API de atualização de imagem de produto
  When eu atualizo a imagem do produto com userId "123", source "imageSource", e color "blue"
  Then o produto deve ser atualizado corretamente
  And o id da nova imagem deve ser retornado
  And o status code da resposta deve ser 200