///<reference types = "Cypress"/>
describe ('The sanity test suite for travel site', () => {
  
    it('verify elements of the Hotels page', () => {
        cy.visit('http://localhost:3000')
        cy.get('[data-cy="flight_chk"]'). should ("be.visible")
        cy.get('[data-cy="cars_chk"]'). should ("be.visible")
       // cy.get('#tab1 > form > .btn-submit'). should ("be.visible")
       //cy.contains("search").should ("be.visible")
       cy.get('[type="submit"]').should ("be.visible")
      })
      it('verify elements of the Hotels page', () => {
        cy.visit('http://localhost:3000')
        cy.get('[data-cy="flight_chk"]'). should ("be.visible")
        cy.get('[data-cy="cars_chk"]'). should ("be.visible")
       // cy.get('#tab1 > form > .btn-submit'). should ("be.visible")
       //cy.contains("search").should ("be.visible")
       cy.get('[type="submit"]').should ("be.visible")
      })
      
      

  })