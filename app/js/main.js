$(window).scroll(function () {
  if ($(window).scrollTop() >= 1) {
    $(".header__top").addClass("fixed");
  } else {
    $(".header__top").removeClass("fixed");
  }
});
var mixer = mixitup(".products-cards");
