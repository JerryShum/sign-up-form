const passwordElement = document.querySelector('#password');
const confirmPasswordElement = document.querySelector('#confirmpassword');
const submitButtonElement = document.querySelector('.btn-submit');


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

