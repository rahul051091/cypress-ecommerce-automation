describe("Product Search functionality", () => {
  let data;
  before(()=>{
    cy.fixture('ecommerce').then((fileName) => {
      data = fileName;
      });

  })

  beforeEach(() => {
    cy.visit("https://www.automationexercise.com/");
    cy.contains("Products").click();
    cy.url().should("include", "/products");
  });

  it("Search for the product and validate", () => {
    cy.get("#search_product").type(data.productName);
    cy.get("#submit_search").click();
    cy.contains("Searched Products").should("be.visible");
    cy.get(".productinfo p").should("include.text", data.productName).and('be.visible')
  });
});
