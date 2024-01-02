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

  $('#profile').click(function () {
    if (click_mobile === true) {
      // console.log('click profile');
      
      if ($(this).hasClass('moved1')) {
        $(this).removeClass('moved1');
        $('.profile_ol').css('display', 'none');
        $('#profile a').attr('data-i', '▾');
      } else {
        $(this).addClass('moved1');
        $('.profile_ol').css('display', 'block');
        $('#profile a').removeAttr('data-i');
      }

    }

  });

  $('#help').click(function () {
    if (click_mobile === true) {
      // console.log('click help');

      if ($(this).hasClass('moved2')) {
        $(this).removeClass('moved2');
        $('.help_ol').css('display', 'none');
        $('#help a').attr('data-i', '▾');
      } else {
        $(this).addClass('moved2');
        $('.help_ol').css('display', 'block')
        $('#help a').removeAttr('data-i')
      }

    }


  });

  checkWidth();

  $(window).resize(function () {
    checkWidth();
  });

});
