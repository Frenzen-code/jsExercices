// selector
const firstName = document.getElementById("firstname");
const age = document.getElementById("age");
const password = document.getElementById("pwd");
const passwordConfirm = document.getElementById("pwd-confirm");
const selectElement = document.getElementById("toggle-darkmode");



// event
firstName.addEventListener("keyup", keyValue); 
age.addEventListener("keyup", ageValue); 
password.addEventListener("keyup", passwordValue);
passwordConfirm.addEventListener("keyup", passwordConfirmValue);
selectElement.addEventListener("change", selectElementValue)



// function
function keyValue() {
    
    document.querySelector("#display-firstname").textContent = firstName.value;
}

function ageValue() {
    if (age.value >= 18) {
        document.querySelector("#a-hard-truth").style.visibility = "visible";
    } else {
        document.querySelector("#a-hard-truth").style.visibility = "hidden";

    }
}

function passwordValue() {
    console.log(password.value.length);
    if (password.value.length < 6)  {
        password.style.backgroundColor = "red";
    } else {
        password.style.backgroundColor = "white";

    }

}

function passwordConfirmValue() {
    if (password.value != passwordConfirm.value) {
        password.style.backgroundColor = "red";
        passwordConfirm.style.backgroundColor = "red";
    } else {
        password.style.backgroundColor = "white";
        passwordConfirm.style.backgroundColor = "white";
    }
}

function selectElementValue() { 
    if (selectElement.value == "dark") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
}