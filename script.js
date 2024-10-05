$(document).ready(function () {
  // hide/show nav on page scroll
  let lastScrollPosition = 0;
  let isMobileMenuOpen = false;
  console.log(isMobileMenuOpen);
  $(window).scroll(function () {
    let sp = $(this).scrollTop();
    if (!isMobileMenuOpen) {
      if (sp > lastScrollPosition) {
        $("#navbar").addClass("navbar-hidden");
      } else {
        $("#navbar").removeClass("navbar-hidden");
      }
    }

    lastScrollPosition = sp;
  });

  // set mobile men display/hidden
  // toggle menu button icon
  $("#menu-btn").click(function () {
    $("#menu-icon").toggleClass("hidden");
    $("#close-icon").toggleClass("hidden");
    $("#mobile-nav").toggleClass("right-0, -right-full").toggleClass("left-0");
    $("#body").toggleClass("overflow-auto overflow-hidden");

    // Toggle the flag based on mobile menu state
    isMobileMenuOpen = !isMobileMenuOpen;

    // Ensure navbar is visible when the mobile menu is open
    if (isMobileMenuOpen) {
      $("#navbar").removeClass("navbar-hidden");
    }
  });

  // close mobile menu on nav item click
  $(".nav-item").click(function () {
    $("#menu-icon").toggleClass("hidden");
    $("#close-icon").toggleClass("hidden");
    $("#mobile-nav")
      .toggleClass("right-0, -right-full")
      .toggleClass("left-0");
    $("#body").removeClass("overflow-hidden").addClass("overflow-auto");

    // Toggle the flag based on mobile menu state
    isMobileMenuOpen = !isMobileMenuOpen;

    // Ensure navbar is visible when the mobile menu is open
    if (isMobileMenuOpen) {
      $("#navbar").removeClass("navbar-hidden");
    }
  });

  // open/close education items
  $(".education-trigger").click(function () {
    $(this)
      .parent()
      .toggleClass("education-item-expanded education-item-collapsed");
  });
});
