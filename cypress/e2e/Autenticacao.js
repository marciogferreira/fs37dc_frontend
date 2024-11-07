const Login = () => {
    cy.visit('http://localhost:5173')
    cy.get('[id=exampleInputEmail1]').type('admin@admin.com.br')
    cy.wait(1000)
    cy.get('[id=exampleInputPassword1]').type('123123')

    cy.wait(1000)
    cy.contains('Check me out').click()
    cy.wait(1000)
    cy.contains('Acessar').click()
}

export default Login