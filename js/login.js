const menuBurgerButton = document.querySelector('.menu-burger-btn');
const categoryMenuList = document.querySelector('.category-mobile-list');

// SHOW HIDE NAVBAR MENU
menuBurgerButton.addEventListener('click', toggleMenuList);

function toggleMenuList() {
    if (categoryMenuList.classList.contains('showCategoryMenu')) {
        categoryMenuList.classList.remove('showCategoryMenu');
        //     change burger sign to times sign
        menuBurgerButton.firstChild.classList.replace('fa-times', 'fa-bars');

    } else {
        categoryMenuList.classList.add('showCategoryMenu');
        //     change burger times sign to burger sign
        menuBurgerButton.firstChild.classList.replace('fa-bars', 'fa-times');
    }
}

// SHOW UNDER ITEMS OF CATEGORY
const categoryItem = document.querySelectorAll('.category-item');

// WHEN CLICK (TOGGLE)
categoryItem.forEach(item => {
    item.addEventListener('click', (e) => {
        const currentList = [...e.target.parentElement.children].filter(list => {
            return list.classList.contains('inner-category-list');
        });
        if (currentList[0]) {
            currentList[0].classList.toggle('showUnderMenu');
        }
    })

    // SHOW UNDER LIST WHEN MOUSEENTER
    if (window.innerWidth > 888) {
        item.addEventListener('mouseenter', (e) => {
            const currentList = [...e.target.children].filter(list => {
                return list.classList.contains('inner-category-list');
            });
            if (currentList[0]) {
                currentList[0].classList.add('showUnderMenu');
            }
        });
    }

    // HIDE UNDER LIST WHEN MOUSELEAVE
    item.addEventListener('mouseleave', (e) => {
        const currentList = [...e.target.children].filter(list => {
            return list.classList.contains('inner-category-list');
        });
        if (currentList[0]) {
            currentList[0].classList.remove('showUnderMenu');
        }
    });
});


// VALIDATION REGISTER INPUTS
const formInput = document.querySelector('.form-container');
const registerInputs = document.querySelectorAll('.form-input');

registerInputs.forEach(input => {
    input.addEventListener('keyup', (e) => {
        const currentInput = e.target;

        switch (currentInput.dataset.type) {
            case 'phone': {
                phoneValidation();
                break;
            }
            case 'password': {
                passValidation();
                break;
            }
            default:
                break;
        }
    });
});

// PHONE VALIDATION
function phoneValidation() {
    const phoneInput = document.querySelector('.phoneInput')
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

// PASSWORD VALIDATION
function passValidation() {
    const passwordInput = document.querySelector('.passwordInput')
    const currentValue = passwordInput.value;
    if (currentValue.length < 6) {
        clearStatusClass(passwordInput);
        passwordInput.classList.add('wrong-input');
        return false;
    } else {
        clearStatusClass(passwordInput);
        passwordInput.classList.add('correct-input');
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
    } else

        // IF PASSWORD VALIDATION WAS FALSE
    if (!passValidation()) {
        e.preventDefault();
        alertMessage.innerHTML = 'لطفا رمز عبور خود را به درستی وارد کنید!';
        alertContainer.classList.add('showAlertMessage');
    }
});