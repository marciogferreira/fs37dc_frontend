import Login from "./Autenticacao";

describe('CRUD Produtos', () => {
  it('Editar Produto', () => {
    
    // LOGIN
    Login()

    // PASSOS PARA CRIAR PRODUTO
    cy.wait(2000)
    cy.contains('Produtos').click();
    cy.wait(1000)
    cy.get('[id=btn_editar]').eq(3).click();
    cy.get('[id=nome]').clear()
    cy.get('[id=nome]').type('Digital College');
    cy.wait(1000)
    cy.get('[id=valor]').clear()
    cy.get('[id=valor]').type('36');
    cy.wait(1000)
    cy.get('[id=quantidade]').clear()
    cy.get('[id=quantidade]').type('10');
    cy.wait(1000)
    cy.contains('Salvar').click();
    cy.wait(1000)
    cy.contains('Produtos').click();
    // CRIAR USUARIO
  })
})