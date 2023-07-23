describe('template spec', () => {
  it('TC1 - Redirect to appstore success', () => {
    cy.visit('https://vinid.net/')

    cy.get('.img-desktop').invoke('removeAttr', 'target').click()
    cy.url().should('include', 'tin-khuyen-mai');

    cy.get('.pulsingButton')
      .scrollIntoView()
      .should('be.visible')
      .invoke('removeAttr', 'target')
      .click()

    cy.origin('https://play.google.com', () => {
      cy.get("h1[itemprop='name'] span").contains("VinID - Tiêu dùng thông minh")
    })
  })
})