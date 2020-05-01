//For this Validation form, I ommitted the required attributes in each HTML input and added that functionality within JavaScript. It is redundant, but wanted a response when the user focus is outside of the input, rather than when the form is submitted.

//Variables for form elements
const form = document.getElementById('form');
const firstName = document.getElementById('First');
const lastName = document.getElementById('Last');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordCheck = document.getElementById('reenter');

//Variables for Error Messages to be sent to
const emailError = document.getElementById('error-email');
const passwordError = document.getElementById('error-password');
const reenterError = document.getElementById('error-reenter');
const inputs = document.querySelectorAll('input');

function checkLength(name){
    //First Name Input
    if(name.value === ''){
        error(name);
    }else{
        success(name);
    }
}
//Checks to see if the input conforms to the proper email format
function checkEmail(){
    let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(emailFormat)){
        success(email);
    }else{
        error(email);
    }
}
//Checks to see if password follows the password parameters
let passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
function checkPassword(){
    if(password.value.length < 6 || password.value.length > 20 || !password.value.match(passwordFormat)){
        error(password);
        passwordError.innerHTML = 'Password must be between 6 and 20 characters, contain at least one uppercase letter, and atleast one number.';
    }else{
        passwordError.innerHTML = '';
        success(password);
    }
}
//Checks to see if the password and re-entered password are the same
function checkPasswordCheck(){
    if(passwordCheck.value.length < 6 || passwordCheck.value.length > 20){
        error(passwordCheck);
    }else if(password.value !== passwordCheck.value){
        error(passwordCheck);
        reenterError.innerHTML = 'Passwords are not the same. Please make sure both passwords are the same.';
    }else{
        reenterError.innerHTML = '';
        success(passwordCheck);
    }
}

//Reveals password to user 
function revealPassword(e){
    if(e.type === 'password'){
        e.type = 'text';
    }else{
        e.type = 'password';
    }
}
//classes to add and remove border styling to indicate errors and successes
function error(e){
    e.classList.remove('success');
    e.classList.add('error');
}

function success(e){
    e.classList.remove('error');
    e.classList.add('success');
}
//If any input contains the error class, the form will not be submitted
form.addEventListener('submit', (e) => {
    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].className === 'error' || inputs[i].value === ''){
            e.preventDefault();
            inputs[i].classList.add('error');
        }
    }
});