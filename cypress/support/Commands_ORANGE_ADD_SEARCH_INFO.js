Cypress.Commands.add("verifyUrl", function(data) {
    cy.url().should("contain", data)
})

Cypress.Commands.add("verifyDataInputedXpath", function(elm, data) {
    cy.xpath(elm).should("be.enabled")
    .and("have.value", data)
})

Cypress.Commands.add("verifiDataInputedCSS", function(elm, data) {
    cy.get(elm).should("be.enabled")
    .and("have.value", data)
})