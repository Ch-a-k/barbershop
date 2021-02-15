$(document).ready(function () {
	// $('body').hide()

	var mySwiper = new Swiper('.swiper-container', {
		// Optional parameters
		loop: true,

		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
		autoplay: {
		  delay: 5000,
		  disableOnInteraction: false,
		},
	  });

})