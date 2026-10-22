/// <reference types="Cypress" />
describe("Validate login flow with invalid creds", () => {
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
  it("Login should fail with invalid creds", () => {
    cy.get(".login-form").should("be.visible");
    cy.get('[data-qa="login-email"]').type(data.email);
    cy.get('[data-qa="login-password"]').type(data.wrongpass);
    cy.contains("button", "Login").click();
    cy.get("form p").should("include.text", "incorrect").and("be.visible");
    cy.contains("Delete Account").should("not.exist");
  });
});
