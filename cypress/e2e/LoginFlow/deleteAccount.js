describe("Delete account functionality", () => {
    let data
  before(() => {
    cy.fixture("ecommerce").then((fileData) => {
      data = fileData;
    });
  });
  beforeEach(() => {
    cy.visit("https://www.automationexercise.com/login");
    cy.url().should("include", "/login");
  });
  it("Should able to delete the account", () => {
    cy.get('[data-qa="login-email"]').type(data.email);
    cy.get('[data-qa="login-password"]').type(data.password);
    cy.contains("button", "Login").click();
    cy.contains('Delete Account').click()
    cy.contains('Account Deleted!').should('be.visible')
  });
});
