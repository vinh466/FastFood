$(window).on('load', function(event) {
	$('body').removeClass('preloading');
	$('.preloader').delay(500).fadeOut('fast');
});