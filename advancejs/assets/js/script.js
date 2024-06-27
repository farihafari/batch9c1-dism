$(document).ready(function () {
    $("#name").on("keyup", function () {
        let name = $(this).val();
        let nameRe = /^[a-z\s]{3,}$/;
        if (!nameRe.test(name)) {
            $(this).css("border", "1px solid red");
            $(this).next('div').html("please enter the valid data at least 3 characters are required in this field").css({
                "color": "red",
                "font-weigth": "bold",
                "margin-top": "2px"

            })
        } else {
            $(this).css("border", "2px solid green");
            $(this).next("div").hide();
        }

    })
    $("#email").on("keyup", function () {
        let email = $(this).val();
        let emailRE = /^[\w]{2,}[@][a-z]{5,9}[.][a-z]{3}$/;
        if (!emailRE.test(email)) {
            $(this).css("border", "1px solid red");
            $(this).next('div').html("please enter the valid email eg. a1@gmail.com").css({
                "color": "red",
                "font-weigth": "bold",
                "margin-top": "2px"

            })
        } else {
            $(this).css("border", "2px solid green");
            $(this).next("div").hide();
        }
    })
})