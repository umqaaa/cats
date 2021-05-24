'use strict';


//стрелка
window.onscroll = function() {
    var scrollElem = document.querySelector(".pageup");
    if (document.body.scrollTop < document.documentElement.clientHeight) {
       scrollElem.style.opacity = "1";
    } else {
        scrollElem.style.opacity = "0";
    }
};
var timeOut;
function goUp() {
   var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
   if(top > 0) {
      window.scrollBy(0,-60);
      timeOut = setTimeout('goUp()',20);
   } else clearTimeout(timeOut);
}

//кнопки
var btnClick = document.querySelector(".card__btn"); 

   
btnClick.onclick = function() {
    btnClick.classList.toggle('black-btn');
    if(this.innerHTML == "Купить")
    {
    this.innerHTML = "Продан";
    return;
    }
    else this.innerHTML = "Купить";
};
//валидация
function ValidMail() {
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var output = document.getElementById('message');
    var myMail = document.querySelector('.footer__email').value;
    var valid = re.test(myMail);
    if (valid) output = 'Адрес эл. почты введен правильно!';
    else output = 'Адрес электронной почты введен неправильно!';
    document.getElementById('message').innerHTML = output;
    return valid;
}

//like
var like = document.querySelector('.card__img__like');
var modalOpen = document.querySelector('[data-modal]');
var modalCloseBtn = document.querySelector('[data-close]');

    like.addEventListener('click', () => {
        like.classList.toggle('opacity');
        modalOpen.style.display='block';

    });

    modalCloseBtn.addEventListener('click', () => {
        modalOpen.style.display='none'; 
    });
// сортировка 
document.querySelector('.sort__arrow').addEventListener("click", () => {
    const elements = document.querySelectorAll('.card');
    const sorted = [...elements].sort((a, b) => {
      const priceElA = a.querySelector(".card__price");
      const priceElB = b.querySelector(".card__price");
      const getPrice = (el) => parseInt(el.innerHTML.replace(/ /g, ""));
      return getPrice(priceElA) - getPrice(priceElB);
    });
    const resultEl = document.querySelector(".results-container");
    resultEl.innerHTML = null;
    sorted.forEach(el => resultEl.appendChild(el));
  });