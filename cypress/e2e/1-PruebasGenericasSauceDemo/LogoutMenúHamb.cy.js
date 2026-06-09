  describe ('Login Sauce Demo', ()=>{

    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
    })

  it('Logout desde menú hamburguesa',()=>{
        // cy.log('test 2') Logueamos mensaje en consola
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()

    })

})