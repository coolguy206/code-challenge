(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

//hover thumbs
var originalSrc = $('.lightbox .images .hero').attr('src');
$('.lightbox .thumbs ul li img').hover(function () {
  // console.log('hover thumb');
  var src = $(this).attr('src');
  $('.lightbox .images .hero').attr('src', src);
}, function () {
  // console.log('unhover thumb');
  $('.lightbox .images .hero').attr('src', originalSrc);
});


},{}]},{},[1]);
