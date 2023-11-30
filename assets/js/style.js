
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
                    loop:true,
                    autoplay: {
                        delay: 5500,
                        disableOnInteraction:true,
                    },
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

        const handleNavbar = function(){
            if($('#menu-bars').length){
                $('#menu-bars').click(function(){
                    $('body').removeClass('show-search').addClass('is-show show-navbar');
                });
            }

            if($('#close-menu').length){
                $('#close-menu').click(function(){
                    $('body').removeClass('is-show show-navbar');
                });
            }

        }
        const handleSearchMobile = function(){
            if($('#call-search').length){
                $('#call-search').click(function(){
                    $('body').removeClass('is-show show-navbar');
                    $('body').toggleClass('show-search');
                    $(this).toggleClass('is-search');

                });
            }
        }

        const handleSliderPartner = function () {
            if ($('#section-partner').length) {
                new Swiper('#section-partner', {
                    speed: 1000,
                    slidesPerView: 1.3,
                    spaceBetween: 30,
                    loop:true,
                    autoplay: {
                        delay: 3500,
                        disableOnInteraction:true,
                    },
                    breakpoints: {
                        320: {
                            slidesPerView: 1.5,
                        },
                        425: {
                            slidesPerView: 2,
                        },
                        576: {
                            slidesPerView: 2.5,
                        },
                        768: {
                            slidesPerView: 3.5
                        },
                        992: {
                            slidesPerView: 4.5
                        },
                        1200: {
                            slidesPerView: 6,
                        },

                    }
                });
            }
        }

        $(function () {
            handleSliderBlog();
            handleSliderHero();
            handleHeightCategory();
            handleSearchProduct();
            handleNavbar();
            handleSearchMobile();
            handleSliderPartner();

        });
    })(jQuery);

