/// <reference types="Cypress" />

describe('Cenário 001 - Acessar a tela "Dashboard Personalizado"', () => {
    beforeEach(() => {
        cy.visitAndSignIn()
    })
    
    it('CT001 - Acessando dashboard personalizado', () => {
        cy.get('.mat-icon.text-white.material-icons[role="img"][data-mat-icon-type="font"]')
            .eq(0)
            .click()
        
        cy.contains('span', 'Personalizado')
            .click()
    })
})