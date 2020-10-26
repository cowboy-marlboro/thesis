$(document).ready(function(){
	$('.burger-menu').click(function(e) {
        $('.burger-menu,.list').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.linkOne,.linkTwo,.linkThree,.linkFour').click(function(e){
		$('.burger-menu,.list').removeClass('active');
		$('body').removeClass('lock');
	});
});
