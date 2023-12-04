const URL = "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/account";
const BTN_LOGOUT = ".btn.logout";
const NAME_CUSTOMER = ".fontBig.ng-binding";
const LIST_ACCOUNT_NUMBER = "#accountSelect";
 

const BTN_DEPOSIT = "//button[normalize-space()='Deposit']";
const AMOUNT_DEPOSIT = "input[placeholder='amount']";
const BTN_SUBMIT = "button[type='submit']";

const BTN_TRANSACTIONS = "//button[normalize-space()='Transactions']";

const BTN_WITHDRAWL = "//button[normalize-space()='Withdrawl']";
const AMOUNT_WITHDRAWL = "input[placeholder='amount']";

const ZONE_MESS_DEPOSIT = "//span[@class='error ng-binding']";
const MESS_DEPOSIT_SUCEES = "Deposit Successful";




export default class AccountCustomer {
    get getUrl () {
        return URL;
    }

    get getBtnLogout() {
        return BTN_LOGOUT;
    }

    get getNameCustomer() {
        return NAME_CUSTOMER;
    }

    get getListAccountNumber() {
        return LIST_ACCOUNT_NUMBER;
    }

    get getBtnDeposit() {
        return BTN_DEPOSIT;
    }

    get getAmountDeposit() {
        return AMOUNT_DEPOSIT;
    }

    get getZoneMessDeposit() {
        return ZONE_MESS_DEPOSIT;
    }

    get getMessDepositSucess() {
        return MESS_DEPOSIT_SUCEES;
    }

    get getBtnSubmit() {
        return BTN_SUBMIT;
    }

    get getBtnTrans() {
        return BTN_TRANSACTIONS;
    }

    get getBtnWithdrawl() {
        return BTN_WITHDRAWL;
    }

    get getAmountWithdrawl() {
        return AMOUNT_WITHDRAWL;
    }
} 