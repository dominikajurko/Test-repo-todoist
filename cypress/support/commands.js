Cypress.Commands.add('login', (username, password) => {
      cy.session([username, password], () => {
        cy.visit('pl/')
        cy.get('.hGJuHEzyrDQU5nwls2PW>li').eq(5).click()
        .url().should('contain' , '/auth/login')
        cy.get('#element-0').type(username)
        cy.get('#element-3').type(password)
        cy.get('button[type=submit]').click()
        cy.url().should('include', 'app/today')
      })
    })