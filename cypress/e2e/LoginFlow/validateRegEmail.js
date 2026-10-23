/// <reference types="Cypress" />
describe("Registration with an already registered email", () => {
  let data;
  before(() => {
    cy.fixture("ecommerce").then((fileData) => {
      data = fileData;
    });
  });
  beforeEach(() => {
    cy.visit("https://www.automationexercise.com/");
    cy.contains(" Signup / Login").click();
    cy.url().should("include", "/login");
  });
  it("should show an error when registering with an existing email", () => {
    cy.contains("h2", "New User Signup!").should("exist");
    cy.get('[data-qa="signup-name"]').type(data.username);
    cy.get('[data-qa="signup-email"]').type(data.email);
    cy.get('[data-qa="signup-button"]').click();
    cy.get("form p").should("include.text", "already").and("be.visible");
    cy.contains(" Signup / Login").should("exist");
  });
});
