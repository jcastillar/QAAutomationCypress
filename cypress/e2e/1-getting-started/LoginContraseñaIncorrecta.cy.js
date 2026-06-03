  describe ('Login Sauce Demo', ()=>{

    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
    })

  it('Login con contrasenia incorrecta',()=>{
        // cy.log('test 2') Logueamos mensaje en consola
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('12345')
        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]')
        .should('be.visible')
        .and('contain','Epic sadface: Username and password do not match any user in this service')
  
    })

})