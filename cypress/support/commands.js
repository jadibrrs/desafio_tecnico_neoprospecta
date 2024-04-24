Cypress.Commands.add('visitAndSignIn', () => {
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

Cypress.Commands.add('visitCustomDashboard', () => {
    cy.get('.mat-icon.text-white.material-icons[role="img"][data-mat-icon-type="font"]')
        .eq(0)
        .click()
        
    cy.contains('span', 'Personalizado')
        .click()
    
    cy.contains('Dashboard Personalizado')
        .should('be.visible')
})



