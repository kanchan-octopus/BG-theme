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




(function () {
  const quantityContainer = document.querySelector(".quantity");
  const minusBtn = quantityContainer.querySelector(".minus");
  const plusBtn = quantityContainer.querySelector(".plus");
  const inputBox = quantityContainer.querySelector(".input-box");

  updateButtonStates();

  quantityContainer.addEventListener("click", handleButtonClick);
  inputBox.addEventListener("input", handleQuantityChange);

  function updateButtonStates() {
    const value = parseInt(inputBox.value);
    minusBtn.disabled = value <= 1;
    plusBtn.disabled = value >= parseInt(inputBox.max);
  }

  function handleButtonClick(event) {
    if (event.target.classList.contains("minus")) {
      decreaseValue();
    } else if (event.target.classList.contains("plus")) {
      increaseValue();
    }
  }

  function decreaseValue() {
    let value = parseInt(inputBox.value);
    value = isNaN(value) ? 1 : Math.max(value - 1, 1);
    inputBox.value = value;
    updateButtonStates();
    handleQuantityChange();
  }

  function increaseValue() {
    let value = parseInt(inputBox.value);
    value = isNaN(value) ? 1 : Math.min(value + 1, parseInt(inputBox.max));
    inputBox.value = value;
    updateButtonStates();
    handleQuantityChange();
  }

  function handleQuantityChange() {
    let value = parseInt(inputBox.value);
    value = isNaN(value) ? 1 : value;

    // Execute your code here based on the updated quantity value
    console.log("Quantity changed:", value);
  }
})();




//Product details page slider

$(function() {
  
  $('#aniimated-thumbnials').lightGallery({
    thumbnail: true,
  });
// Card's slider
  var $carousel = $('.slider-for');

  $carousel
    .slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      adaptiveHeight: true,
      asNavFor: '.slider-nav'
    });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    arrows: true,
    centerPadding: '60px',
  });
});



$('.shipping-estimate-show').click(function() {
  $('.shipping-estimator').show(5);
  $('.shipping-estimate-show').hide(0);
  $('.shipping-estimate-hide').show(0);
});
$('.shipping-estimate-hide').click(function() {
  $('.shipping-estimator').hide(5);
  $('.shipping-estimate-show').show(0);
  $('.shipping-estimate-hide').hide(0);
});


$('.coupon-code-add').click(function() {
  $('.coupon-code').show(5);
  $('.coupon-code-add').hide(0);
  $('.coupon-code-cancel').show(0);
});
$('.coupon-code-cancel').click(function() {
  $('.coupon-code').hide(5);
  $('.coupon-code-add').show(0);
  $('.coupon-code-cancel').hide(0);
});