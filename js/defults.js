
$(document).ready(function(){
    $(".toggole").click(function(){
      $(".menu").animate(
        {
        'margin-left': "-3%"
        }
      );
        
    });
    
  });
  $(document).ready(function(){
    $(".menu").click(function(){
      $(".menu").animate(
        {
        'margin-left': "-120%"
        }
      );
        
    });
    
  });



  $('.responsive').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
   
    ]
  });

  $(document).ready(function(){
    $(".slider_left_arrow").click(function(){
      $(".slider").animate({
        left: '+=-100%',
        trnslate: 'slow',
      });
        
    });
    $(".slider_right_arrow").click(function(){
      $(".slider").animate({
        left: '+=+100%',
        trnslate: 'slow',
      }
      );
        
    });
    
  });
