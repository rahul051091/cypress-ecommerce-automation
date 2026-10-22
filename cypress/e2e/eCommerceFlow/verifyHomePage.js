
describe('Verify Home page and navigation', () => {

    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/')
    })

    it('should display the website logo', () => {
        cy.get('.logo').should('be.visible')
    })

    it('should load the home page successfully', () => {
        cy.url().should(
            'include',
            'https://www.automationexercise.com/'
        )
        cy.get('.logo').should('be.visible')
    })

    it('should display the main heading', () => {
        cy.get('.col-sm-6 h2')
            .should('be.visible')
            .and('not.be.empty')
    })

    it('should display the main navigation links', () => {
        cy.get('a[href="/products"]').should('be.visible')
        cy.get('a[href="/view_cart"]').should('be.visible')
        cy.get('a[href="/login"]').should('be.visible')
    })

    it('should display product listings', () => {
        cy.get('.single-products')
            .should('have.length.greaterThan', 0)

        cy.get('.single-products')
            .first()
            .should('be.visible')
    })

})

