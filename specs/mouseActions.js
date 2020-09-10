const assert = require('assert');
const {URL} = require('url');

describe('Expected conditions', () => {
    const urlMain = 'https://dineshvelhal.github.io/testautomation-playground/index.html';
    const urlMousePage = 'https://dineshvelhal.github.io/testautomation-playground/mouse_events.html';


    it('User can open Mouse Events page', () =>{
        const mouseEventsPageButton = $("[href='mouse_events.html']");

        browser.url(urlMain);

        mouseEventsPageButton.click();

        const title = browser.getTitle();
        console.log("Title of the page: " + title);
        assert.equal(title, "Mouse Actions");

        const url = new URL(browser.getUrl());
        const actualUrl = url.hostname.toString() + url.pathname.toString();
        assert.equal(actualUrl, "dineshvelhal.github.io/testautomation-playground/mouse_events.html");
    });

    it('User can click mouse', () =>{
        const clickArea = $('#click_area');
        const clickStatus = $('#click_type');

        browser.url(urlMousePage);

        // clickArea.click();
        // assert.equal(clickStatus.getText(), "Click");

        clickArea.click({ button: 2});
        assert.equal(clickStatus.getText(), "Right-Click");

        // clickArea.doubleClick();
        // browser.pause(2000);
        // assert.equal(clickStatus.getText(), "Double-Click");
    });

    it('User can hover mouse over dropdown list', () =>{
        const dropdownButton = $('.dropdown');
        const dropdownList = $$('.dropdown-content p');

        browser.url(urlMousePage);

        dropdownList[0].click();
    });

    it('User can drag and drop', () =>{
        const drag = $('#drag_source');
        const drop = $('#drop_target');

        browser.url(urlMousePage);

        drag.scrollIntoView();

        drag.dragAndDrop(drop);
    });
});
