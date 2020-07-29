const assert = require('assert');
const {URL} = require('url');

describe('Expected conditions', () => {
    const urlMain = 'https://dineshvelhal.github.io/testautomation-playground/index.html';
    const urlWaitConditionsPage = 'https://dineshvelhal.github.io/testautomation-playground/expected_conditions.html';

    it('User can open Wait Conditions page', () =>{
        const waitConditionsPageButton = $("[href='expected_conditions.html']");

        browser.url(urlMain);

        waitConditionsPageButton.click();

        const title = browser.getTitle();
        console.log("Title of the page: " + title);
        assert.equal(title, "Wait Conditions");

        const url = new URL(browser.getUrl());
        const actualUrl = url.hostname.toString() + url.pathname.toString();
        assert.equal(actualUrl, "dineshvelhal.github.io/testautomation-playground/expected_conditions.html");
    });

    
    it('Wait for element to be enabled / Wait for an attribute to contain certain text', () =>{

        const disableTriggerButton = $("#enabled_trigger");
        const disableTargetButton = $("#enabled_target");
        const attributeButton = "data-original-title";

        browser.url(urlWaitConditionsPage);

        assert.equal(disableTargetButton.getText(), "DISABLED BUTTON");

        disableTriggerButton.click();
        //browser.pause(3000);
        //let isEnabled = disableTargetButton.isEnabled();
        //console.log(isEnabled);
        //assert.equal(isEnabled, true);
        disableTargetButton.waitForEnabled({ timeout: 5000 });
        assert.equal(disableTargetButton.getText(), "ENABLED BUTTON");
        browser.waitUntil(
            () => disableTargetButton.getAttribute(attributeButton) === 'Yay! I am super active now!',
            {
                timeout: 5000,
                timeoutMsg: 'text of attribute for enabled button was not valid'
            }
        );
    });

    it('Wait for text/value to have specific values', () =>{
        const textTriggerButton = $("#text_value_trigger");
        const statusButton = $("#wait_for_text");
        const statusButtonSpinner = $('#wait_for_text .spinner-grow');

        const field = $("#wait_for_value");

        browser.url(urlWaitConditionsPage);

        textTriggerButton.click();

        browser.waitUntil(
            () => field.getValue() === 'Dennis Ritchie'
            ,
            {
                timeout: 5000,
                timeoutMsg: 'text of field was not valid'
            }
        );

        assert.equal(statusButton.getText(), "SUBMIT");
        assert.equal(statusButtonSpinner.isExisting(), false);
    });

});


