import Login from "./Autenticacao";

describe('CRUD Produtos', () => {
  it('Criar Produto', () => {
    
    // LOGIN
    Login()

    // PASSOS PARA CRIAR PRODUTO
    cy.wait(2000)
    cy.contains('Produtos').click();
    cy.wait(1000)
    cy.contains('Novo Produto').click();
    cy.get('[id=nome]').type('Pizza');
    cy.wait(1000)
    cy.get('[id=valor]').type('36');
    cy.wait(1000)
    cy.get('[id=quantidade]').type('10');
    cy.wait(1000)
    cy.contains('Salvar').click();
    cy.wait(1000)
    cy.contains('Produtos').click();
    // CRIAR USUARIO
  })
})