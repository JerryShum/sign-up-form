const passwordElement = document.querySelector('#password');
const confirmPasswordElement = document.querySelector('#confirmpassword');
const submitButtonElement = document.querySelector('.btn-submit');
const formElement = document.querySelector('#formElement')


function validatePassword() {
    let pass = passwordElement.value;
    let confirmPass = confirmPasswordElement.value;

    if (pass != confirmPass) {
        confirmPasswordElement.classList.remove('valid');
        confirmPasswordElement.classList.add('invalid');
    }

    if (pass === confirmPass) {
        confirmPasswordElement.classList.add('valid');
        confirmPasswordElement.classList.remove('invalid');
    }

}
confirmPasswordElement.addEventListener("keyup", validatePassword);

function submitButton() {

    if (confirmPasswordElement.classList.contains('invalid')) {
        alert("Your passwords do not match. Please try again!")
    } else {
        // formElement.submit();
        console.log("Submit attempted!");
    }
}

submitButtonElement.addEventListener('click', submitButton);

