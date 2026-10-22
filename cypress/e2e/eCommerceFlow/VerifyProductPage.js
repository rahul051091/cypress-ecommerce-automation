
describe('Products Page Tests', () => {

    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/')
        cy.get('a[href="/products"]').click()
        cy.url().should('include', '/products')
    })

    it('should display the product list', () => {
        cy.get('.single-products').should('have.length.greaterThan', 0)
        cy.get('.single-products').first().should('be.visible')
    })

    it('should display a product name and price', () => {
        cy.get('.productinfo p').first().should('be.visible').and('not.be.empty')
        cy.get('.productinfo h2').first().should('be.visible').and('not.be.empty')
    })

    it('should open the first product details page', () => {
        cy.get('.choose ul li').first().find('a[href="/product_details/1"]').click()
        cy.url().should('include', '/product_details/')
        cy.get('.product-information').should('be.visible')
        cy.get('.product-information h2').should('be.visible').and('not.be.empty')
    })

})
