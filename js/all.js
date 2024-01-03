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

let click_mobile = false
// 漢堡子選單
$(function () {

  function checkWidth() {

    let windowWidth = $(window).width();

    if (windowWidth <= 845) {
      click_mobile = true
      
    } else {
      click_mobile = false
    }
  }

  $('.pd').click(function(e){
    if (click_mobile === true) {
    e.preventDefault()
    }
  })

  $('.main-li-has-menu').click(function () {
    
    if (click_mobile === true) {
      //console.log('click li ol');

      if ($(this).hasClass('moved1')) {
        $(this).removeClass('moved1');

      } else {
        // $('.main-li-has-menu').removeClass('moved1')
        $(this).addClass('moved1');

      }

    }

  });

  checkWidth();

  $(window).resize(function () {
    checkWidth();
  });

});
