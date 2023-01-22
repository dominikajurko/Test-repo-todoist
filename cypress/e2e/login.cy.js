describe('The Login Page', () => {
    it('Successfully logs in', () => {
      cy.login()
    })

    it('visitsanotherpage', () => {
        cy.visit('app/project/2306473783')
    })
})