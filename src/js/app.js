
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


//************HIDDEN-INFO***************/
let hideButton = document.querySelector(".auction-about__button");
let hidetext = document.querySelectorAll(".auction-about__text");
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


//********NAVBAR*******/
const tabsButtons = document.querySelectorAll('.tabs__button');
const tabsContents = document.querySelectorAll('.tabs__content');

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


//***********BASKET-POPUP***********/
let basketIcon = document.querySelector(".header__bag");
let basketPopup = document.querySelector(".basket-popup");
if (basketIcon) {
    basketIcon.addEventListener("click", function (e) {
        basketPopup.classList.toggle("active");
    })
}

let basketPopQuantities = document.querySelectorAll(".basket-popup__quantity");
let basketPopLess = document.querySelectorAll(".basket-popup__arrow-less");
let basketPopMore = document.querySelectorAll(".basket-popup__arrow-more");
let basketPopOnePrice = document.querySelectorAll(".basket-popup-one-price");
let basketPopWholePrice = document.querySelector(".basket-popup-whole-price");

if (basketPopLess || basketPopMore) {
    for (let i = 0; i < basketPopLess.length; i++) {
        basketPopLess[i].addEventListener("click", function (e) {
            console.log(1);
            basketPopQuantities[i].classList.add("active");

            if (basketPopQuantities[i].innerHTML > 0) {
                basketPopQuantities[i].innerHTML--;
            }
            if (basketPopQuantities[i].innerHTML === 0) {
                basketPopQuantities[i].innerHTML = 0;
            }

            let wpprice = 0;
            for (let i = 0; i < basketPopQuantities.length; i++) {
                wpprice += basketPopQuantities[i].innerHTML * basketPopOnePrice[i].innerHTML;
            }
            basketPopWholePrice.innerHTML = wpprice;
            wpprice = 0;
            setTimeout(function () {
                basketPopQuantities[i].classList.remove("active");
            }, 6000);
        })
        basketPopMore[i].addEventListener("click", function (e) {
            basketPopQuantities[i].classList.add("active");
            basketPopQuantities[i].innerHTML++;

            let wpprice = 0;
            for (let i = 0; i < basketPopQuantities.length; i++) {
                wpprice += basketPopQuantities[i].innerHTML * basketPopOnePrice[i].innerHTML;
            }
            basketPopWholePrice.innerHTML = wpprice;
            wpprice = 0;

            setTimeout(function () {
                basketPopQuantities[i].classList.remove("active");
            }, 6000);
        })
    }
}

//**********BASKET-TABLES**************/
let basketQuantities = document.querySelectorAll(".quantity");
let basketLess = document.querySelectorAll(".less");
let basketMore = document.querySelectorAll(".more");


let basketOnePrice = document.querySelectorAll(".basket-one-price");
let basketFullPrice = document.querySelectorAll(".basket-full-price");
let basketWholePrice = document.querySelector(".basket-whole-price");


if (basketLess || basketMore) {
    for (let i = 0; i < basketLess.length; i++) {
        basketLess[i].addEventListener("click", function (e) {
            basketQuantities[i].classList.add("active");

            if (basketQuantities[i].innerHTML > 0) {
                basketQuantities[i].innerHTML--;
            }
            if (basketQuantities[i].innerHTML === 0) {
                basketQuantities[i].innerHTML = 0;
            }

            basketFullPrice[i].innerHTML = basketQuantities[i].innerHTML * basketOnePrice[i].innerHTML;

            let wholePrice = 0;
            for (let i = 0; i < basketFullPrice.length; i++) {
                wholePrice += basketFullPrice[i].innerHTML * 1;
                console.log(wholePrice);
            }

            basketWholePrice.innerHTML = wholePrice;

            setTimeout(function () {
                basketQuantities[i].classList.remove("active");
            }, 6000);
        })
        basketMore[i].addEventListener("click", function (e) {
            basketQuantities[i].classList.add("active");
            basketQuantities[i].innerHTML++;
            basketFullPrice[i].innerHTML = basketQuantities[i].innerHTML * basketOnePrice[i].innerHTML;

            let wholePrice = 0;
            for (let i = 0; i < basketFullPrice.length; i++) {
                wholePrice += basketFullPrice[i].innerHTML * 1;
                console.log(wholePrice);
            }

            basketWholePrice.innerHTML = wholePrice;
            setTimeout(function () {
                basketQuantities[i].classList.remove("active");
            }, 6000);
        })
    }
}

//**************POPUPS**************/

let eyes = document.querySelectorAll(".cabinet__eye-container");
let popups = document.querySelectorAll(".cabinet__popup");

if (eyes) {
    for (let i = 0; i < eyes.length; i++) {
        eyes[i].addEventListener("mouseover", function (e) {
            eyes[i].classList.add('active');
            popups[i].classList.add('active');
        })
        eyes[i].addEventListener("mouseout", function (e) {
            eyes[i].classList.remove('active');
            popups[i].classList.remove('active');
        })
    }
}







