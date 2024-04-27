/// <reference types="Cypress" />

describe('Cenário 007 - Campo “Eixo Y” bloqueado para seleção', () => {
    beforeEach(() => {
        cy.visitAndSignIn()
    })

    it('CT008 - Clicando no campo "Eixo y*"', () => {
        cy.visitCustomDashboard()
        cy.clickButtonAddGraphic()

        cy.get('#mat-dialog-1')
            .contains('Eixo y*')
            .click({force: true})

        cy.get('[role="listbox"]')
            .should('not.exist')
    })
})