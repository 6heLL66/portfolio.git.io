
$('.scroll').on('click',function(){
	window.scrollTo({
		top:10000,
		behavior:"smooth"
	});
});



$(function () {

$(window).scroll(function(){

	if($(window).scrollTop() > 300){
		$('.verh').fadeIn();
	}
	else{
		$('.verh').fadeOut();
	}
});




});


$('.verh').on('click',function(){
window.scrollTo({
		top:0,
		behavior:"smooth"
	});

});


$('.sub').on('click', function(){
	$('.name').val('') ,
	$('.message').val('') ;
});
