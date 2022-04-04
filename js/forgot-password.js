
// VALIDATION REGISTER INPUTS
const formInput = document.querySelector('.form-container');
const phoneInput = document.querySelector('.phoneInput');

phoneInput.addEventListener('keyup', phoneValidation);

// PHONE VALIDATION
function phoneValidation() {
    const numberRegex = /^09\d{2}\s*?\d{3}\s*?\d{4}$/;
    const currentValue = phoneInput.value;
    if (!numberRegex.test(currentValue)) {
        clearStatusClass(phoneInput);
        phoneInput.classList.add('wrong-input');
        return false;
    } else {
        clearStatusClass(phoneInput);
        phoneInput.classList.add('correct-input');
        return true;
    }
}

// CLEAR CORRECT AND WRONG CLASS
function clearStatusClass(input) {
    input.classList.remove('wrong-input');
    input.classList.remove('correct-input');
}

// SUBMITATION
formInput.addEventListener('submit', (e) => {
    const alertContainer = document.querySelector('.alert-container');
    const alertMessage = document.querySelector('.alert-text');

    // IF PHONE VALIDATION WAS FALSE
    if (!phoneValidation()) {
        e.preventDefault();
        alertMessage.innerHTML = 'شماره موبایل شما نامعتبر میباشد!';
        alertContainer.classList.add('showAlertMessage');
    }
});