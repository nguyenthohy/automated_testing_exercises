const URL = "https://vinid.net/"
const POPUP_MODAL = "#VinID-popup-modal"
const POPUP_MODAL_IMG = ".img-desktop"

export default class LoginPage {
    get getUrl() {
        return URL
    }

    get getPopupModal() {
        return cy.get(POPUP_MODAL)
    }

    get getPopupModalImg() {
        return cy.get(POPUP_MODAL_IMG)
    }
}