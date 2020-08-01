class SearchPagePO {

    get navigationBarLogo () {return $(".navbar-item")};
    get navigationBarMenu () {return $(".navbar-dropdown-menu")};
    get dropdownList () {return $('.navbar-dropdown')};
    get menuMyLinks () {return $("[href='/my-lists']")};
    get loader () {return $("#preloader")};
}

module.exports = SearchPagePO;