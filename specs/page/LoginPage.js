const LoginPagePO = require("./LoginPagePO");
const RegistrationPage = require("./RegistrationPage");
const SearchPage = require("./SearchPage");

const page = new LoginPagePO();


class LoginPage {

    waitForPageLoaded(){

        browser.waitUntil(
            () => page.pageTitle.getText() === 'Login into your account',
            {
                timeout: 5000,
                timeoutMsg: 'page was not loaded'
            }
        );

        return this;
    }

    setEmail(value){
        page.email.setValue(value);

        return this;
    }

    setPassword(value){
        page.password.setValue(value);

        return this;
    }

    login(){
        page.loginButton.click();

        return new SearchPage();
    }

    createNewUser(){
        page.createNewUser.click();

        //return new RegistrationPage();
    }

    getRegistrationMsg() {
        page.registrationMsg.waitForDisplayed(5000);

        return page.registrationMsg.getText();
    }

    getValidationMsg() {
        page.validationMsg.waitForDisplayed(5000);

        return page.validationMsg.getText();
    }
}

module.exports = LoginPage;