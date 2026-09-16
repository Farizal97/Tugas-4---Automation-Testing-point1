describe('Assignment 4 - UI Automation Testing', () => {

  beforeEach(() => {
    cy.visit('https://labs.hendri.me/')
  })

  it('TC01 - Login Valid', () => {
    cy.get('#email').type('standard_user@example.com')
    cy.get('#password').type('script_sauce')
    cy.get('button[type="submit"]').click()

    cy.contains(/products/i).should('be.visible')
  })

  it('TC02 - Login Invalid', () => {
    cy.get('#email').type('salah@example.com')
    cy.get('#password').type('password123')
    cy.get('button[type="submit"]').click()

    cy.contains(/welcome back/i).should('be.visible')
  })

  it('TC03 - Search Product', () => {
    cy.get('#email').type('standard_user@example.com')
    cy.get('#password').type('script_sauce')
    cy.get('button[type="submit"]').click()

    cy.get('input')
      .filter(':visible')
      .first()
      .type('sele')

    cy.contains(/sele/i).should('be.visible')
  })

  it('TC04 - Add To Cart', () => {
    cy.get('#email').type('standard_user@example.com')
    cy.get('#password').type('script_sauce')
    cy.get('button[type="submit"]').click()

    cy.contains('button', /add to cart/i)
      .first()
      .click()

    cy.contains(/cart/i).should('be.visible')
  })

})