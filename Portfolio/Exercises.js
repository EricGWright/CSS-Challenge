$(function(){
  $(".fancyYT").fancybox({
 	'padding'		: 0,
	'autoScale'		: false,
	'transitionIn'	: 'none',
	'transitionOut'	: 'none',
//	'title'			: this.title,
	'width'			: 640,
	'height'		: 360,
	'type'			: 'swf'
	});

$('.dropdown').hide();

$('#nav li').hover(
	function(){
		$(this).find('.dropdown').fadeIn('slow');
	},
	function(){
		$(this).find('.dropdown').fadeOut('slow');
	});//end of hover

$('#changebg').click(function(){
   $('body').addClass("bggreen");
	});//end click

$('#changebk').click(function(){
   $('body').removeClass("bggreen");
	});//end click

});