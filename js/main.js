const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});

menuBtn = document.querySelector('.header__menu_button');
menuList = document.querySelector('.header__menu_list');
menuBtnItems = document.querySelectorAll('.button__item');
menuBtnActive = false;

console.log(menuBtnItems);
menuBtn.addEventListener('click', function() {
    // console.log(menuBtn);
    if (menuBtnActive) {
        menuList.style.display = '';
        menuBtnActive = false;
        menuBtnItems[0].classList.remove('button__item_1');
        menuBtnItems[1].classList.remove('button__item_2');
        menuBtnItems[2].classList.remove('button__item_3');

    } else {
        menuList.style.display = 'flex';
        menuBtnActive = true;
        menuBtnItems[0].classList.add('button__item_1');
        menuBtnItems[1].classList.add('button__item_2');
        menuBtnItems[2].classList.add('button__item_3');
    }

})