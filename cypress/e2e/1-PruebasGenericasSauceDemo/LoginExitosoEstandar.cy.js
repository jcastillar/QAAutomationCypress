describe ('Login Sauce Demo', ()=>{

    beforeEach(()=>{
          })

    it('Login exitoso',()=>{
        cy.fixture('Login').then((data)=>{
            const r = data.admin
            const p = data.invitado

            cy.get('[data-test="username"]').type(r)
            cy.get('[data-test="password"]').type(p)
            cy.get('[data-test="login-button"]').click()
        })
        cy.url().should('include','/inventory.html')
        cy.get('.app_logo').should('have.text','Swag Labs')
    })
})