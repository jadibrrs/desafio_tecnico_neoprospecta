/// <reference types="Cypress" />

describe('Cenário 009 - Submissão de formulário', () => {
    beforeEach(() => {
        cy.visitAndSignIn()
    })

    it('CT011 - Submetendo formulário com todos os campos obrigatórios preenchidos, exibindo campo “Agrupar por*”', () => {
        cy.visitCustomDashboard()
        cy.clickButtonAddGraphic()
        cy.showGroupBySelect()

        cy.get('#mat-dialog-1')
            .contains('Agrupar por*')
            .click({force: true})
            .get('[role="listbox"]')
            .contains('Dias')
            .click()

        cy.get('#mat-dialog-1')
            .contains('Salvar e Adicionar')
            .click()

        cy.contains('Gráfico salvo com sucesso!')
        cy.contains('Ok')
            .click()

        cy.get('app-card')
            .contains(' Total de resultados ')
            .parent()
            .contains(' Resultados Conformes ')
            .parent()
            .contains(' Resultados que atingiram o valor de alerta ')
            .parent()
            .contains(' Resultados Não Conformes ')
        cy.get('[role="img"][mattooltip="Excluir Gráfico"]')
            .click()
        cy.contains(' Excluir')
            .click()
        cy.get('mat-error')
            .should('be.visible')
        cy.contains('Gráfico excluído com sucesso!')
    })

    it('CT012 - Submetendo formulário com todos os campos obrigatórios preenchidos, não exibindo campo “Agrupar por*”', () => {
        cy.visitCustomDashboard()
        cy.clickButtonAddGraphic()
        
        cy.get('#mat-dialog-1')
            .contains('Eixo X*')
            .click({force: true})
            .get('[role="listbox"]')
            .contains('Coletor')
            .click()

        cy.get('#mat-dialog-1')
            .contains('Salvar e Adicionar')
            .click()

        cy.contains('Gráfico salvo com sucesso!')
        cy.contains('Ok')
            .click()

        cy.get('app-card')
            .contains(' Total de resultados ')
            .parent()
            .contains(' Resultados Conformes ')
            .parent()
            .contains(' Resultados que atingiram o valor de alerta ')
            .parent()
            .contains(' Resultados Não Conformes ')
        cy.get('[role="img"][mattooltip="Excluir Gráfico"]')
            .click()
        cy.contains(' Excluir')
            .click()
        cy.get('mat-error')
            .should('be.visible')
        cy.contains('Gráfico excluído com sucesso!')
    })

    it('CT013 - Submetendo formulário com campo obrigatório vazio', () => { 
        cy.visitCustomDashboard()
        cy.clickButtonAddGraphic()

        cy.get('#mat-dialog-1')
            .contains('Salvar e Adicionar')
            .click()

        cy.get('#mat-dialog-1')
            .contains('Informações incompletas')

        cy.get('#mat-dialog-1')
            .get('div.mat-form-field-outline.ng-star-inserted').eq(3)
            .should('have.css', 'border-color', 'rgb(203, 0, 0)')
    })
})