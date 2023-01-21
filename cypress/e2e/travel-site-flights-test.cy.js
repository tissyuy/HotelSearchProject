///<reference types = "Cypress"/>
describe('The flight tab will verify the flights functionality', () => {
    it('navigate to the flights tab', () => {
      cy.visit('http://localhost:3000')
      cy.get ('[data-cy="Flight"]').click ()
    })

})