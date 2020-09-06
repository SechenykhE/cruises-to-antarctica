'use strict';

var headerMain = document.querySelector('.header-nav');
var button = document.querySelector('.header-nav button');

headerMain.classList.remove('header-nav--nojs');

button.addEventListener('click', function () {
  if (headerMain.classList.contains('header-nav--closed')) {
    headerMain.classList.remove('header-nav--closed');
    headerMain.classList.add('header-nav--opened');
  } else {
    headerMain.classList.add('header-nav--closed');
    headerMain.classList.remove('header-nav--opened');
  }
});
