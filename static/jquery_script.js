$(document).ready(function(){
	$('.toggle .horisontal').click(function(){
		$('.contents').toggleClass('hidden');
		$('main').toggleClass('fullScreen');
		
	})
	$('.toggle .vertical').click(function(){
		$('.contents').toggleClass('fullScreen');
	})
})
