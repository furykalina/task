const LoginPage = require('./page/LoginPage');
const RegistrationPage = require('./page/RegistrationPage');
const SearchPage = require('./page/SearchPage');
const MyListsPage = require('./page/MyListsPage');

const assert = require('assert');
const testData = require('./testData.json');

const loginPage = new LoginPage();
const registrationPage = new RegistrationPage();
const searchPage = new SearchPage();
const myListsPage = new MyListsPage();

describe('Registration page', () => {

    beforeEach(() => {
        browser.maximizeWindow();
        browser.url(testData.appUrl);
    });

    afterEach(() => {
        browser.reloadSession();
    });

    it('User can be registered', () =>{

        loginPage
            .waitForPageLoaded()
            .createNewUser();

        registrationPage
            .waitForPageLoaded()
            .setFirstName(testData.regFirstName)
            .setLastName(testData.regLastName)
            .setEmail(testData.regEmail)
            .setNewPassword(testData.regPassword)
            .createUser();

        let validRegMes = "You have successfully registered! Now you need to login";
        assert.equal(loginPage.getRegistrationMsg(), validRegMes);

        loginPage
            .waitForPageLoaded()
            .setEmail(testData.regEmail)
            .setPassword(testData.regPassword)
            .login();

        searchPage.waitForPageLoaded();
    });

    it('User can not login with invalid credentials', () =>{
        loginPage
            .waitForPageLoaded()
            .setEmail(testData.invalidEmail)
            .setPassword(testData.invalidPassword)
            .login();

        let validMsg = "The email or password is incorrect";
        assert.equal(loginPage.getValidationMsg(), validMsg);
    });

    it('User can create list', () =>{
        loginPage
            .waitForPageLoaded()
            .setEmail(testData.emailListCreation)
            .setPassword(testData.regPassword)
            .login();

        searchPage
            .waitForPageLoaded()
            .openNavigationBarMenu()
            .openMyLists();

        myListsPage
            .createNewList()
            .setListName(testData.listName)
            .saveList()
            .waitForLoader();

        assert.equal(myListsPage.getListObjectsCount(), 1);
        assert.equal(myListsPage.getListObjectsTitle(0), testData.listName);

    });

    it('User can delete list', () =>{
        loginPage
            .waitForPageLoaded()
            .setEmail(testData.emailListCreation)
            .setPassword(testData.regPassword)
            .login();

        searchPage
            .waitForPageLoaded()
            .openNavigationBarMenu()
            .openMyLists();

        myListsPage
            .createNewList()
            .setListName(testData.listName)
            .saveList()
            .waitForLoader()
            .deleteList(1);

        assert.equal(myListsPage.getListObjectsCount(), 0);
    });

});