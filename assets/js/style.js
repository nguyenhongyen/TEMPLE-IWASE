
    ;(function ($) {
        'use strict';


        const handleSliderHero= function () {
            if ($('#section-hero').length) {
                new Swiper('#section-hero', {
                    speed: 1000,
                    effect:'fade',
                    slidesPerView: 1,
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },
                    navigation: {
                        nextEl: ".button-service_next",
                        prevEl: ".button-service_prev",
                    },
                });
            }
        }



        const handleHeightCategory = function(){
            if ($('#navigation-category').length) {
                const heightNavigation = $('#navigation-category').outerHeight();
                if (heightNavigation > 0) {
                    $('.sub-category').css('height', heightNavigation);
                }
            }
        }

        $(function () {

            handleSliderHero();
            handleHeightCategory();
        });
    })(jQuery);

