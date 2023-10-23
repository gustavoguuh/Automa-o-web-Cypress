describe('Site de Automação', () => {

  
  it('Teste de Registro de user', () => {
    cy.visit('https://www.automationexercise.com/')   

    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="signup-name"]').click()
    cy.get('[data-qa="signup-name"]').type("Adicione um nome") //Add um nome
    cy.get('[data-qa="signup-email"]').click()
    cy.get('[data-qa="signup-email"]').type("adicioneumemail@gmail.com") //dentro do ("") adicione o email de sua escolha 
    cy.get('[data-qa="signup-button"]').click()

    cy.get('#id_gender1').click()
    cy.get('[data-qa="password"]').click()
    cy.get('[data-qa="password"]').type("12345") //Add uma senha de sua escolha 
    cy.get('[data-qa="days"]').select("12") //Add um numero que equivale ao data do seu nascimento 
    cy.get('[data-qa="months"]').select("March") //Add o mês do seu nascimento
    cy.get('[data-qa="years"]').select("2001")//Add um ano do seu nascimento
    cy.get('[data-qa="first_name"]').type("") //Add um nome
    cy.get('[data-qa="last_name"]').type("") //Add sobrenome
    cy.get('[data-qa="company"]').type("") //Add um nome de empresa ficticio 
    cy.get('[data-qa="address"]').type("Rua turusbango") //Add um nome de uma rua 
    cy.get('[data-qa="country"]').select("United States") //Selecione um país disponivel 
    cy.get('[data-qa="state"]').type("California") //Add um estado 
    cy.get('[data-qa="city"]').type("Los Angeles") //Add uma cidade
    cy.get('[data-qa="zipcode"]').type("") //Add o 'DDD' do estado
    cy.get('[data-qa="mobile_number"]').type("") //add um numero de cel
    cy.get('[data-qa="create-account"]').click()


  });
  
});