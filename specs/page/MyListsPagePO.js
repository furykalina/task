class MyListsPagePO {

    get newListButton () {return $("[href='/my-lists/add']")};
    get listName () {return $("#list-name")};
    get saveButton () {return $(".button.is-success")};
    get deleteButton () {return $('div .add-list + ul li .button.is-danger')};
    get deleteSubmitButton () {return $('.modal-content .is-danger')};
    get listObjects () {return $$('div .add-list + ul li')};
    get listObjectsTitle () {return $$('div .add-list + ul li .title')};
    get loader () {return $("#preloader")};
}

module.exports = MyListsPagePO;