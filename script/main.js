//AOS.init();
$(document).ready(function() {

	const menu = $('.menu');
	const navList = $('.nav-list');
	const filter = $('.filter');
	let showMenu = false;
	let previousScrollPosition = 0;
	mediaLinks();
	$(window).on('resize', mediaLinks);

	// show/hide menu on scroll
	$(window).on('scroll', function() {
		$('header').toggleClass('d-none', $(window).scrollTop() > previousScrollPosition);
		previousScrollPosition = $(window).scrollTop();
	});

	menu.on('click', function() {
		if (!showMenu) menuShow();
		else menuHide();
	});

	function menuShow() {
		navList.removeClass('d-none');
		navList.addClass('d-flex');
		filter.removeClass('d-none');
		filter.addClass('d-flex;');
		$( '.line' ).addClass('transform-menu');
		showMenu = true;
	}

	function menuHide() {
		navList.removeClass('d-flex');
		navList.addClass('d-none');
		filter.removeClass('d-flex');
		filter.addClass('d-none');
		$( '.line' ).removeClass('transform-menu');
		showMenu = false;
	}
 
	// show/hide on load & resize
	function mediaLinks() {
		if (window.innerWidth > 767) {
			navList.removeClass('d-none');
			navList.addClass('d-flex');
			$('.nav-list li a').off();
			filter.addClass('d-none');
		} else {
			navList.addClass('d-none');
			navList.removeClass('d-flex');
			$('.nav-list li a').on('click', menuHide);
		}
	}
});