$(document).ready(function () {
  // Owl carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1024: {
        items: 3,
      },
      1440: {
        items: 4,
      },
    },
  });
  // ----------------------------------------------------------------

  // Open modal login
  $("#loginFormClose").click(function (event) {
    $("#loginFormModal").css("top", "-100%");
  });
  $("#loginFormOpen").click(function (event) {
    $("#loginFormModal").css("top", "0");
  });
  // ----------------------------------------------------------------

  // Scorll smooth
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });
  // ----------------------------------------------------------------

  // Active sidebar
  $("#closeSidebar").click(function (event) {
    var $sidebar = $("#sidebar-mobile").css("right", "-100%");
  });

  $("#activeMenu").click(function (event) {
    var $sidebar = $("#sidebar-mobile").css("right", "0");
  });
  // ----------------------------------------------------------------

  // Mean expand
  $(".mean-expand").click(function (event) {
    var parent = event.currentTarget.offsetParent;
    parent.querySelector(".mean-non-expand").style.display = "block";
    var subMenu = parent.querySelector(".sub-menu");
    subMenu.style.display = "block";
    event.currentTarget.style.display = "none";
  });

  $(".mean-non-expand").click(function (event) {
    var parent = event.currentTarget.offsetParent;
    var subMenu = parent.querySelector(".sub-menu");
    subMenu.style.display = "none";
    parent.querySelector(".mean-expand").style.display = "block";
    event.currentTarget.style.display = "none";
  });

  // Fixed header
  window.onscroll = () => {
    let headerMobile = document.querySelector(".header-mobile");
    let headerBottom = document.querySelector(".header-bottom");
    let sticky = headerMobile.offsetTop;
    let stickyHeaderBottom = headerBottom.offsetTop;
    if (window.pageYOffset >= sticky) {
      headerMobile.classList.add("sticky");
    }
    if (window.pageYOffset === 0) {
      headerMobile.classList.remove("sticky");
    }
    if (window.pageYOffset >= stickyHeaderBottom) {
      headerBottom.classList.add("sticky");
    }
    if (window.pageYOffset === 0) {
      headerBottom.classList.remove("sticky");
    }
  };

  // Preloader
  setTimeout(() => {
    var preloader = document.querySelector(".preloader");
    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";
  }, 500);
});
