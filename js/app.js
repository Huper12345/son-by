$(function() {


    var header = $("#head"), 
    introH = $("#intro").innerHeight(),
    scrolloffset = $(window).scrollTop();    
  
  
  // header fixed
  checkScroll(scrolloffset);
  
  $(window).on("scroll", function() {
  
     scrolloffset = $(this).scrollTop();
     checkScroll(scrolloffset);
  });
  
  function checkScroll(scrolloffset) {
  
     if( scrolloffset >= introH ) {
     header.addClass("fixed");
     }
  
     else {
         header.removeClass("fixed");
     }
  }
         
  // Menu nav toggle
  
  $("#nav_toggle").on("click", function(event) {
  event.preventDefault();
  
  
  $(this).toggleClass("active");
  $("#nav").toggleClass("active");
  });
  
  
  $("#nav_link, #nav_link3, #nav_link2, #nav_link4").on("click", function(event) {
  event.preventDefault();
  
  
  $("#nav").removeClass("active");
  $("#nav_toggle").removeClass("active");
  
  
  });
  
  
  $("a[href*=#]").on("click", function(e){
     var anchor = $(this);
     $('html, body').stop().animate({
     scrollTop: $(anchor.attr('href')).offset().top
     }, 777);
     e.preventDefault();
     return false;
     });
  
  
  });
  
  