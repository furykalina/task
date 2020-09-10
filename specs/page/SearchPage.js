const SearchPagePO = require("./SearchPagePO");
const page = new SearchPagePO();


class SearchPage {

    waitForPageLoaded(){

        page.navigationBarLogo.waitForExist({ timeout: 5000 });

        return this;
    }

    openNavigationBarMenu() {
        page.navigationBarMenu.waitForDisplayed(5000);
        page.navigationBarMenu.moveTo();
        expect(page.dropdownList).toBeVisible();

        return this;
    }

    openMyLists() {
        page.menuMyLinks.waitForDisplayed(5000);
        page.menuMyLinks.click();

    }

    waitForLoader() {
        page.loader.waitForDisplayed(5000);
        page.loader.waitForDisplayed(5000, true);
    }


}

module.exports = SearchPage;