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

	//Login modal

	$(".js-login").on("click", function (e) {
		e.preventDefault();
		$(".modal--login").fadeIn(400);
	});

	$(".modal__close").on("click", function (e) {
		e.preventDefault();
		$(".modal--login").fadeOut(400);
	})

	$(document).on("mouseup", function(event) {
		const loginModal = $('.modal__window');

	//не модальное окно и не содержащие элементы!!

		if(!loginModal.is(event.target)
			&& loginModal.has(event.target).length === 0) {
				$(".modal").fadeOut(400);
		}
	})
});