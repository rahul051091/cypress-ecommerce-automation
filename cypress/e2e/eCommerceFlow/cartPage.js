describe("should be able to add product to the cart", () => {
    beforeEach(()=>{
        cy.visit("https://www.automationexercise.com/");
        cy.contains("Products").click();
        cy.url().should("include", "/products");

    })
  it("Validate product is added to the cart", () => {
    // cy.visit("https://www.automationexercise.com/");
    // cy.contains("Products").click();
    // cy.url().should("include", "/products");
    cy.get(".single-products .add-to-cart").eq(0).click();
    cy.get('.modal-body a[href="/view_cart"] u').click();
    cy.get(".cart_description h4 a").should("be.visible");
    cy.get(".cart_price p").should("be.visible");
    cy.get(".cart_quantity button").should("be.visible");
  });
  it("Validate Multiple products can be added to the cart", () => {
    // cy.visit("https://www.automationexercise.com/");
    // cy.contains("Products").click();
    // cy.url().should("include", "/products");
    cy.get(".single-products .add-to-cart").eq(0).click();
    cy.get('.modal-footer [data-dismiss="modal"]')
      .should("have.text", "Continue Shopping")
      .click();
    cy.get(".single-products .add-to-cart").eq(3).click({ force: true });
    cy.get('.modal-body a[href="/view_cart"] u').click();
    cy.get(".cart_description h4 a").should("have.length", 2);
    cy.get('.cart_description h4 a[href="/product_details/2"]').should(
      "have.text",
      "Men Tshirt"
    );
    cy.get(".cart_price p").should("be.visible");
    cy.get(".cart_quantity button").should("be.visible");
  });
  it("Should be able to increase the quantity and verify total", () => {
    cy.fixture("ecommerce").then((data) => {
      let totalPrice = 0;
      cy.visit("https://www.automationexercise.com/");
      cy.contains("Products").click();
      cy.url().should("include", "/products");
      cy.get(".single-products .add-to-cart").eq(0).click();
      cy.get('.modal-footer [data-dismiss="modal"]')
        .should("have.text", "Continue Shopping")
        .click();
      cy.get(".single-products .add-to-cart").eq(3).click({ force: true });
      cy.get('.modal-body a[href="/view_cart"] u').click();
      cy.get(".cart_description h4 a").should("have.length", 2);
      cy.get('.cart_description h4 a[href="/product_details/2"]').should(
        "have.text",
        "Men Tshirt"
      );
      cy.get("p.cart_total_price")
        .each(($el, index, list) => {
          const rawText = $el.text();
          const cartPrice = parseInt(rawText.replace(/[^0-9]/g, ""), 10);
          totalPrice = totalPrice + cartPrice;
        })
        .then(() => {
          // Ye block tab chalega jab loop poora execute ho jayega
          cy.log("Total Expected Price: " + totalPrice);

          cy.contains("Proceed To Checkout").click();
          cy.get('.modal-body a[href="/login"]').click();
          cy.get('[data-qa="signup-name"]').type(data.username);
          cy.get('[data-qa="signup-email"]').type(data.email);
          cy.get('[data-qa="signup-button"]').click();
          cy.url().should("include", "signup");
          cy.get('[data-qa="password"]').type(data.password);
          cy.get('[data-qa="first_name"]').type(data.firstName);
          cy.get('[data-qa="last_name"]').type(data.lastName);
          cy.get('[data-qa="address"]').type(data.address);
          cy.get('[data-qa="state"]').type(data.state);
          cy.get('[data-qa="city"]').type(data.city);
          cy.get('[data-qa="zipcode"]').type(data.zip);
          cy.get('[data-qa="mobile_number"]').type(data.number);
          cy.get('[data-qa="create-account"]').click();
          cy.get('[data-qa="account-created"]').should(
            "have.text",
            "Account Created!"
          );
          cy.get('[data-qa="continue-button"]').click();
          cy.contains(" Cart").click();
          cy.contains("Proceed To Checkout").click();
          cy.url().should("include", "/checkout");
          cy.get(".cart_total_price")
            .last()
            .invoke("text")
            .then((checkoutText) => {
              const actualPrice = parseInt(
                checkoutText.replace(/[^0-9]/g, ""),
                10
              );

              // Yahan hum expect/assert kar sakte hain
              expect(actualPrice).to.eq(totalPrice);
            });
        });
    });
  });
  it("Should be able to remove the product from the cart", () => {
    // cy.visit("https://www.automationexercise.com/");
    // cy.contains("Products").click();
    // cy.url().should("include", "/products");
    cy.get(".single-products .add-to-cart").eq(0).click();
    cy.get('.modal-footer [data-dismiss="modal"]')
      .should("have.text", "Continue Shopping")
      .click();
    cy.get(".single-products .add-to-cart").eq(3).click({ force: true });
    cy.get('.modal-body a[href="/view_cart"] u').click();
    cy.get(".cart_description h4 a").should("have.length.greaterThan", 0);
    cy.get(".cart_quantity_delete").last().click();
    cy.get(".cart_description h4 a").should("have.length.greaterThan", 0);
  });
});
