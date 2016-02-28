$(function(){
	
	var nav = $('nav'),
    header = $('header');
		
		$(window).scroll(function(){
      if($(this).scrollTop() > (header.height() - 50) && nav.hasClass('default')){
        nav.fadeOut('fast', function(){
					$(this).removeClass('default').addClass('fixed').fadeIn('fast');
				});
      } else if($(this).scrollTop() === 0 && nav.hasClass('fixed')){
        nav.removeClass('fixed').addClass('default');
			}
		});

});