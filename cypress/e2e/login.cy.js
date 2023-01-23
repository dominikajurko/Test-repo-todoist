describe('The Login Page', () => {
    it('Successfully logs in', () => {
      cy.login()
    })

// checks session
    it('Moves to inbox', () => {
        cy.visit('app/project/2306473783')
    })
})