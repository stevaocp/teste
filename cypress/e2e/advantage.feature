Feature: Advantage Online Shopping

  Scenario: Realizar a busca de um produto
    Given que estou na página inicial do site
    When eu busco por "laptop"
    Then os resultados da busca devem ser exibidos

  Scenario: Incluir produto no carrinho
    Given que estou na página inicial do site
    When eu busco por "laptop"
    And eu adiciono o primeiro produto ao carrinho
    Then o produto deve ser adicionado ao carrinho

  Scenario: Validar os produtos incluídos no carrinho na tela de pagamento
    Given que estou na página inicial do site
    When eu busco por "laptop"
    And eu adiciono o primeiro produto ao carrinho
    And eu vou para o carrinho
    Then o produto "laptop" deve estar no carrinho

    