$(document).ready(function () {
	var lastCall = 0;

	$('.bullet > label').click(function() {
		var now = Date.now();
		if (now - lastCall > 500) {
			console.log($('#slide' + $(this).attr('for')).position().left);

			$('.slides').animate({
				marginLeft: -$('#slide' + $(this).attr('for')).position().left
			}, 300);
			lastCall = now;
		}
	});
});

function slideSwitch(slider, idSlide) {

}