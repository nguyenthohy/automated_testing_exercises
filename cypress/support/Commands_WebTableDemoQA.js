Cypress.Commands.add("input", function(elm, data) {
  cy.get(elm)
  .should("be.enabled")
  .clear()
  .type(data)
  .invoke("val")
  .then(function(val) {
    expect(val).to.eq(data);
  })
  
})

