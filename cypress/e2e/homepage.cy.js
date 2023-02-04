describe('Homepage', () => {

  beforeEach(() => {
    cy.visit('/pl')
  })

  it('Successfully loads', () => {
    cy.visit('/')
  })

  it('Contains menu elements', () => {
    cy.get('.hGJuHEzyrDQU5nwls2PW>li').eq(0)
      .should('be.visible')
      .contains('Funkcje')

    cy.get('.hGJuHEzyrDQU5nwls2PW>li').eq(1)
      .should('be.visible')
      .contains('Szablony')

    cy.get('.hGJuHEzyrDQU5nwls2PW>li').eq(2)
      .should('be.visible')
      .contains('Dla zespołów')

    cy.get('.hGJuHEzyrDQU5nwls2PW>li').eq(3)
      .should('be.visible')
      .contains('Materiały')

    cy.get('.hGJuHEzyrDQU5nwls2PW>li').eq(4)
      .should('be.visible')
      .contains('Ceny')

    cy.get('.hGJuHEzyrDQU5nwls2PW>li').eq(5)
      .should('be.visible')
      .contains('Zaloguj się')

    cy.get('.hGJuHEzyrDQU5nwls2PW>li').eq(6)
      .should('be.visible')
      .contains('Zacznij za darmo')
  })

  it('Contains nested menu elements', () => {
    cy.get('.hGJuHEzyrDQU5nwls2PW>li').eq(3).click()

    cy.get('[aria-label="Integracje"]')
      .should('be.visible')

    cy.get('[aria-label="Przewodnik"]')
      .should('be.visible')

    cy.get('[aria-label="Centrum pomocy"]')
      .should('be.visible')

    cy.get('[aria-label="Metody produktywności + Quiz"]')
      .should('be.visible')

    cy.get('[aria-label="Blog"]')
      .should('be.visible')
    })

  it('Moves through pages', () => {
      cy.get('.hGJuHEzyrDQU5nwls2PW>li').eq(0).click()
      .url().should('contain' , '/features')

    cy.get('.hGJuHEzyrDQU5nwls2PW>li').eq(1).click()
      .url().should('contain' , '/templates')

    cy.get('.hGJuHEzyrDQU5nwls2PW>li').eq(2).click()
      .url().should('contain' , '/business')

    cy.get('.hGJuHEzyrDQU5nwls2PW>li').eq(3).click()
    cy.get('[aria-label="Integracje"]').click({ force: true })
      .url().should('contain' , '/integrations')

    cy.get('.hGJuHEzyrDQU5nwls2PW>li').eq(3).click()  
    cy.get('[aria-label="Przewodnik"]').click({ force: true })
      .url().should('contain' , '/getting-started')
      cy.go('back')

    cy.get('.hGJuHEzyrDQU5nwls2PW>li').eq(3).click() 
    cy.get('[aria-label="Centrum pomocy"]').click({ force: true })
      .url().should('contain' , '/help')
      cy.go('back')

    cy.get('.hGJuHEzyrDQU5nwls2PW>li').eq(3).click() 
    cy.get('[aria-label="Metody produktywności + Quiz"]').click({ force: true })
      .url().should('contain' , '/productivity-methods')
      cy.go('back')

    cy.get('.hGJuHEzyrDQU5nwls2PW>li').eq(3).click()
    cy.get('[aria-label="Blog"]').click({ force: true })

    cy.origin('https://blog.doist.com', () => {
      cy.title().should('eq' , 'Ambition & Balance - Thoughts on more fulfilling ways to work and live.')
    })
    
    cy.visit('/')
    cy.get('.hGJuHEzyrDQU5nwls2PW>li').eq(4).click()
      .url().should('contain' , '/pricing')

    cy.get('.hGJuHEzyrDQU5nwls2PW>li').eq(5).click()
      .url().should('contain' , '/auth/login')
      cy.go('back')

    cy.get('.hGJuHEzyrDQU5nwls2PW>li').eq(6).click()
      .url().should('contain' , '/auth/signup')    
    })
  })