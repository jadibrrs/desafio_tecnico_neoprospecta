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

Cypress.Commands.add('clickButtonAddGraphic', () => {
    cy.get('.mat-tooltip-trigger > .bq-theme > .mat-focus-indicator')
        .click()
    
    cy.get('.dialog-form__title')
        .should('be.visible')
})

Cypress.Commands.add('showGroupBySelect', () => {
    cy.get('#mat-dialog-1')
        .contains('Eixo X*')
        .click({force: true})
        .get('[role="listbox')
        .contains('Data da coleta da amostra')
        .click()
    cy.get('#mat-dialog-1')
        .contains('Agrupar por*')
        .should('exist')
})

