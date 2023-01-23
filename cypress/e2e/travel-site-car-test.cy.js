///<reference types = "Cypress"/>
describe("The cars tab tesy will verify the cars tab functionality", () => {
  const cars_tab = '[data-cy="Car"]';
  const location_input = "[name=location]";
  const drop_off_input = "[name=dropoff]";
  const pick_up_input= "[name=pickup]"
  const car_group_list ='[name="car-group"]'
  const driver_age='[name="driver-age"]'


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
  it("choses list of cars", () => {
    cy.get(car_group_list).should ('be.visible') 
    cy.get(car_group_list).select('Group 1',{force: true})
    cy.get('[title="Group 1"]').should ('be.visible')

    cy.get(car_group_list).select('Group 2',{force: true})
    cy.get('[title="Group 2"]').should ('be.visible')

    cy.get(car_group_list).select('Group 3',{force: true})
    cy.get('[title="Group 3"]').should ('be.visible')
  });

  it("choses driver's age", () => {
    cy.get(driver_age).should ('be.visible')
    cy.get(driver_age).select('23',{force: true})
    cy.get('[title="23"]').should ('be.visible')

    cy.get(driver_age).select('24',{force: true})
    cy.get('[title="24"]').should ('be.visible')

    cy.get(driver_age).select('25',{force: true})
    cy.get('[title="25"]').should ('be.visible')

    cy.get(driver_age).select('26',{force: true})
    cy.get('[title="26"]').should ('be.visible')
 
    

})
})