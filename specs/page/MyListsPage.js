const MyListsPagePO = require("./MyListsPagePO");
const page = new MyListsPagePO();

class MyListsPage {

    createNewList(){
        page.newListButton.waitForDisplayed(10000);
        page.newListButton.click();

        return this;
    }

    setListName(value){
        page.listName.setValue(value);

        return this;
    }

    saveList(){
        page.saveButton.click();

        return this;
    }

    getListObjectsCount(){
        page.newListButton.waitForDisplayed(10000);

        return page.listObjects.length;
    }

    getListObjectsTitle(index){
        page.newListButton.waitForDisplayed(10000);

        return page.listObjectsTitle[index].getText();
    }

    deleteList(index){
        page.newListButton.waitForDisplayed(10000);

        page.listObjectsTitle[index].deleteButton.click();
        page.listObjectsTitle[index].deleteSubmitButton.click();
    }

    waitForLoader() {
        page.loader.waitForDisplayed(5000);
        page.loader.waitForDisplayed(5000, true);
    }

}

module.exports = MyListsPage;
