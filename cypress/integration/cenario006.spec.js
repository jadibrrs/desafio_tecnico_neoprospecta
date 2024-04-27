/// <reference types="Cypress" />

describe('Cenário 006 - Exibição do dropdown menu do campo “Agrupar por”', () => {
    beforeEach(() => {
        cy.visitAndSignIn()
    })

    it('CT007 - Clicando no campo “Agrupar por*”', () => {
        cy.visitCustomDashboard()
        cy.clickButtonAddGraphic()
        cy.showGroupBySelect()

        cy.get('#mat-dialog-1')
            .contains('Agrupar por*')
            .click({force: true})

        cy.get('[role="listbox"]')
            .contains('Dias')
            .should('be.visible')
        cy.get('[role="listbox"]')
            .contains('Semanas')
            .should('be.visible')
        cy.get('[role="listbox"]')
            .contains('Meses')
            .should('be.visible')
        cy.get('[role="listbox"]')
            .contains('Anos')
            .should('be.visible')
    })
})