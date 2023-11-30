
    ;(function ($) {
        'use strict';


        const handleSliderBlog= function () {
            if ($('#header-slider').length) {
                new Swiper('#header-slider', {
                    speed: 1000,
                    slidesPerView: 1,
                    spaceBetween: 10,
                    autoplay: {
                        delay: 3500,
                        disableOnInteraction:true,
                    },
                });
            }
        }

        const handleSliderHero= function () {
            if ($('#section-hero').length) {
                new Swiper('#section-hero', {
                    speed: 1000,
                    effect:'fade',
                    slidesPerView: 1,
                   /* autoplay: {
                        delay: 5500,
                        disableOnInteraction:true,
                    },*/
                    pagination: {
                        el: "#section-hero .swiper-pagination",
                        clickable: true,
                    },
                    navigation: {
                        nextEl: "#section-hero .button-prev",
                        prevEl: "#section-hero .button-next",
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

        $('#result-search').fadeOut();
        const handleSearchProduct = function(){
            $('#frm-search').submit(function (){
                $('#result-search').fadeIn();
            })
        }

        $(function () {
            handleSliderBlog();
            handleSliderHero();
            handleHeightCategory();
            handleSearchProduct();
        });
    })(jQuery);

