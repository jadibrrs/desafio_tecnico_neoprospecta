/// <reference types="Cypress" />

describe('Cenário 012 - Fechamento do menu “Dashboard”', () => {
    beforeEach(() => {
        cy.visitAndSignIn()
    })

    it('CT018 - Fechamento clicando no chevron do menu “Dashboards”', () => {
        cy.get('.mat-icon.text-white.material-icons[role="img"][data-mat-icon-type="font"]')
            .eq(0)
            .click()

        cy.get('span')
            .contains('Padrão')
            .should('be.visible')
        
        cy.get('span')
            .contains('Personalizado')
            .should('be.visible')

        cy.get('.mat-icon.text-white.material-icons[role="img"][data-mat-icon-type="font"]')
            .eq(0)
            .click()

        cy.get('span')
            .contains('Padrão')
            .should('not.be.visible')
        
        cy.get('span')
            .contains('Personalizado')
            .should('not.be.visible')
    })

    it('CT019 - Não fechamento clicando no texto e no ícone do menu “Dashboard”', () => {
        cy.get('.mat-icon.text-white.material-icons[role="img"][data-mat-icon-type="font"]')
            .eq(0)
            .click()

        cy.get('span')
            .contains('Padrão')
            .should('be.visible')
        
        cy.get('span')
            .contains('Personalizado')
            .should('be.visible')

        cy.contains('Dashboards')
            .click()

        cy.get('span')
            .contains('Padrão')
            .should('be.visible')
        
        cy.get('span')
            .contains('Personalizado')
            .should('be.visible')

        cy.get('mat-icon[role="img"]')
            .contains('dashboard')
            .click()

        cy.get('span')
            .contains('Padrão')
            .should('be.visible')
        
        cy.get('span')
            .contains('Personalizado')
            .should('be.visible')
    })
})