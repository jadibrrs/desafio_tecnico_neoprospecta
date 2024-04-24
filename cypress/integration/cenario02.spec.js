/// <reference types="Cypress" />

describe('Cenário 2 - Exibição do formulário “Adicionar Gráfico”', () => {
    beforeEach(() => {
        cy.visitAndSignIn()
        cy.visitCustomDashboard()
    })

    it('002', () => {
        cy.get('.mat-tooltip-trigger > .bq-theme > .mat-focus-indicator')
            .click()
        
        cy.get('.mat-form-field-disabled > .mat-form-field-wrapper > .mat-form-field-flex')
            .contains('Colunas')
            .should('be.visible')

        cy.get('.mat-form-field-disabled > .mat-form-field-wrapper > .mat-form-field-flex')
            .contains('Gráfico')
            .should('be.visible')

        cy.get('div.mat-form-field-infix > span > label > mat-label')
            .eq(2)
            .should('have.text', 'Eixo X*')
        
        cy.get('div.mat-form-field-infix > span > label > mat-label')
            .eq(0)
            .should('not.be.visible')

        cy.contains('Eixo y*')
            .should('be.visible')

        cy.contains('Número de Resultados')
            .should('be.visible')
        
            cy.get('#mat-input-9')
            .should('be.visible')
        
        cy.contains('Salvar e Adicionar')
            .should('be.visible')
    })
})