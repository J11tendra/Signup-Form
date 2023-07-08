// Variables:-
const first = document.querySelector("#first-inp");
const last = document.querySelector("#last-inp");
const email = document.querySelector("#email-inp");
const pwd = document.querySelector("#pwd-inp");
const first_img = document.querySelector("#first-img");
const last_img = document.querySelector("#last-img");
const email_img = document.querySelector("#email-img");
const pwd_img = document.querySelector("#pwd-img");
const first_err = document.querySelector(".first-error");
const last_err = document.querySelector(".last-error");
const email_err = document.querySelector(".email-error");
const pwd_err = document.querySelector(".pwd-error");

first.addEventListener('keyup', function(){

    if (first.value === "") {
        return first_err.style.visibility = "visible", first_img.style.visibility = "visible", first.style.border = "2px solid red";
    }
    else {
        return first_err.style.visibility = "hidden", first_img.style.visibility = "hidden", first.style.border = "1.5px solid hsl(246, 25%, 77%)";
    }
    }
)

first.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        return console.log("Enter key is pressed!")
    }
})


last.addEventListener('keyup', function(){

    if (last.value === "") {
        return last_err.style.visibility = "visible", last_img.style.visibility = "visible", last.style.border = "2px solid red";
    }
    else {
        return last_err.style.visibility = "hidden", last_img.style.visibility = "hidden", last.style.border = "1.5px solid hsl(246, 25%, 77%)";
    }
    }
)

last.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        return console.log("Enter key is pressed!")
    }
})

email.addEventListener('keyup', function(){
    let pattern =  /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.value.match(pattern)) {
        return email_err.style.visibility = "hidden", email_img.style.visibility = "hidden", email.style.border = "1.5px solid hsl(246, 25%, 77%)";
    }
    else {
        return email_err.style.visibility = "visible", email_img.style.visibility = "visible", email.style.border = "2px solid red";
    }
    }
)

email.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        return console.log("Enter key is pressed!");
    }
})

pwd.addEventListener("keyup", function() {
    if (pwd.value === "") {
        return pwd_err.style.visibility = "visible", pwd.style.border = "2px solid red";
    }
    else {
        return pwd_err.style.visibility = "hidden", pwd.style.border = "1.5px solid hsl(246, 25%, 77%)";
    }
})

pwd.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        return console.log("Enter key is pressed!")
    }
})