class LoginPagePO {

    get pageTitle () {return $(".title")};
    get email () {return $("input[name=email]")};
    get password () {return $("input[type=password]")};
    get createNewUser () {return $("[href='/signup']")};
    get loginButton () {return $(".login-footer .button")};
    get registrationMsg () {return $(".notices.is-top div")};
    get validationMsg () {return $(".is-danger div")};
}

module.exports = LoginPagePO;