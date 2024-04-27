/// <reference types="Cypress" />

describe('Cenário 011 - Abertura do menu “Dashboards” sem redirecionamento para tela “Dashboard Padrão”', () => {
    beforeEach(() => {
        cy.visitAndSignIn()
    })

    it('CT017 - Clicando no chevron do menu “Dashboards”', () => {
        cy.visitCollectionPlan()

        cy.get('.mat-icon.text-white.material-icons[role="img"][data-mat-icon-type="font"]')
            .eq(0)
            .click()

        cy.get('span')
            .contains('Padrão')
            .should('be.visible')
            .should('have.css', 'color', 'rgb(255, 255, 255)')
        
        cy.get('span')
            .contains('Personalizado')
            .should('be.visible')
            .should('have.css', 'color', 'rgb(255, 255, 255)')
    })
})