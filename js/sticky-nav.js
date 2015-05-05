var mn = $("nav");
var container = $("#main-container");
var fc = $("figcaption");
var nh = $("#navheader");


$(window).scroll(function() {
  if( $(this).scrollTop() > 365 ) {
    mn.addClass("main-nav-scrolled");
    container.addClass("scrolled");
    fc.addClass("scrolled");
    nh.removeClass("hidden");
    $("#navheader").fadeIn(200);

  } else {
    mn.removeClass("main-nav-scrolled");
    container.removeClass("scrolled");
    fc.removeClass("scrolled");
    nh.addClass("hidden");
  }
});
