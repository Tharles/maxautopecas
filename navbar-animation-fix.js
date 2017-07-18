$(document).ready(function(){
	$('#collapse-navbar').on('show.bs.collapse',function(){
		$('.maxauto_banner').css('transform','translate(-50%,-10%)');

	});
	$('#collapse-navbar').on('hidden.bs.collapse',function(){
		$('.maxauto_banner').css('transform','translate(-50%,-50%)');

	});
	
	$('#collapse-navbar').on('click', function(){
		if ( $(window).width() < 768) {
			$('.navbar-toggle').click();
	}
	});
	



});




