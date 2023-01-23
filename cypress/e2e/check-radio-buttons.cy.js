///<reference types = "Cypress"/>
describe("The flight tab will verify the flights functionality", () => {
    const flights_tab = '[data-cy="Flight"]'
    //const origin_placeholder='[placeholder="City or airport"][name = "origin"]';
    const origin_placeholder ='[name = "origin"]';
    const destination_placeholder ='[name = "destination"]';
    const checkin = '#input-start-2'
    const checkout = '#input-end-2'
    const business_radio_button = '[id="business"]'
    const economy_radio_button = '[id="economy"]'
    const f_class_radio_button = '[id="f_class"]'
  
  
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
    

    })
    
      it('check radio buttons', () => {
        //cy.get('.radio-row > :nth-child(2)').click()
        cy.get(business_radio_button).click().should('be.checked')
        cy.get(economy_radio_button).click().should('be.checked')
        cy.get(f_class_radio_button).click().should('be.checked')
   
    
  
      })
  })
  