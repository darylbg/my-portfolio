$(document).ready(function () {
    // hide/show nav on page scroll
    let lastScrollPosition = 0;
    $(window).scroll(function () {
      let sp = $(this).scrollTop();
      if (sp > lastScrollPosition) {
        $("#navbar").addClass("navbar-hidden");
      } else {
        $("#navbar").removeClass("navbar-hidden");
      }
      lastScrollPosition = sp;
    });
  
    // set mobile men display/hidden
    // toggle menu button icon
    $("#menu-btn").click(function () {
      $("#menu-icon").toggleClass("hidden");
      $("#close-icon").toggleClass("hidden");
      $("#mobile-nav").toggleClass("right-0, -right-full").toggleClass("left-0");
      $("#body").toggleClass("overflow-auto, overflow-hidden");
    });
  
    // close mobile menu on nav item click
    $(".nav-item").click(function () {
      $("#menu-icon").toggleClass("hidden");
      $("#close-icon").toggleClass("hidden");
      $("#mobile-nav")
        .toggleClass("right-0, -right-full")
        .toggleClass("left-auto");
      $("#body").removeClass("overflow-hidden").addClass("overflow-auto");
    });

    // open/close education items
    $(".education-trigger").click(function() {
        $(this).parent().toggleClass("education-item-expanded education-item-collapsed");
    })
  });
  