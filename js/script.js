var slider = tns({
  startIndex: 1,
  container: ".boxSlider",
  items: 1,
  gutter: 4,
  center: true,
  nav: false,
  fixedWidth: 864,
  prevButton: ".boxOverlay__prev",
  nextButton: ".boxOverlay__next",
});
var km5 = tns({
  container: ".km5",
  fixedWidth: 304,
  items: 3.5,
  gutter: 32,
  nav: false,
  prevButton: ".around__prev",
  nextButton: ".around__next",
  mouseDrag: true,
});
var km10 = tns({
  container: ".km10",
  fixedWidth: 304,
  items: 3.5,
  gutter: 32,
  nav: false,
  prevButton: ".around__prev",
  nextButton: ".around__next",
  mouseDrag: true,
});
var km15 = tns({
  container: ".km15",
  fixedWidth: 304,
  items: 3.5,
  gutter: 32,
  nav: false,
  prevButton: ".around__prev",
  nextButton: ".around__next",
  mouseDrag: true,
});
var km20 = tns({
  container: ".km20",
  fixedWidth: 304,
  items: 3.5,
  gutter: 32,
  nav: false,
  prevButton: ".around__prev",
  nextButton: ".around__next",
  mouseDrag: true,
});
var km25 = tns({
  container: ".km25",
  fixedWidth: 304,
  items: 3.5,
  gutter: 32,
  nav: false,
  prevButton: ".around__prev",
  nextButton: ".around__next",
  mouseDrag: true,
});
var km30 = tns({
  container: ".km30",
  fixedWidth: 304,
  items: 3.5,
  gutter: 32,
  nav: false,
  prevButton: ".around__prev",
  nextButton: ".around__next",
  mouseDrag: true,
});
[].forEach.call(
  document.querySelectorAll(".object__sliderInner"),
  function (el) {
    tns({
      container: el,
      items: 1,
      nav: true,
      nested: "outer",
      controls: false,
    });
  }
);
var villageSlider = tns({
  container: ".villageSlider",
  fixedWidth: 304,
  items: 3.5,
  gutter: 32,
  nav: false,
  prevButton: ".object__prev",
  nextButton: ".object__next",
  nested: "inner",
  mouseDrag: true,
});
var similarSlider = tns({
  container: ".similarSlider",
  fixedWidth: 304,
  items: 3.5,
  gutter: 32,
  nav: false,
  prevButton: ".object__prev",
  nextButton: ".object__next",
  nested: "inner",
  mouseDrag: true,
});
var aroundSlider = tns({
  container: ".aroundSlider",
  fixedWidth: 304,
  items: 3.5,
  gutter: 32,
  nav: false,
  prevButton: ".object__prev",
  nextButton: ".object__next",
  nested: "inner",
  mouseDrag: true,
});
$(".broker__unhide").on("click tap", function () {
  $(this).hide();
});
$(".accardion__btn").on("click tap", function () {
  $(this).toggleClass("accardion__btn-rotate");
  $(".accardion__body").slideToggle();
});
$(".object__tab").on("click tap", function (e) {
  e.preventDefault();
  let tab = $(this).attr("href").slice(1);
  $(".object__slider").removeClass("object__slider-active");
  $(this)
    .parents()
    .find("." + tab)
    .addClass("object__slider-active");
  eval(tab).goTo(0);
});
$(".around__tab").on("click tap", function (e) {
  e.preventDefault();
  $(".around__tab").removeClass("around__tab-active");
  $(this).addClass("around__tab-active");
  let tab = $(this).attr("href").slice(1);
  $(".around__slider").removeClass("around__slider-active");
  $(this)
    .parents()
    .find("." + tab)
    .addClass("around__slider-active");
  eval(tab).goTo(0);
});
$(".sidebarMenu__item").on("click tap", function (e) {
  e.preventDefault();
  $(this).parent().children().removeClass("sidebarMenu__item-active");
  $(this).addClass("sidebarMenu__item-active");
  let tab = $(this).attr("href");
  $(this).parent().parent().children().removeClass("siderbarTab-active");
  $(this).parent().parent().find(tab).addClass("siderbarTab-active");
});
$(".w-unhide").on("click tap", function (e) {
  e.preventDefault();
  let unhide = $(this).attr("href");
  $(this).parents().find(unhide).slideToggle();
  if ($(this).text() == "Показать подробности") {
    $(this).text("Скрыть подробности");
  } else {
    $(this).text("Показать подробности");
  }
  $(this).parent().find("#w-arrow").toggleClass("w-rotate");
});
$(".p-unhide").on("click tap", function (e) {
  e.preventDefault();
  let unhide = $(this).attr("href");
  $(this).parents().find(unhide).slideToggle();
  if ($(this).text() == "Посмотреть все") {
    $(this).text("Скрыть все");
  } else {
    $(this).text("Посмотреть все");
  }
  $(this).parent().find("#w-arrow").toggleClass("w-rotate");
});
$(".layout__zoomIn").lightGallery();
$(".boxSlider").lightGallery();
$(document).ready(function(){
  $('.modal').modal();
});