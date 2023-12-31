//燈箱
let lightbox_el = document.getElementById("lightbox");

let pop_up = document.getElementsByClassName("pop_up")[0];
pop_up.addEventListener("click", function () {
  lightbox_el.classList.remove("none");
});

let pop_up_close = document.getElementsByClassName("fa-solid fa-xmark 2")[0];
pop_up_close.addEventListener("click", function () {
  lightbox_el.classList.add("none");
});


lightbox_el.addEventListener("click", function () {
  this.classList.add("none");
});

lightbox_el.querySelector("article").addEventListener("click", function (e) {
  e.stopPropagation();
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


$(function () {
  $('.pop_up').click(function () {

    if ($(window).width() <= 450) {
      $('.hidden-content').slideToggle(500);
      $('.pop_up').toggleClass('moved');
    }
  });
});
