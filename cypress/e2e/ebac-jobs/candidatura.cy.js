/// <reference types="cypress" />

describe('Testes para a página de candidatura', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })

    it('Deve levar o usuário até o fim do formulário de inscrição', () => {
        cy.get('.Vaga_vagalink_DeFkk').first().click()
        cy.get('input').should('have.length', 7)
        cy.screenshot('tela-inscricao')
    })

    it('Deve preencher o formulário de inscrição', () => {
        cy.get('.Vaga_vagalink_DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('Lucas Tavares')
        cy.get('input[name="email"]').type('lucasexample@gmail.com')
        cy.get('input[name="telefone"]').type('062999999999')
        cy.get('input[name="endereco"]').type('Avenida Jest, Setor Cypress')
        cy.get('#linux').check()
        cy.get('select[name="escolaridade"]').select('Bacharelado')
        cy.get('button[type="submit"]').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        })

        cy.screenshot('tela-inscricao-preenchido')
    })
})