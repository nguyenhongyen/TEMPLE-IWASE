;(function ($) {
	'use strict';

	/*  ===================================
					   chung
		==================================*/
	const handleSliderBlog = function () {
		if ($('#header-slider').length) {
			new Swiper('#header-slider', {
				speed: 1000,
				slidesPerView: 1,
				spaceBetween: 10,
				autoplay: {
					delay: 3500,
					disableOnInteraction: true,
				},
			});
		}
	}

	const handleHeightCategory = function () {
		if ($('#navigation-category').length) {
			const heightNavigation = $('#navigation-category').outerHeight();
			if (heightNavigation > 0) {
				$('.sub-category').css('height', heightNavigation);
			}
		}
	}


	$('#result-search').fadeOut();
	const handleSearchProduct = function () {
		$('#frm-search').submit(function () {
			$('#result-search').fadeIn();
		})
	}

	const handleNavbar = function () {
		if ($('#menu-bars').length) {
			$('#menu-bars').click(function () {
				$('body').removeClass('show-search').addClass('is-show show-navbar');
			});
		}

		if ($('#close-menu').length) {
			$('#close-menu').click(function () {
				$('body').removeClass('is-show show-navbar');
			});
		}

		if ($('#call-category').length) {
			$('#call-category').click(function () {
				$('body').removeClass('show-search').addClass('is-show show-category');
			});
		}

		if ($('#close-category').length) {
			$('#close-category').click(function () {
				$('body').removeClass('is-show show-category');
			});
		}

		const itemCollapse = $('.category-mobile .category-link[aria-expanded]');
		itemCollapse.on('click', function () {
			if ($(this).hasClass('show')) return false;
			$('.category-mobile .collapse[id^=collapse].show').each((_, element) => {
				new bootstrap.Collapse(element, {
					show: false
				});
			});
		});

	}
	const handleSearchMobile = function () {
		if ($('#call-search').length) {
			$('#call-search').click(function () {
				$('body').removeClass('is-show show-navbar');
				$('body').toggleClass('show-search');
				$(this).toggleClass('is-search');

			});
		}
	}




	const handleScrollTop = function () {
		$(window).scroll(function () {
			if ($(document).scrollTop() > 300) {
				$('body').addClass('show-scroll-top');
			} else {
				$('body').removeClass('show-scroll-top');
			}
		})
		$('#scroll-top').click(function (e) {
			e.stopPropagation();
			$("html, body").animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	}

	const handleInitFancybox = function () {
		if ($('.initFancybox').length) {
			$('.initFancybox').each(function () {
				let elm = $(this);
				Fancybox.bind(`[data-fancybox=${elm.attr('data-fancybox')}]`, {
					thumbs: {
						autoStart: true,
					},
				});
			});
		}
	}

	const handleSwiper = function (elm, obj = {}) {
		return new Swiper(elm, {
			loop: true,
			speed: 1000,
			autoplay: {
				delay: 8000,
				disableOnInteraction: true,
			},
			slidesPerView: 1,
			...obj
		});
	}

	/*  ===================================
					   trang chủ
		==================================*/


	const handleSliderHero = function () {
		if ($('#section-hero').length) {
			const slider = $('#section-hero');
			if (slider.length > 0) {
				const elmSwiper = '#' + slider.attr('id')
				const objSwiper = {
					effect: 'fade',
					autoplay: {
						delay: 5000,
						disableOnInteraction: true,
					},
					pagination: {
						el: "#section-hero .swiper-pagination",
						clickable: true,
					},
					navigation: {
						nextEl: "#section-hero .button-prev",
						prevEl: "#section-hero .button-next",
					},
				}
				handleSwiper(elmSwiper + ' .swiper', objSwiper);
			}
		}
	}

	const handleSliderPartner = function () {
		if ($('#section-partner').length) {
			const slider = $('#section-partner');
			if (slider.length > 0) {
				const elmSwiper = '#' + slider.attr('id')
				const objSwiper = {
					slidesPerView: 1.3,
					spaceBetween: 30,
					autoplay: {
						delay: 3500,
						disableOnInteraction: true,
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
							slidesPerView: 8,
						},
					}
				}
				handleSwiper(elmSwiper + ' .swiper', objSwiper);
			}
		}
	}


	/* ====================chi tiết bài viết==========*/

	const handleSliderRelatedArticle = function () {
		if ($('#detail-article').length) {
			new Swiper('#detail-article', {
				speed: 1000,
				slidesPerView: 1.2,
				spaceBetween: 10,
				loop: true,
				autoplay: {
					delay: 3500,
					disableOnInteraction: true,
				},
				breakpoints: {
					320: {
						slidesPerView: 1.2,
					},
					425: {
						slidesPerView: 1.2,
					},
					576: {
						slidesPerView: 2.5,
					},
					768: {
						slidesPerView: 2.5
					},
					992: {
						slidesPerView: 2.5
					},
					1200: {
						slidesPerView: 3.2,
					},

				}
			});
		}
	}

	/* ====================chi tiết sản phẩm==========*/

	const handleSliderRelatedProduct = function () {
		if ($('#detail-product').length) {
			new Swiper('#detail-product', {
				speed: 1000,
				slidesPerView: 1.2,
				spaceBetween: 10,
				loop: true,
				autoplay: {
					delay: 3500,
					disableOnInteraction: true,
				},
				breakpoints: {
					320: {
						slidesPerView: 1.2,
					},
					425: {
						slidesPerView: 1.2,
					},
					576: {
						slidesPerView: 2.5,
					},
					768: {
						slidesPerView: 2.5
					},
					992: {
						slidesPerView: 2.5
					},
					1200: {
						slidesPerView: 3.2,
					},

				}
			});
		}
	}

	const handleDetailProduct = function () {
		let sliderAvatar = $('#image-avatar');
		let sliderThumb = $('#image-thumb');

		if (sliderAvatar.length > 0) {
			let initSliderThumb;
			if (sliderThumb.length) {
				const elmSwiperThumb = '#' + sliderThumb.attr('id')
				const objSwiperThumb = {
					slidesPerView: 3,
					spaceBetween: 10,
					breakpoints: {
						320: {
							slidesPerView: 1.5,
						},
						768: {
							slidesPerView: 3.2,
						},
						991: {
							slidesPerView: 3.2,
						},
						1024: {
							slidesPerView: 3.2,
						},
						1199: {
							slidesPerView: 3.5,
						}
					},
					autoplay: false,
					loop: false
				}
				initSliderThumb = handleSwiper(elmSwiperThumb + ' .swiper', objSwiperThumb);
			}


			const elmSwiperAvatar = '#' + sliderAvatar.attr('id')
			const objSwiperAvatar = {
				spaceBetween: 10,
				navigation: {
					nextEl: elmSwiperAvatar + " .slider-button_next",
					prevEl: elmSwiperAvatar + " .slider-button_prev",
				},
			}

			if (typeof initSliderThumb !== 'undefined') {
				objSwiperAvatar.thumbs = {
					swiper: initSliderThumb,
				}
			}

			handleSwiper(elmSwiperAvatar + ' .swiper', objSwiperAvatar);


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
		handleScrollTop();
		handleInitFancybox();
		handleSliderRelatedArticle();
		handleSliderRelatedProduct();
		handleDetailProduct();
	});
})(jQuery);

