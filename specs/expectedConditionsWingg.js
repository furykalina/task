const assert = require('assert');
const {URL} = require('url');

const request = require('supertest');
const expect = require('chai').expect;

const testData = require('./testDataWingg.json');

describe('Login page', () => {

    beforeEach(() => {
        browser.maximizeWindow();
        browser.url(testData.appUrl);
    });

    afterEach(() => {
        browser.reloadSession();
    });

    it('', () =>{
        const email = $('#inputEmail');
        const password = $('#inputPassword');
        
        email.setValue("wingg@demo.com");
        password.setValue("RgB1kaNm");

        const submitButton = $('.sign-in-btn');
        submitButton.click();

        const pageMain = $('.section-name');
        pageMain.waitForDisplayed();

        const tournamentDDL = $('.select-league');
        const tournamentListArea = $('.league-options.show');

        tournamentDDL.scrollIntoView();
        tournamentDDL.click();
        tournamentListArea.waitForDisplayed();
        
        let isTournamentListDisplayed = tournamentListArea.isDisplayed();
        assert.equal(isTournamentListDisplayed, true);
        
        const tournamentList = $$('.league-btg-options-original ul li');
    
        assert.notEqual(tournamentList.length, 0);

        tournamentList.forEach(element => {
            console.log("Searching tournaments: " + element.getText());

            if (element.getText() !== 'Search tournament') {
                element.click();
                console.log("Click...");
            }
        });
  
        const matchDDL = $('.select-game');
        const matchArea = $('.game-btg-options-original.collapse.show');
        
        matchDDL.scrollIntoView();
        matchDDL.click();
        matchArea.waitForDisplayed();

        const matchSelected = $$('.game-btg-options-original ul li');
    
        assert.notEqual(matchSelected.length, 0);
        matchSelected.forEach(element => {
            console.log("Match: " + element.getText());

            if (element.getText() == 'Stage mode') {
                element.click();
                console.log("Click...");
            }
        });

        const matchRadioButton = $('.btg-checkbox-list');
        const construct = $('.construct');
        const notif = $('.notification-box.collapse.show');
        
        matchRadioButton.waitForDisplayed();
        matchRadioButton.click();
        construct.click();
        notif.waitForDisplayed();

        const cardFace = $('.card__face--front');
        const cardBack = $('.card__face--back');
        const addToBasket = $('.btn.card-to-basket');

        cardFace.scrollIntoView();
        cardFace.waitForDisplayed();
        cardFace.moveTo();
        cardBack.waitForDisplayed();
        addToBasket.click();
        
        const notific = $('.notification');

        notific.waitForDisplayed();

        const quantityBasket = $('#basket-size');

        browser.waitUntil(
            () => quantityBasket.getText() !== '',
            {
                timeout: 5000,
                timeoutMsg: 'Basket counter was not incremented'
            });

        assert.equal( quantityBasket.getText(), 1);
        
        const deleteAll = $('.delete-all-btn.form-control');
        //delete button is displayed when the basket is not empty

        quantityBasket.click();
        deleteAll.isDisplayed();


    });

    it('get user', (done) => {
        request('https://jsonplaceholder.typicode.com')
        .get('/users/7')
        .end((err, res) => {
            console.log("User email: ", res.body.email);
            expect(res.body.email).to.be.equal('Telly.Hoeger@billy.biz');
        });
    });

    //don't konw how to verify multiple objects for integer range

    it('post request with same userId', (done) => {
        request('https://jsonplaceholder.typicode.com')
        .post('/posts')
        .send({"userId": "7"})
        .send({"title": "MyTitle"})
        .send({"body": "CustomBody"})
        .set('Accept', 'application/json')
        .end((err, res) => {
            expect(200);          
        });
    });
});


