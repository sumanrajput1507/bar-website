$(document).ready(function(){
    $("#hamburger").click(function(){
      $(".navopen").addClass("open");
      })
      $("#close").click(function(){
        $(".navopen").removeClass("open");
      })
});
$(document).ready(function() {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    });

    const inputs = document.querySelectorAll('input');
    const comment = document.querySelector('.form-comment');
    const submit = document.querySelector('.form-submit');
    
    function init() {
      const isFill = [...inputs,comment].every(({value}) => value.trim().length);
      submit.classList.toggle('enable',isFill);
    }
    
    document.addEventListener('keyup',init,false);

// $(window).scroll(function(){
//   if ($(this).scrollTop() > 10) {
//      $('#dynamic').addClass('newClass');
//   } else {
//      $('#dynamic').removeClass('newClass');
//   }
// });



