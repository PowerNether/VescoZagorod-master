if ($('.boxSlider').length) {
  var slider = tns({
    startIndex: 1,
    container: '.boxSlider',
    items: 1,
    gutter: 4,
    center: true,
    nav: false,
    fixedWidth: 864,
    prevButton: '.boxOverlay__prev',
    nextButton: '.boxOverlay__next',
    mouseDrag: true,
  });
};
if ($('.km5').length) {
  var km5 = tns({
    container: '.km5',
    fixedWidth: 304,
    items: 3.5,
    gutter: 32,
    nav: false,
    prevButton: '.around__prev',
    nextButton: '.around__next',
    mouseDrag: true,
  });
};
if ($('.km10').length) {
  var km10 = tns({
    container: '.km10',
    fixedWidth: 304,
    items: 3.5,
    gutter: 32,
    nav: false,
    prevButton: '.around__prev',
    nextButton: '.around__next',
    mouseDrag: true,
  });
};
if ($('.km15').length) {
  var km15 = tns({
    container: '.km15',
    fixedWidth: 304,
    items: 3.5,
    gutter: 32,
    nav: false,
    prevButton: '.around__prev',
    nextButton: '.around__next',
    mouseDrag: true,
  });
};
if ($('.km20').length) {
  var km20 = tns({
    container: '.km20',
    fixedWidth: 304,
    items: 3.5,
    gutter: 32,
    nav: false,
    prevButton: '.around__prev',
    nextButton: '.around__next',
    mouseDrag: true,
  });
};
if ($('.km25').length) {
  var km25 = tns({
    container: '.km25',
    fixedWidth: 304,
    items: 3.5,
    gutter: 32,
    nav: false,
    prevButton: '.around__prev',
    nextButton: '.around__next',
    mouseDrag: true,
  });
};
if ($('.km30').length) {
  var km30 = tns({
    container: '.km30',
    fixedWidth: 304,
    items: 3.5,
    gutter: 32,
    nav: false,
    prevButton: '.around__prev',
    nextButton: '.around__next',
    mouseDrag: true,
  });
};
if ($('.object__sliderInner').length) {
  [].forEach.call(document.querySelectorAll('.object__sliderInner'), function (el) {
    tns({
      container: el,
      items: 1,
      nav: true,
      nested: 'outer',
      controls: false,
    });
  });
};
if ($('.villageSlider').length) {
  var villageSlider = tns({
    container: '.villageSlider',
    fixedWidth: 280,
    items: 3.5,
    gutter: 32,
    nav: false,
    prevButton: '.object__prev',
    nextButton: '.object__next',
    nested: 'inner',
    mouseDrag: true,
    center: true,
    responsive: {
      425: {
        fixedWidth: 304,
        center: false,
      }
    }
  });
};
if ($('.similarSlider').length) {
  var similarSlider = tns({
    container: '.similarSlider',
    fixedWidth: 280,
    items: 3.5,
    gutter: 32,
    nav: false,
    prevButton: '.object__prev',
    nextButton: '.object__next',
    nested: 'inner',
    mouseDrag: true,
    center: true,
    responsive: {
      425: {
        fixedWidth: 304,
        center: false,
      }
    }
  });
};
if ($('.aroundSlider').length) {
  var aroundSlider = tns({
    container: '.aroundSlider',
    fixedWidth: 280,
    items: 3.5,
    gutter: 32,
    nav: false,
    prevButton: '.object__prev',
    nextButton: '.object__next',
    nested: 'inner',
    mouseDrag: true,
    center: true,
    responsive: {
      425: {
        fixedWidth: 304,
        center: false,
      }
    }
  });
};

$('.broker__unhide').on('click tap', function () {
  $(this).hide();
});
$('.accardion__btn').on('click tap', function () {
  $(this).toggleClass('accardion__btn-rotate');
  $('.accardion__body').slideToggle();
});
$('.object__tab').on('click tap', function (e) {
  e.preventDefault();
  let tab = $(this).attr('href').slice(1);
  $('.object__slider').removeClass('object__slider-active');
  $(this).parents().find('.' + tab).addClass('object__slider-active');
  eval(tab).goTo(0);
});
$('.around__tab').on('click tap', function (e) {
  e.preventDefault();
  $('.around__tab').removeClass('around__tab-active');
  $(this).addClass('around__tab-active');
  let tab = $(this).attr('href').slice(1);
  $('.around__slider').removeClass('around__slider-active');
  $(this).parents().find('.' + tab).addClass('around__slider-active');
  eval(tab).goTo(0);
});
$('.sidebarMenu__item').on('click tap', function (e) {
  e.preventDefault();
  $(this).parent().children().removeClass('sidebarMenu__item-active');
  $(this).addClass('sidebarMenu__item-active');
  let tab = $(this).attr('href');
  $(this).parent().parent().children().removeClass('siderbarTab-active');
  $(this).parent().parent().find(tab).addClass('siderbarTab-active');
});
$('.w-unhide').on('click tap', function (e) {
  e.preventDefault();
  let unhide = $(this).attr('href');
  $(this).parents().find(unhide).slideToggle();
  if ($(this).text() == '???????????????? ??????????????????????') {
    $(this).text('???????????? ??????????????????????');
  } else {
    $(this).text('???????????????? ??????????????????????');
  }
  $(this).parent().find('#w-arrow').toggleClass('w-rotate');
});
$('.p-unhide').on('click tap', function (e) {
  e.preventDefault();
  let unhide = $(this).attr('href');
  $(this).parents().find(unhide).slideToggle();
  if ($(this).text() == '???????????????????? ??????') {
    $(this).text('???????????? ??????');
  } else {
    $(this).text('???????????????????? ??????');
  }
  $(this).parent().find('#w-arrow').toggleClass('w-rotate');
});
$('.layout__zoomIn').lightGallery();
$('.boxSlider').lightGallery();
$(document).ready(function () {
  $('.modal').modal();
});
$(document).on('click', '.headerBottom__mobileLogo', function () {
  if (!$('.overlay').length) {
    $('body').append($('<div class="overlay" style="background: rgba(0,0,0,.8); z-index: 1; opacity: 0; top: 0px; width: 100%; height: 100%; position: fixed;" />'));
    $('.overlay').fadeTo(400, 1);
    $('header').addClass('vesco-block__open');
    $('.vesco-block>.menu').slideToggle();
  }
});
$(document).on('click', function (e) {
  if (!$('.headerBottom__mobileLogo').is(e.target) & !$('a').is(e.target) & $('.overlay').length) {
    $('.overlay').fadeOut();
    setTimeout(function () {
      $('.overlay').remove();
      $('header').removeClass('vesco-block__open');
    }, 400);
    $('.vesco-block>.menu').slideToggle();
  }
});
