const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cnfPassword = document.getElementById("cnf-password");
const submit = document.getElementById("btn");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
})

let validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cnfPasswordValue = cnfPassword.value.trim();

    if(usernameValue == ''){
        setError(username, "Username Required")
    }
    else{
        setSuccess(username, "verified")
    }

    if(emailValue == ''){
        setError(email, "Email Required")
    }
    else if(!isEmailValid(emailValue)){
        setError(email, "Email not valid")
    }
    else{
        setSuccess(email, "valid")
    }

    if(passwordValue == ''){
        setError(password, "Password Required")
    }
    else if(passwordValue.length < 8){
        setError(password, "must be atleast 8 characters")

    }
    else{
        setSuccess(password, "verified")
    }

    if(cnfPasswordValue !== passwordValue || cnfPasswordValue == ""){
        setError(cnfPassword, "Password does not match")
    }
    else{
        setSuccess(cnfPassword, "Matched")
    }

}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText = message;

    inputControl.classList.add("error")
    inputControl.classList.remove("success")
}

const setSuccess = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText = message;

    inputControl.classList.remove("error")
    inputControl.classList.add("success")
}

const isEmailValid = (e) => {
    const flags = "gm";
    const pattern = "[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}"
    const regexPattern = new RegExp(pattern, flags);
    
    const result = e.match(regexPattern);
    return result
}