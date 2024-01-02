// 最新消息輪播
const swiper = new Swiper('.swiper', {
  
  direction: 'horizontal',
  loop: true,

  // 分頁圓點
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 5000,
  },

});

//滑鼠懸停在最新消息時 停止滑動
swiper.el.onmouseover = function () {
  swiper.autoplay.stop();
}

swiper.el.onmouseleave = function () {
  swiper.autoplay.start();
}

var swiper2 = new Swiper('.swiper-container', {
  slidesPerView: 2.6,
  spaceBetween: 40,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// 活動資訊輪播 監聽視窗寬度變化
window.addEventListener('resize', function() {
  var windowWidth = window.innerWidth;

  //RWD<=1000
  if (windowWidth <= 1000) {
    swiper2.params.spaceBetween = 30;
    swiper2.update(); 
  }
  //RWD<=900
  if (windowWidth <= 900) {
    swiper2.params.spaceBetween = 17;
    swiper2.update(); 
  }

  //RWD<=580
  if (windowWidth <= 580) {
    swiper2.params.slidesPerView = 2; 
    swiper2.update(); 
  } else {
    swiper2.params.slidesPerView = 2.6;
    swiper2.update(); 
  }
});

// 在文件載入後觸發一次 resize 事件
window.onload = function() {
  var event = new Event('resize');
  window.dispatchEvent(event);
};


