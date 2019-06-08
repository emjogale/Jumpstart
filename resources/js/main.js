$(document).ready(function(){
      $('.carousel').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        draggable: false,
        pauseOnHover: false
      });

      var oldScrollDistance = 0;
      $(window).scroll(function() {
        var newScrollDistance = $(this).scrollTop();
        if (newScrollDistance - oldScrollDistance >= 50) {
          var navBarHeight = $('.navbar').css('height');
          $('.navbar').animate({top: '-' + navBarHeight}, 150);
          oldScrollDistance = newScrollDistance;
        }
       else if (oldScrollDistance - newScrollDistance >= 50) {
          $('.navbar').animate({top: '0px'}, 150);
          oldScrollDistance = newScrollDistance;
        }
      });

   });

  
