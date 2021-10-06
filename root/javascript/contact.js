const nameInput = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const subjectInput = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const messageInput = document.querySelector("#message");
const messageError = document.querySelector("#message-error");
const submit = document.querySelector("#submit");

function lengthCheck(input, desiredLength){
    if(input >= desiredLength){
        return true;
    } else {
        return false;
    }
}

function emailCheck(input){
    const regEx = /\S+@+\S+\.\S+/;
    const isValid = regEx.test(input);
    return isValid;
}

function nameCheck(){
    if(lengthCheck(nameInput.value.trim().length, 1)){
        nameError.style.visibility = "hidden";
    } else {
        nameError.style.visibility = "unset";
    }
}

function checkEmailValid(){
    if(emailCheck(emailInput.value)){
        emailError.style.visibility = "hidden";
    } else {
        emailError.style.visibility = "unset";
    }
}

function subjectCheck(){
    if(lengthCheck(subjectInput.value.trim().length, 1)){
        subjectError.style.visibility = "hidden";
    } else {
        subjectError.style.visibility = "unset";
    }
}

function messageCheck(){
    if(lengthCheck(messageInput.value.trim().length, 20)){
        messageError.style.visibility = "hidden";
    } else {
        messageError.style.visibility = "unset";
    }
}

nameInput.onblur = nameCheck;
emailInput.onblur = checkEmailValid;
subjectInput.onblur = subjectCheck;
messageInput.onblur = messageCheck;

messageInput.onkeyup = function(){
    if(lengthCheck(messageInput.value.trim().length, 20)){
        messageError.style.visibility = "hidden";
    }
}

function checkFormComplete(){
    if((lengthCheck(nameInput.value.trim().length, 1)) && (emailCheck(emailInput.value))&&(lengthCheck(subject.value.trim().length, 1))&&(lengthCheck(message.value.trim().length, 20))){
        window.location = "contact.html#overlay";    
    } else {
        nameCheck();
        checkEmailValid();
        subjectCheck();
        messageCheck();
    }
}

form.onsubmit = function(){
    event.preventDefault();
    checkFormComplete();
}


