/// <reference types="Cypress" />
describe("Login with valid credentials", () => {
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
  it("should login successfully with valid credentials", () => {
    cy.get(".login-form").should("be.visible");
    cy.get('[data-qa="login-email"]').type(data.email);
    cy.get('[data-qa="login-password"]').type(data.password);
    cy.contains("button", "Login").click();
    cy.contains(' Delete Account').should('be.visible')
    // cy.url().should("include", "/");
    // cy.get(":nth-child(10) > a")
    //   .invoke("text")
    //   .invoke("trim")
    //   .then((result) => {
    //     expect(result).to.eq("Logged in as " + data.username);
    //   });
    cy.contains('Logged in as '+data.username).should('be.visible')
  });
});
