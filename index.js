console.log("start work");
var btn = document.getElementById("btn");
var password = document.getElementById("password");
var icon = document.getElementById("icon");


///password show and hide
btn.addEventListener('click', function() {

    if (icon.classList[1] == "fa-eye-slash") {
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    } else {
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
    if (password.type == "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }

})



//////////////////////////////////////////////////////////
console.log("script loaded");

var password = document.getElementById("password");
var passwordValid = document.getElementById("password-vaild");
var parentpasswordValid = document.getElementById("parent-password-vaild");


password.addEventListener('input', function(e) {

    parentpasswordValid.style.display = 'block';
    value = e.target.value;

    pattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
    var vvv = pattern.test(value);
    pattern2 = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
    var vvv2 = pattern2.test(value);

    if (vvv) {
        passwordValid.classList.remove("bg-info");
        passwordValid.classList.remove("bg-danger");
        passwordValid.style.width = "100%";
        passwordValid.classList.add("bg-success");
        passwordValid.innerHTML = "100%";




    } else {

        if (vvv2) {
            passwordValid.classList.remove("bg-success");
            passwordValid.classList.remove("bg-danger");
            passwordValid.style.width = "75%";
            passwordValid.classList.add("bg-info");
            passwordValid.innerHTML = "75%";

        } else {
            passwordValid.classList.remove("bg-info");
            passwordValid.classList.remove("bg-success");
            passwordValid.style.width = "25%";
            passwordValid.classList.add("bg-danger");
            passwordValid.innerHTML = "25%";
        }

    }
});