/// <reference types="Cypress" />

describe('Cenário 002 - Exibição do formulário “Adicionar Gráfico”', () => {
    beforeEach(() => {
        cy.visitAndSignIn()
    })
    
    it('CT002 - Exibindo formulário de adicionar gráfico', () => {
        cy.visitCustomDashboard()
        
        cy.get('.mat-tooltip-trigger > .bq-theme > .mat-focus-indicator')
            .click()
        
        cy.get('.dialog-form__title')
            .should('be.visible')
        
        cy.get('#mat-dialog-1')
            .contains('Colunas')
            .should('be.visible')

        cy.get('#mat-dialog-1')
            .contains('Gráfico')
            .should('be.visible')

        cy.get('#mat-dialog-1')
            .contains('Eixo X*')

        cy.get('#mat-dialog-1')
            .contains('Agrupar por*')
            .should('not.exist')

        cy.get('#mat-dialog-1')
            .contains('Eixo y*')
            .should('be.visible')

        cy.get('#mat-dialog-1')
            .contains('Número de Resultados')
            .should('be.visible')

        cy.get('#mat-dialog-1')
            .contains('Nome')
            .should('exist')

        cy.get('#mat-dialog-1')
            .contains('Salvar e Adicionar')
            .should('be.visible')
    })
})