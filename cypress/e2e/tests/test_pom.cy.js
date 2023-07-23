import DashboardUI from "../page/DashboardUI";
import PromotionDetailUI from "../page/PromotionDetailUI";

const dashboardUI = new DashboardUI();
const promotionDetailUI = new PromotionDetailUI();

describe('template spec', () => {
    it('TC1 - Redirect to appstore success', () => {
      cy.visit(dashboardUI.getUrl)
      dashboardUI.getPopupModalImg.invoke('removeAttr', 'target').click()
      
      cy.url().should('include', promotionDetailUI.getUrlPromotion);
      promotionDetailUI.getButtonDownloadAppInContent
        .scrollIntoView()
        .should('be.visible')
        .invoke('removeAttr', 'target')
        .click()
  
      cy.origin('https://play.google.com', () => {
        cy.get("h1[itemprop='name'] span").contains("VinID - Tiêu dùng thông minh")
      })
    })
  })