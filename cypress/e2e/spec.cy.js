///<reference types = "Cypress"/>
describe('template spec', () => {
  it('test cypress io examples page', () => {
    cy.visit('https://example.cypress.io')
    cy.url().should ('eq', 'https://example.cypress.io/')
  })
})
