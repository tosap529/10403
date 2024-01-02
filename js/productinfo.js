// 商品照片輪播
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    effect: 'coverflow',

});

// 購物車 + - 數量
document.addEventListener('DOMContentLoaded', function () {
    const minusBtn = document.querySelector('.minus');
    const plusBtn = document.querySelector('.plus');
    const quantityInput = document.querySelector('.quantity-input');

    // -
    minusBtn.addEventListener('click', function () {
        let quantity = parseInt(quantityInput.value);
        if (quantity > 1) {
            quantityInput.value = quantity - 1;
        }
    });

    // +
    plusBtn.addEventListener('click', function () {
        let quantity = parseInt(quantityInput.value);
        if (quantity < 20) {
            quantityInput.value = quantity + 1;
        }
    });
});
