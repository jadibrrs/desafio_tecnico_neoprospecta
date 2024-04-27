/// <reference types="Cypress" />

import invoke from 'lodash/invoke'

describe('Cenário 008 - Limite de caracteres do campo “Nome”', () => {
    beforeEach(() => {
        cy.visitAndSignIn()
    })

    it('CT009 - Clicando e digitando no campo “Nome”', () => {
        const longText = Cypress._.repeat('0123456789', 10)
        
        cy.visitCustomDashboard()
        cy.clickButtonAddGraphic()

        cy.get('#mat-dialog-1')
            .get('input[formcontrolname="name"]')
            .click({force: true})
            .type(longText)
            .should('have.value', longText)
            .clear()
    })

    it('CT010 - Clicando e digitando 101 caracteres no campo “Nome”', () => {
        const longText = Cypress._.repeat('0123456789', 10)

        cy.visitCustomDashboard()
        cy.clickButtonAddGraphic()

        cy.get('#mat-dialog-1')
        .get('input[formcontrolname="name"]')
        .click({force: true})
        .type(longText + "a")
        .should('have.value', longText)
        //.clear()
    })
})