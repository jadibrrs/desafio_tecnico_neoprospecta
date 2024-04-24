Cypress.Commands.add('acessarSiteEFazerLogin', () => {
    cy.visit('https://qa1-frontend-biomequality-husrbtcmsa-ue.a.run.app/pt-BR/login')
    
    cy.get('[data-cy="accept-cookies"]')
        .click()
    
    cy.get('[data-cy="username"]')
        .click()
        .type('jbheliodoro@gmail.com')
    
    cy.get('[data-cy="password"]')
        .click()
        .type('@#$%werRR')

    cy.get('[data-cy="login-submit"]')
        .click()
})