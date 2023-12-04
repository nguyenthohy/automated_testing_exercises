const URL = "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/customer";
const LIST_CUSTOMER = "#userSelect";
const BTN_LOGIN = "button[type='submit']";

export default class ListCustomer {
    get getUrl () {
       return URL;
    }

    get getListCustomer() {
        return LIST_CUSTOMER;
    }

   get getBtnLogin() {
    return BTN_LOGIN;
   }
}

