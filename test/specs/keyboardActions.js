const assert = require('assert');
const {URL} = require('url');

describe('Keyboard Actions', () => {
    const urlMain = 'https://dineshvelhal.github.io/testautomation-playground/index.html';
    const urlKeyboardActionPage = 'https://dineshvelhal.github.io/testautomation-playground/keyboard_events.html';

    it('User can open Keyboard Actions page', () =>{
        const keyboardActionsPageButton = $("[href='keyboard_events.html']");

        browser.url(urlMain);

        keyboardActionsPageButton.click();

        const title = browser.getTitle();
        console.log("Title of the page: " + title);
        assert.equal(title, "Keyboard Actions");

        const url = new URL(browser.getUrl());
        const actualUrl = url.hostname.toString() + url.pathname.toString();
        assert.equal(actualUrl, "dineshvelhal.github.io/testautomation-playground/keyboard_events.html");
    });

    it('User can send keys to textarea form', () =>{
        const textArea = $("#area");
        const keysList = ['Control', 'Alt', 'Shift', 'Meta', 'Home', 'ArrowDown', 'PageUp'];
        const keyConfirmArea = $('#key');
        const keysConfirmList = ['Control', 'Alt', 'Shift', 'Meta', 'Home', 'ArrowDown', 'PageUp'];

        browser.url(urlKeyboardActionPage);

        let i = 0;

        keysList.forEach(element => {
            console.log("Processing key: " + element);

            if (!textArea.isFocused()) {
                textArea.click();
                console.log("Click...");
            }

            browser.keys(element);

            assert.equal(keyConfirmArea.getText(), keysConfirmList[i]);
            i = ++i;
        });
    });

});
