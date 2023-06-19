describe('form testing', function(){
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    
    it('types a name in name input field', () => {
        cy.get('input[name="username"]')
        .type('Taylor')
        .should('include', 'Taylor')
    })
    
    it('types an email in email input', () => {
        cy.get('input[name="email"]')
        .type('taylor@email.com')
        .should('include', 'taylor@email.com')
    })

    it('types a password in password input', () => {
        cy.get('input[name="password"]')
        .type('somePassword')
        .should('include', 'somePassword')
    })

    it('checks if user can check terms of service box', () => {
        cy.get('input[name="tos"]')
        .check()
        .should('be.checked')
    })
})