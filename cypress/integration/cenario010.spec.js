/// <reference types="Cypress" />

describe('Cenário 010 - Abertura do menu “Dashboards” com redirecionamento para tela “Dashboard Padrão”', () => {
    beforeEach(() => {
        cy.visitAndSignIn()
    })

    it('CT014 - Clicando no ícone do menu “Dashboards” com menu lateral aberto', () => {
        cy.visitCollectionPlan()

        cy.get('mat-icon[role="img"]')
            .contains('dashboard')
            .click()

        cy.get('span')
            .contains('Padrão')
            .should('have.css', 'color', 'rgb(0, 195, 101)')

        cy.contains('Dashboards')
            .should('be.visible')
    })

    it('CT015 - Clicando no texto do menu “Dashboards” com menu lateral aberto', () => {
        cy.visitCollectionPlan()

        cy.get('div.mat-list-text')
            .contains('Dashboards')
            .click()

        cy.get('span')
            .contains('Padrão')
            .should('have.css', 'color', 'rgb(0, 195, 101)')

        cy.contains('Dashboards')
            .should('be.visible')
    })

    it('CT016 - Clicando no ícone do menu “Dashboards” com menu lateral fechado', () => {
        cy.visitCollectionPlan()

        cy.get('.sidebar-collapse-container > .mat-icon')
            .click()

        cy.contains('Planos de Coletas')
            .should('be.visible')

        cy.get('mat-icon[role="img"]')
            .contains('dashboard')
            .click()

        cy.contains('Dashboards')
            .should('be.visible')

        cy.get('span')
            .contains('Padrão')
            .should('be.visible')
            .should('have.css', 'color', 'rgb(0, 195, 101)')
    })
})