(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

module.exports = {
  close: function close() {
    // console.log('close from lightbox obj')
    $(document).on('click', '.overlay, .lightbox .close', function () {
      $('.overlay').remove();
      $('.lightbox').remove();
    });
  },
  hover: function hover() {
    // console.log('hover from lightbox obj');
    $(document).on('mouseenter', '.lightbox .thumbs ul li img', function () {
      // console.log('hover thumb');
      var src = $(this).attr('src');
      $('.lightbox .images .hero').attr('src', src);
    });
    $(document).on('mouseleave', '.lightbox .thumbs ul li img', function () {
      var originalSrc = $('.lightbox div.thumbs ul li:nth-of-type(1) img').attr('src'); // console.log('unhover thumb');

      $('.lightbox .images .hero').attr('src', originalSrc);
    });
  },
  click: function click() {
    $(document).on('click', '.lightbox .thumbs ul li img', function () {
      var src = $(this).attr('src');
      $('.lightbox .images .hero').attr('src', src);
    });
  }
};


},{}]},{},[1]);
