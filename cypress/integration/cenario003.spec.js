/// <reference types="Cypress" />

describe('Cenário 003 - Campo “Gráfico” bloqueado para seleção', () => {
    beforeEach(() => {
        cy.visitAndSignIn()
    })
    
    it('CT003 - Clicando no campo "Gráfico"', () => {
        cy.visitCustomDashboard()
        cy.clickButtonAddGraphic()

        cy.get('#mat-dialog-1')
            .contains('Gráfico')
            .click({force: true})

        cy.get('[role="listbox"]')
            .should('not.exist')
    })
})