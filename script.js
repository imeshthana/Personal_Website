$(document).ready(function(){
    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
    });
  
    $('a[href*="#"]').on('click',function(e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop : $($(this).attr('href')).offset().top,
      },
        500, 
        'linear'
      );
    });
  });


  $(document).ready(function () {
    // Save the initial position of the image
    var initialImagePosition = $('#image').offset().top;
    // Handle scroll event
    $(window).on('scroll load', function () {
      // Get the current scroll position
      var scrollPosition = $(window).scrollTop();
      // Check if the scroll position is greater than the initial position of the image
      if (scrollPosition > initialImagePosition) {
        // Check if the image is still in the home section
        if ($('#image').parent().is('.homeImage')) {
          // Move the image to the header with a smooth transition
          $('#image').appendTo('.headerImage').animate({
            top: 1
          }, 5000); // You can adjust the duration (in milliseconds) for a faster or slower transition
        }
      } else {
        // Check if the image is in the header
        if ($('#image').parent().is('.headerImage')) {
          // Move the image back to the home section with a smooth transition
          $('#image').appendTo('.homeImage').animate({
            top: 1
          }, 5000); // You can adjust the duration (in milliseconds) for a faster or slower transition
        }
      }
    }); 
  });


//   $(document).ready(function () {
//     $('.slider-container').slick({
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: false,
//         autoplaySpeed: 2000, // Adjust the speed as needed
//         arrows: true,
//         prevArrow: ('.slick-prev'),
//         nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
//     });
// });


$(document).ready(function(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    grabCursor: true,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

  
// const counters = document.querySelectorAll('.counter span');
// const container = document.querySelector('.about');

// let activated = false;

// window.addEventListener('scroll', () => {
//   const containerTop = container.offsetTop;
//   const containerHeight = container.offsetHeight;
//   const scrollPosition = pageYOffset;

//   if (scrollPosition > containerTop - containerHeight - 200 && activated === false) {
//     counters.forEach(counter => {
//       counter.innerText = 0;
//       let count = 0;
//       function updateCount() {
//         const target = parseInt(counter.getAttribute('data-count'));
//         if (count < target) {
//           count += 1;
//           counter.innerText = count;
//           setTimeout(updateCount, 10);
//         } else {
//           counter.innerText = target;
//         }
//       }
//       updateCount();
//     });
//     activated = true;
//   } else if (scrollPosition < containerTop - containerHeight - 500 || scrollPosition === 0) {
//     if (activated === true) {
//       counters.forEach(counter => {
//         counter.innerText = 0;
//       });
//       activated = false;
//     }
//   }
// });
