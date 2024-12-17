jQuery(document).ready(function($){
  // Sticky Header on Scroll
  // $(document).scroll(function() {
  //    var scroll = $(document).scrollTop();
  //   if (scroll >= 100) {
  //       //alert();
  //       $('header').addClass("sticky");
  //   } else {
  //       $('header').removeClass('sticky');
  //   }
  // });

 $('.header-carousel').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });


  // Testimonial Slider
  $('.testimonial-slider').slick({
    autoplay: false,
    autoplaySpeed: 1000,
    speed: 600,
    draggable: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
  });

  // Work Slider
  $('.work-slider').slick({
    autoplay: false,
    autoplaySpeed: 1000,
    speed: 600,
    draggable: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
  });



});


$('.featured-slide').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  arrows:true,
  dots:false,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots:false,
        arrows:true
      }
    },
    {
      breakpoint: 600,
      settings: {
          dots:true,
        slidesToShow: 1,
        slidesToScroll: 1
          
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});  


$('.brand').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  arrows:true,
  dots:false,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots:false,
        arrows:true
      }
    },
    {
      breakpoint: 600,
      settings: {
          dots:true,
        slidesToShow: 1,
        slidesToScroll: 1
          
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});  
