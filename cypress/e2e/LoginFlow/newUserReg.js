describe("New user registration flow", () => {
  let data;
  before(() => {
    cy.fixture("ecommerce").then((fileData) => {
      data = fileData;
    });
  });
  beforeEach(() => {
    cy.visit("https://www.automationexercise.com/login");
    cy.url().should("include", "/login");
  });
  it("should be able to create a new user", () => {
    const uniqueEmail = `randomEmail${Math.random()}@gmail.com`;
    cy.log(uniqueEmail)
    cy.contains("h2", "New User Signup!").should("exist");
    cy.get('[data-qa="signup-name"]').type(data.username);
    cy.get('[data-qa="signup-email"]').type(uniqueEmail);
    cy.get('[data-qa="signup-button"]').click();
    cy.url().should("include", "/signup");
    cy.get('h2.title').first().should('exist');
    cy.get('[data-qa="password"]').type(data.password);
    cy.get('[data-qa="days"]').select('2').should('have.value',2)
    cy.get('[data-qa="first_name"]').type(data.firstName);
    cy.get('[data-qa="last_name"]').type(data.lastName);
    cy.get('[data-qa="address"]').type(data.address);
    cy.get('[data-qa="country"]').select('Canada').should('have.value','Canada')
    cy.get('[data-qa="state"]').type(data.state);
    cy.get('[data-qa="city"]').type(data.city);
    cy.get('[data-qa="zipcode"]').type(data.zip);
    cy.get('[data-qa="mobile_number"]').type(data.number);
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="account-created"]').should(
      "include.text",
      "Account Created!"
    );
    cy.get('[data-qa="continue-button"]').click();
    cy.contains("Delete Account").should("exist");

  });
});
