class RegistrationPagePO {

    get pageTitle () {return $(".title")};
    get firstName () {return $("input[name=firstName]")};
    get lastName () {return $("input[name=lastName]")};
    get email () {return $("input[name=email]")};
    get newPassword () {return $("input[type=password]")};
    get createButton () {return $(".button.is-primary")};
}

module.exports = RegistrationPagePO;