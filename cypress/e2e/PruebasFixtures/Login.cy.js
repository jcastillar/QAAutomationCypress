describe ('Login Sauce Demo', ()=>{

    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
        
          })

    it('Login exitoso',()=>{
        cy.fixture('UsersDate.json').then((data)=>{
            const r = data.admin
            cy.get('[data-test="username"]').type(r.username)
            cy.get('[data-test="password"]').type(r.password)
            cy.get('[data-test="login-button"]').click()
        }) 
             cy.url().should('include','/inventory.html')
        cy.get('.app_logo').should('have.text','Swag Labs')

          })})
 
 beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
        
          })

      it('Login exitoso invitado',()=>{
        cy.fixture('UsersDate.json').then((data)=>{

            const p = data.invitado
            cy.get('[data-test="username"]').type(p.username)
            cy.get('[data-test="password"]').type(p.password)
            cy.get('[data-test="login-button"]').click()
        })
            cy.url().should('include','/inventory.html')
        cy.get('.app_logo').should('have.text','Swag Labs')
       
})