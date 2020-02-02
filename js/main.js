$(document).ready(function () {

   var feedBackSlider = new Swiper('.slider-reviews', {
      loop: false,
      speed: 1000,

      scrollbar: {
         el: '.swiper-scrollbar',
         hide: true,
      },

      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      }
   });

   var projectSlider = new Swiper('.project-slider-mobile', {
      loop: false,
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 15,
      resistanceRatio: 0.60,

      scrollbar: {
         el: '.swiper-scrollbar',
         hide: true,
      },

      breakpoints: {
         480: {
            slidesPerView: 2,
            spaceBetween: 15
         },
         768: {
            slidesPerView: 3,
            spaceBetween: 15
         }
      }
   });



   $(function () {
      $('#form-feedback').validate({
         rules: {
            userName: {
               required: true
            },
            userEmail: {
               required: true
            },
            userText: {
               required: true,
               minlength: 5
            }
         },
         messages: {
            userName: {
               required: "Введите имя"
            },
            userEmail: {
               required: "Введите почту",
               email: "Укажите почту в формате email"
            },
            userText: {
               required: "Введите короткое сообщение",
               minlength: "Не менее 5 символов"
            }
         }
      });
   });


   $(window).scroll(function (event) {
      event.preventDefault();

      let arrowUp = $('.elem-arrow-up');

      if ($(this).scrollTop() > 700) {
         arrowUp.addClass("elem-arrow-up--show");
      } else {
         arrowUp.removeClass("elem-arrow-up--show");
      }
   });


   function mobileNav() {
      let mobileMenu = $('.mobile-nav');
      let body = $('body');
      let mobileMenuShow = 'mobile-nav--open';
      let noScroll = 'no-scroll';

      $('[data-toggle]').click(function () {
         mobileMenu.addClass(mobileMenuShow);
         $(this).addClass('elem-opacity');
         body.addClass(noScroll);
      });

      $('.mobile-nav__close').click(function () {
         mobileMenu.removeClass(mobileMenuShow);
         $('[data-toggle]').removeClass('elem-opacity');
         body.removeClass(noScroll);
      });

      $('[data-item-link]').click(function () {
         mobileMenu.removeClass(mobileMenuShow);
         $('[data-toggle]').removeClass('elem-opacity');
         body.removeClass(noScroll);
      });
   }
   mobileNav();

   $("a[href*='#']").mPageScroll2id();
});