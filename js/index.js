// 輪播
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

// 輪播監聽視窗寬度變化
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

// 回到頁首
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

}


// 漢堡主選單
$(function () {

  //出現選單
  $('header .fa-bars').click(function () {

    $('header i+i+ul').css('left', '0');

    $('header .fa-bars').css('display', 'none')
    $('header .fa-xmark').css('display', 'inline')

  })

  //隱藏選單
  $('header .fa-xmark').click(function () {

    $('header i+i+ul').css('left', '-80vw');

    $('header .fa-bars').css('display', 'inline')
    $('header .fa-xmark').css('display', 'none')

  })

});

// 漢堡子選單
$(function () {

  function checkWidth() {
    let windowWidth = $(window).width();

    if (windowWidth <= 830) {

      $('#profile').click(function () {
        
        $('#help a').attr('data-i', '▾')

        if ($(this).hasClass('expanded')) {
          $(this).removeClass('expanded').css('marginBottom', '');
          $('.profile_ol').css('display', 'none')
          $('#profile a').attr('data-i', '▾')
        } else {
          $(this).addClass('expanded').css('marginBottom', '120px');
          $('.profile_ol').css('display', 'block')
          $('#profile a').removeAttr('data-i')
        }

        if ($('#help').hasClass('expanded')) {
          $('#help').removeClass('expanded').css('marginBottom', '');
          $('.help_ol').css('display', 'none');
        }

      });

      $('#help').click(function () {
        
        $('#profile a').attr('data-i', '▾')

        if ($(this).hasClass('expanded')) {
          $(this).removeClass('expanded').css('marginBottom', '');
          $('.help_ol').css('display', 'none')
          $('#help a').attr('data-i', '▾')
        } else {
          $(this).addClass('expanded').css('marginBottom', '80px');
          $('.help_ol').css('display', 'block')
          $('#help a').removeAttr('data-i')
        }

        if ($('#profile').hasClass('expanded')) {
          $('#profile').removeClass('expanded').css('marginBottom', '');
          $('.profile_ol').css('display', 'none');
        }

      });

    } else {
      $('#profile').off('click');
      $('#help').off('click');
    }
  }

  checkWidth();

  $(window).resize(function () {
    checkWidth();
  });
});


