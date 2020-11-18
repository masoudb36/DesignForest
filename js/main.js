$(document).ready(function ($) {
	$('.search__btn').click(function (e) {
		e.preventDefault();
		let img = $('.search__btn img');
		let $this = $(this);
		let form = $('.search form');
		console.log(form);
		if ($this.attr('data-click') == 0) {
			$this.addClass('search__anime');
			img.css('opacity', '0');
			form.animate(
				{
					top: '10rem',
					opacity: '1',
				},
				500
			);
			$this.attr('data-click', '1');
		} else {
			$this.removeClass('search__anime');
			img.css('opacity', '1');
			$this.attr('data-click', '0');
			form.animate(
				{
					top: '-7rem',
					opacity: '0',
				},
				500
			);
			//form.css('visibility','hidden');
		}
	});

	$('.login__btn').click(function (e) {
		e.preventDefault();
		let $this = $(this);
		let modal = $('.login__modal');
		modal.parent().addClass('login__modal--wrapper');
		modal.addClass('login__modal--out');
	});
	$('.login__modal--close').click(function (e) {
		e.preventDefault();
		let modal = $('.login__modal');
		modal.fadeIn('slow');
		modal.removeClass('login__modal--out');
		modal.parent().removeClass('login__modal--wrapper');
	});

	$('#register').click(function (e) {
		e.preventDefault();
		let register = $('.login__signout');
		let login = $('.login__signin');
		register.removeClass('move_left');
		login.addClass('move_right');
	});

	$('#login').click(function (e) {
		e.preventDefault();
		$('.login__signout').addClass('move_left');
		$('.login__signin').removeClass('move_right');
	});

	$('.menu__responsive').click(function (e) {
		e.preventDefault();
		let $this = $(this);
		if ($this.attr('data-click') == 0) {
			$('.menu > ul').css('transform', 'translateX(0)');
			$this.addClass('menu__responsive--active');
			$this.attr('data-click', '1');
		} else {
			$this.removeClass('menu__responsive--active');
			$('.menu > ul').css('transform', 'translateX(100%)');
			$this.attr('data-click', '0');
		}
	});

	$('.menu li>a').click(function (e) {
		e.preventDefault();
		let items = $('.menu a');
		for (let i = 0; i < items.length; i++) {
			items[i].classList.remove('active');
		}
		$(this).addClass('active');
	});

	$('.slider__dots--item').click(function (e) {
		e.preventDefault();
		let dots = $('.slider__dots--item');
		let sliders = $('.slider__item');
		for (let i = 0; i < dots.length; i++) {
			dots[i].classList.remove('slider__dots--active');
		}
		let index = $(this).attr('data-dot');
		console.log(sliders);
		sliders[index - 1].style.display = 'block';
		$(this).addClass('slider__dots--active');
	});

	$('.carousel').carousel();
	$('.owl-carousel').owlCarousel({
		items:13,
		loop:false,
		margin:30,
		responsive:{
			0:{
				items:1
			},
			400 : {
				items:2
			},
			600 : {
				items:3
			},
			900:{
				items:4
			},
			
			1000:{
				items:6
			},
		}
	});

	$('.menus li>a').on('click', function (ev) {
		if (this.hash !== '') {
			ev.preventDefault();
			const hash = this.hash;
			console.log($(hash).offset().top);
			$('html , body').animate(
				{
					scrollTop: $(hash).offset().top-90,
				},
				800
			);
		}
	});
});
