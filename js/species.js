// 燈箱
$(function () {

let lightbox_el = $('#lightbox');
let pop_up = $('.pop_up');

pop_up.click(function (e) {
  lightbox_el.removeClass('none');
  e.preventDefault();
});

$('.x2').click(function () {
  lightbox_el.addClass('none');
});

lightbox_el.click(function () {
  $(this).addClass('none');
});

lightbox_el.find('article').click(function (e) {
  e.stopPropagation();
});

});

// 點選跳轉到指定區域

let linkToMiddle = document.querySelector('a[href="#middle"]');

linkToMiddle.addEventListener('click', function (e) {
  e.preventDefault(); // 阻止默認的錨點跳轉行為

  let middleElement = document.getElementById('middle');
  middleElement.scrollIntoView({ behavior: 'smooth' }); // 平滑滾動到指定元素
});


// RWD <=900時 加入內容
$(function () {

  function checkWidth() {
    let windowWidth = $(window).width();

    if (windowWidth <= 900) {
      $('.map_list').html(
        `
        <div class="map_list_title">
          <h2>世界的蝙蝠</h2>
        </div>
  
        <ul>
        <li>
          <img src="./img/hoarybat.jpg" alt="hoary bat">
          <h4>灰蝠<br>(Lasiurus cinereus)</h4>
        </li>

        <li class="pop_upr">
          <img src="./img/whitebat.jpg" alt="white bat">
          <h4>宏都拉斯白蝠<br>(Ectophylla alba)</h4>
        </li>

        <li>
          <img src="./img/tentmakingbat.jpg" alt="tent-making bat">
          <h4>築帳蝠<br>(Uroderma bilobatum)</h4>
        </li>

        <li>
          <img src="./img/bat_profile5.jpg" alt="common vampire bat">
          <h4>吸血蝠<br>(Desmodus rotundus)</h4>
        </li>

        <li>
          <img src="./img/ghostbat.jpg" alt="ghost bat">
          <h4>假吸血蝠<br>(Macroderma gigas)</h4>
        </li>

        <li>
          <img src="./img/giantflyingfox.jpg" alt="giant golden-crowned flying fox">
          <h4>菲律賓果蝠<br>(Acerodon jubatus)</h4>
        </li>

    </ul>`
      );
    } else {
      $('.map_list').html('');
    }

    // 燈箱 RWD<=900
    let lightbox_el = $('#lightbox');
    let pop_up = $('.pop_upr');
  
    pop_up.click(function (e) {
      lightbox_el.removeClass('none');
      e.preventDefault();
    });
    
    $('.x2').click(function () {
      lightbox_el.addClass('none');
    });
    
    lightbox_el.click(function () {
      $(this).addClass('none');
    });
    
    lightbox_el.find('article').click(function (e) {
      e.stopPropagation();
    });
  
  }

  checkWidth();

  $(window).resize(function () {
    checkWidth();
  });
});

