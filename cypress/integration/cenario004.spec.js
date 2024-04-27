/// <reference types="Cypress" />

describe('Cenário 004 - Exibição do dropdown menu do campo “Eixo X”', () => {
    beforeEach(() => {
        cy.visitAndSignIn()
    })

    it('CT004 - Clicando no campo "Eixo X*"', () => {
        cy.visitCustomDashboard()
        cy.clickButtonAddGraphic()

        cy.get('#mat-dialog-1')
            .contains('Eixo X*')
            .click({force: true})

        cy.get('[role="listbox"]')
            .contains('Coletor')
            .scrollIntoView()
            .should('be.visible')
        cy.get('[role="listbox"]')
            .contains('Coleta')
            .scrollIntoView()
            .should('be.visible')
        cy.get('[role="listbox"]')
            .contains('Data da coleta da amostra')
            .scrollIntoView()
            .should('be.visible')
        cy.get('[role="listbox"]')
            .contains('Data de validade')
            .scrollIntoView()
            .should('be.visible')
        cy.get('[role="listbox"]')
            .contains('Data de fabricação')
            .scrollIntoView()
            .should('be.visible')
        cy.get('[role="listbox"]')
            .contains('Etapa do processo')
            .scrollIntoView()
            .should('be.visible')
        cy.get('[role="listbox"]')
            .contains('Grupo da matriz')
            .scrollIntoView()
            .should('be.visible')
        cy.get('[role="listbox"]')
            .contains('Lote')
            .scrollIntoView()
            .should('be.visible')
        cy.get('[role="listbox"]')
            .contains('Matriz')
            .scrollIntoView()
            .should('be.visible')
        cy.get('[role="listbox"]')
            .contains('Metodologia')
            .scrollIntoView()
            .should('be.visible')
        cy.get('[role="listbox"]')
            .contains('Parâmetro')
            .scrollIntoView()
            .should('be.visible')
        cy.get('[role="listbox"]')
            .contains('Padrão de conformidade')
            .scrollIntoView()
            .should('be.visible')
        cy.get('[role="listbox"]')
            .contains('Plano de coleta')
            .scrollIntoView()
            .should('be.visible')
        cy.get('[role="listbox"]')
            .contains('Referência')
            .scrollIntoView()
            .should('be.visible')
    })
})