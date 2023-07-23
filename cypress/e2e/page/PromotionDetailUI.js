
const URL_PROMOTION = "https://vinid.net/tin-khuyen-mai"
const BUTTON_DOWNLOAD_APP_IN_CONTENT = ".pulsingButton"

export default class LoginPage {
    get getUrlPromotion() {
        return URL_PROMOTION
    }
    
    get getButtonDownloadAppInContent() {
        return cy.get(BUTTON_DOWNLOAD_APP_IN_CONTENT)
    }
}