// core vendors
require('bootstrap');
require('imports?this=>window!./js/modernizr.js');
require('./js/jquery.metisMenu.js');
require('./js/jquery.slimscroll.js');
// end core vendors

// additional vendors
require('./js/jquery.smooth-scroll.js');
require('./js/auto-hide-navigation.js');
require('./js/bootstrap-accessibility.js');
require('./js/pace.min.js');
require('./js/bootstrap-tabdrop.js');
// end additional vendors

// JavaScript source code
/*
 *
 *   Custom.js
 *   version 1.13
 *
 */
$(document).ready(function () {

  // Accessibility Bar
  $("#access").bind("focusin", function () {
    $("#access").addClass("visible")
  }).bind("focusout", function () {
    $("#access").removeClass("visible")
  });

  $('.dropdown-menu a').click(function (e) {
    e.stopPropagation();
  });

  if ($("#totop").is('*')) {
    $('#totop').click(function (event) {
      event.preventDefault();
      var link = this;
      $.smoothScroll({
        scrollTarget: '#wrapper'
      });
      $('#cd-menu-trigger').focus();
    });
  }

  // Mega Dropdown Menu
  if ($(".mega-dropdown").is('*')) {
    $('li.dropdown.mega-dropdown a').on('click', function (event) {
      $(this).parent().toggleClass("open");
    });
    $('body').on('click', function (e) {
      if (!$('li.dropdown.mega-dropdown').is(e.target) && $('li.dropdown.mega-dropdown').has(e.target).length === 0 && $('.open').has(e.target).length === 0) {
        $('li.dropdown.mega-dropdown').removeClass('open');
      }
    });
  }


  // Sticky menu
  $(window).scroll(function () {
    $windowWidth = window.innerWidth;
    $headerHeight = $('header').outerHeight();
    if ($(window).scrollTop() > $headerHeight) {
      if ($windowWidth > 768) {
        $('.navbar.sticky').addClass('sticky-navbar animated fadeInDown');
      }
    } else {
      $('.navbar.sticky').removeClass('sticky-navbar animated fadeInDown');
    }
  });

  // Add body-small class if window less than 1025
  if ($(this).width() < 1025) {
    $('body').addClass('body-small')
  } else {
    $('body').removeClass('body-small')
  }

  // Add mini-navbar class (add left-hand-side nav) if window more than 1025
  if (($(this).width() > 1025) && !($('body').hasClass('menu-hidden-by-default'))) {
    $('body').addClass('mini-navbar')
  } else {
    $('body').removeClass('mini-navbar')
  }

  // MetisMenu
  if ($("#side-menu").is('*')) {
    $('.metismenu, #side-menu').metisMenu({
      toggle: true
    });
  }

  // Collapse ibox function
  $('.collapse-link').click(function () {
    var ibox = $(this).closest('div.ibox');
    var button = $(this).find('i');
    var content = ibox.find('div.ibox-content');
    content.slideToggle(200);
    button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
    ibox.toggleClass('').toggleClass('border-bottom');
    setTimeout(function () {
      ibox.resize();
      ibox.find('[id^=map-]').resize();
    }, 50);
  });

  // Close ibox function
  $('.close-link').click(function () {
    var content = $(this).closest('div.ibox');
    content.remove();
  });

  // Close menu in canvas mode
  $('.close-canvas-menu').click(function () {
    $("body").toggleClass("mini-navbar");
    SmoothlyMenu();
  });

  // Open close right sidebar
  $('.right-sidebar-toggle').click(function () {
    $('#right-sidebar').toggleClass('sidebar-open');
  });

  // Initialize slimscroll for right sidebar
  if ($('.sidebar-container').is('*')) {
    $('.sidebar-container').slimScroll({
      height: '100%',
      railOpacity: 0.4,
      wheelStep: 10
    });
  }

  // Initialize slimscroll for small chat
  if ($('.small-chat-box').is('*')) {
    $('.small-chat-box .content').slimScroll({
      height: '234px',
      railOpacity: 0.4
    });
  }

  // Minimalize menu
  $('.navbar-minimalize').click(function () {
    $("body").toggleClass("mini-navbar");
    SmoothlyMenu();
  });

  // Tooltips
  if ($('.tooltip').is('*')) {
    $('.tooltip').tooltip({
      selector: "[data-toggle=tooltip]",
      container: "body"
    });
  }

  if ($('.tooltip').is('*')) {
    $('body').tooltip({
      selector: "[data-toggle=tooltip]",
      container: "body"
    });
  }

  // Move modal to body
  // Fix Bootstrap backdrop issue with animation.css
  $('.modal').appendTo("body");

  // Full height of sidebar
  function fix_height() {
    var heightWithoutNavbar = $("body > #wrapper").height() - 61;
    $(".sidebard-panel").css("min-height", heightWithoutNavbar + "px");

    var navbarHeigh = $('nav.navbar-default').height();
    var wrapperHeigh = $('#page-wrapper').height();

    if (navbarHeigh > wrapperHeigh) {
      $('#page-wrapper').css("min-height", navbarHeigh + "px");
    }

    if (navbarHeigh < wrapperHeigh) {
      $('#page-wrapper').css("min-height", $(window).height() + "px");
    }

    if ($('body').hasClass('fixed-nav')) {
      $('#page-wrapper').css("min-height", $(window).height() - 60 + "px");
    }

  }
  fix_height();

  // Fixed Sidebar
  $(window).bind("load", function () {
    if ($("body").hasClass('fixed-sidebar')) {
      $('.sidebar-collapse').slimScroll({
        height: '100%',
        railOpacity: 0.9
      });
    }
  });

  // Move right sidebar top after scroll
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0 && !$('body').hasClass('fixed-nav')) {
      $('#right-sidebar').addClass('sidebar-top');
    } else {
      $('#right-sidebar').removeClass('sidebar-top');
    }
  });

  $(window).bind("load resize scroll", function () {
    if (!$("body").hasClass('body-small')) {
      fix_height();
    }
  });

  if ($('[data-toggle=popover]').is('*')) {
    $("[data-toggle=popover]")
        .popover();
  }

  // Add slimscroll to element
  if ($('.full-height-scroll').is('*')) {
    $('.full-height-scroll').slimscroll({
      height: '100%'
    });
  }

  // Tabdrop config
  $('.nav-tabs.tabdrop#example-one').tabdrop({ text: 'More options' });
});

// Minimalize menu when screen is less than 1025px
$(window).bind("resize", function () {
  if ($(this).width() < 1025) {
    $('body').addClass('body-small')
  } else {
    $('body').removeClass('body-small')
  }
});

// Animation css script
function animationHover(element, animation) {
  element = $(element);
  element.hover(
      function () {
        element.addClass('animated ' + animation);
      },
      function () {
        //wait for animation to finish before removing classes
        window.setTimeout(function () {
          element.removeClass('animated ' + animation);
        }, 2000);
      });
}

function SmoothlyMenu() {
  if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
    // Hide menu in order to smoothly turn on when maximize menu
    $('#side-menu').hide();
    // For smoothly turn on menu
    setTimeout(
        function () {
          $('#side-menu').fadeIn(500);
        }, 100);
  } else if ($('body').hasClass('fixed-sidebar')) {
    $('#side-menu').hide();
    setTimeout(
        function () {
          $('#side-menu').fadeIn(500);
        }, 300);
  } else {
    // Remove all inline style from jquery fadeIn function to reset menu state
    $('#side-menu').removeAttr('style');
  }
}