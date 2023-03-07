
//********SWIPER**********/

import Swiper, { Navigation } from 'swiper';
// import Swiper and modules styles

const swiperCatalogProducer = new Swiper('.catalog-page-producer__slider', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".catalog-page-producer-next",
        prevEl: ".catalog-page-producer-prev",
    },
});

const mainSwiper = new Swiper('.main-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
        // when window width is >= 320px
        200: {
            slidesPerView: 1.3,
            spaceBetween: 25,
            loop:false,
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        769: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        1025: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});


//**********************LAZY-LOAD******************************/
let lazyImages = document.querySelectorAll(".lazy");
let windowHeight = document.documentElement.clientHeight;
let lazyImagesPositions = [];
const currentScrollPosition = window.pageYOffset;
// const elementOffsetTop = document.getElementById(elementID).offsetTop
lazyImages.forEach(img => {
    lazyImagesPositions.push(img.offsetTop);
});

function showScrollTop() {
    const currentScrollPosition = window.pageYOffset;

    for (let i = 0; i <= lazyImagesPositions.length; i++) {
        if (currentScrollPosition + 1000 > lazyImagesPositions[i]) {
            delete lazyImagesPositions[i];
            lazyImages[i].classList.add('_active');
        }
    }

}

window.addEventListener('scroll', showScrollTop)






//********MENU_BURGER**********/
const iconMenu = document.querySelector('.menu-icon');
const menuBody = document.querySelector('.header__links');
if (iconMenu && menuBody) {
    const menuButtons = document.querySelector('.header__buttons');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        menuButtons.classList.toggle('_active');
    });
}






//*********DROP-DOWN*******/

const dropdownButton = document.querySelectorAll('.select__header');
if (dropdownButton) {
    const arrow = document.querySelectorAll('.select__arrow');
    const panel = document.querySelectorAll('.select__body');
    const container = document.querySelectorAll('.select');
    for (let i = 0; i < dropdownButton.length; i++) {
        dropdownButton[i].addEventListener("click", function (e) {
            if (arrow[i].classList.contains('active')) {
                arrow[i].classList.remove('active');
                panel[i].classList.remove('active');
                container[i].classList.remove('active');
            } else {
                arrow[i].classList.add('active');
                panel[i].classList.add('active');
                container[i].classList.add('active');
            }
        })
        panel[i].addEventListener("click", function (e) {
            if (arrow[i].classList.contains('active')) {
                arrow[i].classList.remove('active');
                panel[i].classList.remove('active');
                container[i].classList.remove('active');
            } else {
                arrow[i].classList.add('active');
                panel[i].classList.add('active');
                container[i].classList.add('active');
            }
        })
    };

    const selectItem = document.querySelectorAll('.select__item');

    if (selectItem) {
        selectItem.forEach(item => {
            item.addEventListener('click', selectChoose)
        });
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select-current');
        currentText.innerText = text;
        this.closest('.select__body').classList.remove('active');
        // this.closest('.dropdown-container').classList.remove('active');
        this.closest('.select__arrow').classList.remove('active');
        arrow.forEach(item => {
            item.classList.remove('active');
        })
    }

}

//********NAVBAR*******/
const tabsButtons = document.querySelectorAll('.payment__button');
const tabsContents = document.querySelectorAll('.payment__nav-part');

const checkboxes = document.querySelectorAll('.checkbox');
if (checkboxes) {
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener("click", function (e) {
            checkboxes[i].classList.toggle('active');
        })
    }
}

if (tabsButtons) {
    for (let i = 0; i < tabsButtons.length; i++) {
        tabsButtons[i].addEventListener("click", function (e) {
            tabsButtons.forEach(item =>
                item.classList.remove('active')
            );
            tabsContents.forEach(item =>
                item.classList.remove('active')
            );

            tabsButtons[i].classList.add('active');
            tabsContents[i].classList.add('active');
        })
    }
}

//************HIDDEN-INFO***************/
let hideButton = document.querySelector(".auction-about__button");
let hidetext = document.querySelectorAll(".auction-about__text");
if(hideButton){
    hideButton.addEventListener("click", function (e) {
        hidetext.forEach(item => {
            item.classList.toggle('hidden');
        })
        if (hidetext[0].classList.contains('hidden')) {
            hideButton.innerHTML = "<span>Show info</span>";
        }else{
            hideButton.innerHTML = "<span>Hide info</span>";
        }
    })
}


//**********COLOR-PICKER***********/
let colors = document.querySelectorAll('.custom-form__color');
for (let i = 0; i < colors.length; i++){
    colors[i].addEventListener("click", function (e) { 
        colors.forEach(item => {
            item.classList.remove('active');
        })
        colors[i].classList.add('active');
    })
}

//**********DROPDOWN-ORDERING********** */
let radioOrderingsWContent = document.querySelectorAll('.w-content'); 
let radioContent = document.querySelectorAll('.ordering__chosen-content'); 

let radioOrderingsEmpty = document.querySelectorAll('.empty');

if (radioOrderingsWContent) {
    for (let i = 0; i < radioOrderingsWContent.length; i++) {
        radioOrderingsWContent[i].addEventListener("click", function (e) {
            radioOrderingsWContent.forEach(item =>
                item.classList.remove('active')
            );
            radioContent.forEach(item =>
                item.classList.remove('active')
            );

            radioOrderingsWContent[i].classList.add('active');
            radioContent[i].classList.add('active');
        })
    }
    for (let i = 0; i < radioOrderingsEmpty.length; i++) {
        radioOrderingsEmpty[i].addEventListener("click", function (e) {
            radioOrderingsEmpty.forEach(item =>
                item.classList.remove('active')
            );

            radioOrderingsEmpty[i].classList.add('active');
        })
    }
}
//***********PAGE-DEFINER*********** */

const pageDefiner = document.querySelector(".page-definer");
const headerLinks = document.querySelectorAll(".header__link");
if (pageDefiner.classList.contains("index")) {
    headerLinks[0].classList.toggle("_active");
};
if (pageDefiner.classList.contains("about")) {
    headerLinks[1].classList.toggle("_active");
};
if (pageDefiner.classList.contains("payment")) {
    headerLinks[2].classList.toggle("_active");
};
if (pageDefiner.classList.contains("_for-clients")) {
    headerLinks[3].classList.toggle("_active");
};
if (pageDefiner.classList.contains("news") || pageDefiner.classList.contains("one-news")) {
    headerLinks[4].classList.toggle("_active");
};
if (pageDefiner.classList.contains("contacts")) {
    headerLinks[5].classList.toggle("_active");
};


//**************POPUPS**************/

let popupTriggers = document.querySelectorAll(".popup-button");
let popupOff = document.querySelector(".popup-off");
let popup = document.querySelector(".popup");

if (popupTriggers) {
    for (let i = 0; i < popupTriggers.length; i++) {
        popupTriggers[i].addEventListener("click", function (e) {
            popup.classList.add('active');
        })
        popupOff.addEventListener("click", function (e) {
            popup.classList.remove('active');
        })
    }
}







