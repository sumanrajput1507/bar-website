$(document).ready(function(){
    $("#hamburger").click(function(){
      $(".navopen").addClass("open");
      })
      $("#close").click(function(){
        $(".navopen").removeClass("open");
      })
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel(function(){
    item:1;
    loop:true;
    nav:true;
   dots:true;
   autoplay:true;
   autoplaySpeed:1000;
   smartSpeed:1500;
   autoplayHoverPause:true;
  }); 
});

$(window).scroll(function(){
  if ($(this).scrollTop() > 10) {
     $('#dynamic').addClass('newClass');
  } else {
     $('#dynamic').removeClass('newClass');
  }
});



