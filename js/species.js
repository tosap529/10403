// 燈箱

let lightbox_el = document.getElementById('lightbox');

let pop_up = document.getElementsByClassName('pop_up')[0];
pop_up.addEventListener('click', function(){
  lightbox_el.classList.remove('none');
});

let pop_up_close = document.getElementsByClassName('fa-solid fa-xmark')[0];
pop_up_close.addEventListener('click', function(){
  lightbox_el.classList.add('none');
});


lightbox_el.addEventListener('click', function(){
  this.classList.add('none');
});

lightbox_el.querySelector('article').addEventListener('click', function(e){
  e.stopPropagation();
});

// 點選跳轉

let linkToMiddle = document.querySelector('a[href="#middle"]');

linkToMiddle.addEventListener('click', function(e) {
  e.preventDefault(); // 阻止默認的錨點跳轉行為

  let middleElement = document.getElementById('middle');
  middleElement.scrollIntoView({ behavior: 'smooth' }); // 平滑滾動到指定元素
});