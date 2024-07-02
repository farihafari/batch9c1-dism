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
    $("#password").on("keyup", function () {
        let password = $(this).val();
        let passwordRE = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[!@#$%&*])[A-Za-z\d!@#$%&*]{8,15}$/;
        if (!passwordRE.test(password)) {
            $(this).css("border", "1px solid red");
            $(this).next('div').html("please enter the strong password at least 8 character are required Abh23@mXXxx").css({
                "color": "red",
                "font-weigth": "bold",
                "margin-top": "2px"

            })
        } else {
            $(this).css("border", "2px solid green");
            $(this).next("div").hide();
        }
    })
    $('#cpassword').on('keyup', function () {
        let cpassword = $(this).val();
        let password = $("#password").val();
        if (cpassword != password) {
            $(this).css("border", "1px solid red");
            $(this).next('div').html("confirm password is not match to the password").css({
                "color": "red",
                "font-weigth": "bold",
                "margin-top": "2px"

            })
        } else {
            $(this).css("border", "2px solid green");
            $(this).next("div").hide();
        }
    })
    $("#number").on("keyup", function () {
        let number = $(this).val();
        let numberRE = /^[\d]{11,11}$/;
        if (!numberRE.test(number)) {
            $(this).css("border", "1px solid red");
            $(this).next('div').html("please enter the valid number 0345XXXXXX").css({
                "color": "red",
                "font-weigth": "bold",
                "margin-top": "2px"

            })
        } else {
            $(this).css("border", "2px solid green");
            $(this).next("div").hide();
        }
    })
    function EmtInput(id) {
        if ($(id).val() == "") {
            $(id).css("border", "1px solid red");
            $(id).next('div').html("this field is required to fill").css({
                "color": "red",
                "font-weigth": "bold",
                "margin-top": "2px"

            })
        }
    }
    $("#register").on('click', function () {
        let name = $("#name").val();
        let nameRe = /^[a-z\s]{3,}$/;
        let email = $("#email").val();
        let emailRE = /^[\w]{2,}[@][a-z]{5,9}[.][a-z]{3}$/;
        let password = $("#password").val();
        let passwordRE = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[!@#$%&*])[A-Za-z\d!@#$%&*]{8,15}$/;
        let cpassword = $("#cpassword").val();
        let number = $("#number").val();
        let numberRE = /^[\d]{11,11}$/;
        if (!(name && email && password && cpassword && number)) {
            EmtInput("#name");
            EmtInput("#email");
            EmtInput("#password");
            EmtInput("#cpassword");
            EmtInput("#number");

        } else if ((!nameRe.test(name)) || (!emailRE.test(email)) || (!passwordRE.test(password) || (!numberRE.test(number))) || cpassword != password) {
            alert("data in valid please follow the pattern of every input")
        }
        else if (name && email && password && cpassword == password && number) {
            if (localStorage.getItem("userDetail") == null) {
                localStorage.setItem("userDetail", '[]')
            }
            let previousData = JSON.parse(localStorage.getItem('userDetail'));
            console.log(previousData);
            let objectData = {
                name: name,
                email: email,
                password: password,
                number: number
            }
            previousData.push(objectData);
            localStorage.setItem("userDetail", JSON.stringify(previousData));
            alert("registered your account successfully");
            location.assign("login.html")
        }
    })
    // let y = [];
    // console.log(y)
    // let x = localStorage.getItem("userDetail");
    // console.log(x)
})