const RegistrationPO = require("./RegistrationPagePO");
const LoginPage = require("./LoginPage");

const page = new RegistrationPO();


class RegistrationPage {

    waitForPageLoaded(){

        browser.waitUntil(
            () => page.pageTitle.getText() === 'Create new account',
            {
                timeout: 5000,
                timeoutMsg: 'page was not loaded'
            }
        );

        return this;
    }

    setFirstName(value){
        page.firstName.setValue(value);

        return this;
    }

    setLastName(value){
        page.lastName.setValue(value);

        return this;
    }

    setEmail(value){
        page.email.setValue(value);

        return this;
    }

    setNewPassword(value){
        page.newPassword.setValue(value);

        return this;
    }

    createUser(){
        page.createButton.click();

        //return new LoginPage();
    }
}

module.exports = RegistrationPage;