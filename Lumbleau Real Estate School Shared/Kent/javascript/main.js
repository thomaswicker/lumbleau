// general functionality

jQuery(function($){

	$("#view-menu").removeClass("open");
	$("#main_nav").removeClass("open").css('display','none');

	$("#view-menu").on("click", function(){
		$(this).toggleClass("open");
		$("#main_nav").toggleClass("open").slideToggle();
	});


});//end jQuery

