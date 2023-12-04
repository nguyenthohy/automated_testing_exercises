import uiLogin from "../page/bankXYZ/loginPage";
import uiManager from "../page/bankXYZ/manager"
import dataCustomer from "../../fixtures/bankXYZ/createAcc.json";

const loginPage = new uiLogin();
// const accountCustomerPage = new uiAccountCustomer();
// const listCustomerPage = new uiListCustomer();
const manager = new uiManager();
// const transactionsPage = new uiTransactions();

describe('Test Customer Bank XYZ', () => {
    beforeEach (() => {
        // Login
        cy.visit(loginPage.getURL);
        cy.get(loginPage.getBanner).should("be.visible");
        cy.get(loginPage.getBtnManagerLogin).should("be.enabled").click();

        // Verify Url after login as Manager
        cy.verifyUrl(manager.getUrl);

         // Add new Customer
        cy.xpath(manager.getBtnAddCustomer).should("be.enabled").click();
        cy.input(manager.getFirstName, dataCustomer.addCustomer.firstName);
        cy.input(manager.getLastName, dataCustomer.addCustomer.lastName);
        cy.input(manager.getPostCode, dataCustomer.addCustomer.postCode);
        cy.get(manager.getBtnSubmit).should("be.enabled").click();
 
         // Verify create Customer is success
        cy.verifyUrl(manager.getUrl);
        cy.get(manager.getFirstName).should("be.enabled").and("have.value", "");
        cy.get(manager.getLastName).should("be.enabled").and("have.value", "");
        cy.get(manager.getPostCode).should("be.enabled").and("have.value", "");

    })
         
      it("TC1 - Open account number : Dollar, Rupee, Pound is success", () => {
        cy.visit(manager.getUrl);
        cy.xpath(manager.getBtnOpenAcc).should("be.enabled").click();
        cy.get(manager.getListCustomer).select(dataCustomer.addCustomer.fullName);
        cy.get(manager.getListCurrency).select(manager.getDollarCurrency);
        cy.get(manager.getBtnSubmit).should("be.enabled").click();
                  
        cy.visit(manager.getUrl);
        cy.xpath(manager.getBtnOpenAcc).should("be.enabled").click();
        cy.get(manager.getListCustomer).select(dataCustomer.addCustomer.fullName);
        cy.get(manager.getListCurrency).select(manager.getRupeeCurrency);
        cy.get(manager.getBtnSubmit).should("be.enabled").click();
  
        cy.visit(manager.getUrl);
        cy.xpath(manager.getBtnOpenAcc).should("be.enabled").click();
        cy.get(manager.getListCustomer).select(dataCustomer.addCustomer.fullName);
        cy.get(manager.getListCurrency).select(manager.getPoundCurrency);
        cy.get(manager.getBtnSubmit).should("be.enabled").click();
      })


      it("TC2 - Seacrh info customer by PostCode", () => {
        cy.visit(manager.getUrl);
        cy.xpath(manager.getBtnCustomer).click();
        cy.xpath(manager.getSeacrhCustomer).should("be.enabled").type(dataCustomer.addCustomer.postCode);
      })
       
})