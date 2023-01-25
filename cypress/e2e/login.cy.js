describe('The Login Page', () => {
    // beforeEach(() => {
    //     cy.visit('/')
    // })

    it('Successfully logs in', () => {
        cy.login('dominika.roszak00+test@gmail.com', 'Kurwamac8')
        cy.visit('app/today')
        cy.get('#\\:r2\\:').click()
        cy.get('.user_menu_email').should('contain', 'dominika.roszak00+test@gmail.com')
})

    it('Login fails - wrong username', () => {
        cy.visit('pl/')
        cy.get('.hGJuHEzyrDQU5nwls2PW>li').eq(5).click()
        .url().should('contain' , '/auth/login')
        cy.get('#element-0').type('dominika.roszak00+fail@gmail.com')
        cy.get('#element-3').type('Kurwamac8')
        cy.get('button[type=submit]').click()
        cy.contains('Niepoprawny e-mail lub hasło.')
})

})