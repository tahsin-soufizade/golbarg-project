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

//--- SHOW SEARCH FORM
const headerSearchButton = document.querySelector('.header-search-btn');
const headerSearchForm = document.querySelector('.search-form');

headerSearchButton.addEventListener('click', showSearchForm);

function showSearchForm() {
    headerSearchForm.classList.add('showSearchForm');
}

//--- HIDE SEARCH FORM
const closeSearchButton = document.querySelector('.search-close-btn');

closeSearchButton.addEventListener('click', hideSearchForm);

function hideSearchForm() {
    headerSearchForm.classList.remove('showSearchForm');
}



// REPLACE BUY ICON WITH CHOPPING CART ICON
const addBasketButtons = document.querySelectorAll('.add-basket-btn');

addBasketButtons.forEach(btn => {
    btn.addEventListener('click', buyProduct);
});

function buyProduct(e) {
    const currentButton = e.target;

    if (currentButton.classList.contains('add-basket-btn')) {
        currentButton.classList.add('buyProduct');
    }
}