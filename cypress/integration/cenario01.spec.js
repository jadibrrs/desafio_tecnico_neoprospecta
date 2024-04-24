/// <reference types="Cypress" />

describe('Acessar a tela Dashboard Personalizado', () => {
    beforeEach(() => {
        cy.acessarSiteEFazerLogin()
    })

    it('Acessar tela Dashboard Personalizado', () => {
        cy.get('.mat-icon.text-white.material-icons[role="img"][data-mat-icon-type="font"]')
            .eq(0)
            .click()
        
        cy.contains('span', 'Personalizado')
            .click()
    })
})