 describe ('Completar formulario', ()=>{

    beforeEach(()=>{
        cy.visit('https://cypress-playground.vercel.app/forms')
        
          })
 
 it('Completar formulario buenas practicas', () => {
cy.fixture('Forms').then((data) => {

      const Input = data.registro 
      cy.get('#bp-name').type(Input.nombre)
      cy.get('#bp-email').type(Input.email)
      cy.get('#bp-comments').type(Input.comentarios)
      cy.get('#bp-country').select('Colombia')
      cy.contains('Femenino').click()
      cy.contains('Testing').click()
      cy.get('#bp-experience').invoke('val', '1|10').trigger('change')
      cy.get('#bp-birthdate').type(Input.fechaNacimiento)
      
    })

  })
})

 describe ('Completar formulario', ()=>{

    beforeEach(()=>{
        cy.visit('https://cypress-playground.vercel.app/forms')
        
          })
 
 it('Completar formulario Malas practicas', () => {
cy.fixture('Forms').then((data) => {

      const Input = data.registro 
      cy.get('[placeholder="Ingrese su nombre"]').type(Input.nombre)
      cy.get('[placeholder="Correo electrónico"]').type(Input.email)
      cy.get('.dropdown').select('Colombia')
      cy.get(':nth-child(4) > .flex-wrap > :nth-child(2)').click()
      cy.get(':nth-child(5) > .flex-wrap > :nth-child(1) > .accent-gray-600').click()
      
    })

  })
})