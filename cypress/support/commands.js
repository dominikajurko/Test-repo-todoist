Cypress.Commands.add('login', (
    username = ('dominika.roszak00+test@gmail.com'), 
    password = ('Kurwamac8')
    ) => {
    cy.session(
      username,
      () => {
        cy.visit('//auth/login')
        cy.get('#element-0').type(username)
        cy.get('#element-3').type(`${password}{enter}`, { log: false })
        cy.url().should('include', 'app/today')

        cy.get('#\\:r2\\:').click()
        cy.get('.user_menu_email').should('contain', username)
      },
    )
  }) 