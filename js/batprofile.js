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

$(function () {
  $('.pop_up').click(function () {

    if ($(window).width() <= 450) {
      $('.hidden-content').slideToggle(500);
      $('.pop_up').toggleClass('moved');
    }
  });
});
