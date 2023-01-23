///<reference types = "Cypress"/>
describe("The flight tab will verify the flights functionality", () => {
    const flights_tab = '[data-cy="Flight"]'
    //const origin_placeholder='[placeholder="City or airport"][name = "origin"]';
    const origin_placeholder ='[name = "origin"]';
    const destination_placeholder ='[name = "destination"]';
    const checkin = '#input-start-2'
    const checkout = '#input-end-2'
  
  
    before(() => {
      cy.visit("http://localhost:3000");
    });
    beforeEach(() => {
      cy.get(flights_tab).click();
    });
    after(() => {
      cy.log("after all");
    });
    afterEach(() => {
      cy.log("after each"); 
    
  
   // it("populates origin and distination", () => {
    //  cy.get(origin_placeholder).type("Paris").invoke("val").should('eq','Paris')
     // cy.get(destination_placeholder).type("London").invoke("val").should('eq','London')
    
     // cy.get(origin_placeholder).invoke("val").should('eq','Paris')
      //cy.get(destination_placeholder).invoke("val").should('eq','London')

    })
    it("populates check-in and check-out dates", () => {
        cy.get(checkin).type("10/10/2025").invoke('val').should('eq',"10/10/2025")
        cy.get(checkout).clear()
        cy.get(checkout).type("10/10/2026").invoke('val').should('eq',"10/10/2026")
    
  
      })

  })
  