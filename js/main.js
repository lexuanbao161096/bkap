(function($) {

    $(document).ready(function() {
        $(window).scroll(function() {

            var height = $(window).scrollTop();

            if (height > 100) {
                $(".header").addClass('fix-header');
            } else {
                $(".header").removeClass('fix-header');
            }   
            
            if (height > 100) {
                $(".scrolltoTop").fadeIn();
            } else {
                $(".scrolltoTop").fadeOut();
            }   
        });

        $('.header-bottom-ipad li').click(function(){
          $(this).find('.sub-menu').slideToggle();
        })
        $('.humberger,.menu-mobile-close').click(function(){
          // $(this).
          $(this).closest('.header-right').find('.header-bottom-ipad  ').slideToggle();
        })
        $('.icon-search,.search-close-icon').click(function(){
           $('.search-section').toggleClass("search-active");
            // $(document).on('click', function (e) {
            //     if ($(e.target).closest(".search-wrapper").length === 0) {
            //         $(".search-section").hide();
            //     }
            // });
        })
       
    })
   
})(jQuery);

new Swiper('.home-banner-swiper', {
  spaceBetween: 20,
  slidesPerView: 1,
  // autoplay: {
  //     delay: 5000,
  // },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
 
 
});
 new Swiper('.invest-field-swiper', {
  spaceBetween: 20,
  slidesPerView: 4,
  // autoplay: {
  //     delay: 5000,
  // },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  }
 
});

new Swiper('.news-project-swiper', {
      slidesPerView: 2,
      spaceBetween: 20,
      pagination: {
        el: '#project-tab-1 .pagination-page',
        clickable: true,
      },
      breakpoints: {

        320: {
          slidesPerView: 1,
          slidesPerColumn: 1,
        },
        480: {
          slidesPerView: 1,
          slidesPerColumn: 1,
        },
        768: {
          slidesPerView: 1,
          slidesPerColumn: 1,
        },
      }
});

new Swiper('.news-thumbnail-swiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1.5,
    },
  },
  pagination: {
    el: '.swiper-pagination',
},
});
 new Swiper('.news-project-swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
      nextEl: '.news-project-button-next',
      prevEl: '.news-project-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
  }
});
new Swiper('.home-news-project-swiper', {
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
      nextEl: '.news-project-button-next',
      prevEl: '.news-project-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1.5,
    },
  }
});
new WOW().init();