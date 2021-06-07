
$(document).ready(function () {
	AOS.init();
	const menu = $('.menu');
	const navList = $('.nav-list');
	const filter = $('.filter');
	let showMenu = false;
	let previousScrollPosition = 0;
	mediaLinks();
	$(window).on('resize', mediaLinks);

	// show/hide menu on scroll
	$(window).on('scroll', function () {
		$('header').toggleClass('d-none', $(window).scrollTop() > previousScrollPosition);
		previousScrollPosition = $(window).scrollTop();
	});

	menu.on('click', function () {
		if (!showMenu) menuShow();
		else menuHide();
	});

	function menuShow() {
		navList.removeClass('d-none');
		navList.addClass('d-flex');
		filter.removeClass('d-none');
		filter.addClass('d-flex;');
		$('.line').addClass('transform-menu');
		showMenu = true;
	}

	function menuHide() {
		navList.removeClass('d-flex');
		navList.addClass('d-none');
		filter.removeClass('d-flex');
		filter.addClass('d-none');
		$('.line').removeClass('transform-menu');
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

	//  back to top button
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 400) {
			$('.back-to-top').css('display', 'flex');
		} else {
			$('.back-to-top').css('display', 'none');
		}
	});

	// Magnific Popup plugin - init form open
	$('#form-link').magnificPopup({
		items: {
			src: '#popup',
			type: 'inline'
		}
	});

	// tabs
	$('.tab-content').hide();
	$('ul.tabs li:first').addClass('active').show();
	$('.tab-content:first').show();

	$('ul.tabs li').click(function () {
		$('ul.tabs li').removeClass('active');
		$(this).addClass('active');
		$('.tab-content').hide();
		let activeTab = $(this).find('a').attr('href');
		$(activeTab).fadeIn();
		return false;
	});

	// lazy loading bg images (loading when entering the viewport)
	const lazyBackground = document.querySelectorAll('.lazy-bg');
	const bgImgObserver = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) {
				return;
			}
			entry.target.classList.remove('no-bg');
			bgImgObserver.unobserve(entry.target);
		});
	}, {});
	lazyBackground.forEach((bgImg) => bgImgObserver.observe(bgImg));
});

