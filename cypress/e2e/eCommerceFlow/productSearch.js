describe('Product search functionality', () => {
    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/')
        cy.get('[href="/products"]').click()
        cy.url().should('include', '/products')

    })
    it('Should go to the product page and Search box is visible', () => {
        cy.get('.title').should('contain', 'All Products')
        cy.get('#search_product').should('be.visible')
    })
    it('Should search for Blue Top and display matching results', () => {
        const productName = 'Blue Top'
        cy.get('.input-lg').type(productName).should('have.value','Blue Top')
        cy.get('#submit_search').click()
        cy.get('.productinfo p').should('contain', 'Blue Top')


    })
    it('Should handle a search with no matching products', () => {
        const invalidProductName = 'error'
        cy.get('.input-lg').type(invalidProductName)
        cy.get('#submit_search').click()
        cy.get('h2.title').should('contain', 'Searched Products')
    })
})