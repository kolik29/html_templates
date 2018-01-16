$(document).ready(function() {
	onScroll();

	$('.skill-bar').each(function() {
		$(this).children().children('.js-subbar').css('width', parseInt($(this).children().children('#js-percent').text()) + '%');
	});

	$('.items > a').click(function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body, html').animate({
			scrollTop: (top - 101)
		}, 1000);

		$('.items > a').each().removeClass('active');
		$(this).addClass('active');
	});

	$(document).on('scroll', onScroll);
	$('a').click(function(e){
		e.preventDefault();
		$(document).off('scroll');
		$(menu_selector + ' a.active').removeClass('active');
		$(this).addClass('active');
		var hash = $(this).attr('href');
		var target = $(hash);
		$('html, body').animate({
		    scrollTop: (target.offset().top - 101)
		}, 500, function(){
			window.location.hash = hash;
			$(document).on('scroll', onScroll);
		});
	});

	$('#btn-contact-us').click(function() {
		var top = $('#contact').offset().top;
		$('body, html').animate({
			scrollTop: (top - 101)
		}, 1000);
	});
});

var menu_selector = '.items';
function onScroll(){
	var scroll_top = $(document).scrollTop();

	var bckg_opacity = ((100 / $('#home').height()) * (scroll_top / 2) <= 85)? (100 / $('#home').height()) * (scroll_top / 2) : 85;

	scroll_top += 101;

	$('header').css('background-color', 'rgba(255, 255, 255, ' + bckg_opacity / 100 + ')');

	$(menu_selector + ' a').each(function(){
		var hash = $(this).attr('href');
		var target = $(hash);
		if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
			$(menu_selector + ' a.select').removeClass('select');
			$(this).addClass('select');
		} else {
			$(this).removeClass('select');
		}
	});
}