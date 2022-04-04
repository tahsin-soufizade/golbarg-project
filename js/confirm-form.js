
// VALIDATION REGISTER INPUTS
const formInput = document.querySelector('.form-container');
const numberInput = document.querySelector('.numberInput');

numberInput.addEventListener('keyup', numberValidation);

// number VALIDATION
function numberValidation() {
    const currentValue = numberInput.value;
    if (isNaN(currentValue) || currentValue.length < 5) {
        clearStatusClass(numberInput);
        numberInput.classList.add('wrong-input');
        return false;
    } else {
        clearStatusClass(numberInput);
        numberInput.classList.add('correct-input');
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

    // IF NUMBER VALIDATION WAS FALSE
    if (!numberValidation()) {
        e.preventDefault();
        alertMessage.innerHTML = 'کد را به درستی وارد کنید!';
        alertContainer.classList.add('showAlertMessage');
    }
});