const URL = "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager";

const BTN_ADD_CUSTOMER = "//button[normalize-space()='Add Customer']";
const FIRST_NAME = "input[placeholder='First Name']";
const LAST_NAME = "input[placeholder='Last Name']";
const POST_CODE = "input[placeholder='Post Code']";
const BTN_SUBMIT = "button[type='submit']";

const BTN_OPEN_ACCOUNT = "//button[normalize-space()='Open Account']";
const LIST_CUSTOMER = "#userSelect";
const LIST_CURRENCY = "#currency";
const DOLLAR = "Dollar";
const POUND = "Pound";
const RUPEE = "Rupee";

const BTN_CUSTOMER = "//button[normalize-space()='Customers']";
const SEARCH_BOX_CUSTOMER = "//input[@placeholder='Search Customer']";
const TABLE_CUSTOMER = "//div//table[class = 'table table-bordered table-striped']";
const ROW = '//table//tr[class ng-scope"';

export default class Manager {
    get getUrl() {
        return URL;
    }

    get getBtnAddCustomer() {
        return BTN_ADD_CUSTOMER;
    }

    get getFirstName() {
        return FIRST_NAME;
    }

    get getLastName() {
        return LAST_NAME;
    }

    get getPostCode() {
        return POST_CODE;
    }

    get getBtnSubmit() {
        return BTN_SUBMIT;
    }

    get getBtnOpenAcc() {
        return BTN_OPEN_ACCOUNT;
    }

    get getListCustomer() {
        return LIST_CUSTOMER;
    }

    get getListCurrency() {
        return LIST_CURRENCY;
    }

    get getDollarCurrency() {
        return DOLLAR;
    }

    get getPoundCurrency() {
        return POUND;
    }

    get getRupeeCurrency() {
        return RUPEE;
    }

    get getBtnCustomer() {
        return BTN_CUSTOMER;
    }

    get getSeacrhCustomer() {
        return SEARCH_BOX_CUSTOMER;
    }

    get getTableCustomer() {
        return TABLE_CUSTOMER;
    }

    get getRowTable() {
        return ROW;
    }

}