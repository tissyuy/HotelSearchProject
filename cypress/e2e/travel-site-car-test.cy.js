///<reference types = "Cypress"/>
describe("The cars tab tesy will verify the cars tab functionality", () => {
  const cars_tab = '[data-cy="Car"]';
  const location_input = "[name=location]";
  const drop_off_input = "[name=dropoff]";
  const pick_up_input= "[name=pickup]"
  
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get(cars_tab).click();
  });
  it("choses location", () => {
    cy.get(location_input).type("Toronto").should("have.value", "Toronto");
  });
  it("choses drop off date", () => {
    cy.get(drop_off_input).clear();
    cy.get(drop_off_input).type ("05/08/2024")
      .should("have.value", "05/08/2024");
  });
  it("choses pick up date", () => {
    cy.get(pick_up_input).clear();
    cy.get(pick_up_input).type ("15/08/2024")
      .should("have.value", "15/08/2024");
  });
});
