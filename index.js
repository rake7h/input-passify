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