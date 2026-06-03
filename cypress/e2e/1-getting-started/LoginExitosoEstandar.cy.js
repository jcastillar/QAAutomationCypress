describe ('Login Sauce Demo', ()=>{

    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
    })

    it('Login exitoso',()=>{
        // cy.log('test 1') Logueamos mensaje en consola
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.url().should('include','/inventory.html')
        cy.get('.app_logo').should('have.text','Swag Labs')
    })
})