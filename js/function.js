$(function(){
		/*menu*/
		$('.img-menu').click(function(){
			
			$('.menu-mobile').slideToggle("slow");
		});

		/*deslizamento menu*/	
		$('.seletor-ancora').click(function () {
	        var alvo = $(this).attr('href').split('#').pop();
	        $('html, body').animate({scrollTop: $('#' + alvo).offset().top}, 1500);
	        $('.menu-mobile').slideUp();
	        return false;
    	});
    	
		/*evento scroll */
 	
		var nav = $('.menu-desktop');   
		$(window).scroll(function () { 
			var windowOffY = $(window).scrollTop();
			var windowHeight = $(window).height();

			$('.sessao').each(function(){
				var elOffY = $(this).offset().top;
			if(elOffY+30 < (windowOffY + windowHeight) && 
				elOffY+30+$(this).height() > windowOffY){
					$('a').css('color','#fff');
					var target = $(this).attr('target');
					$('.'+target).css('color','#555');
					return;
				}
			});

			if ($(this).scrollTop() > 380) { 
				nav.css('position','fixed').css('top',0).css('background-color','rgba(57,205,205,0.6)');
			} else { 
				nav.css("position","static").css('background-color','#39cdcd');; 
			}
		});  

		/*evento barra superior*/
 			setInterval(function(){
			 	$('.barra-superior spam').fadeOut(2000, function(){
			 		$('.barra-superior spam').fadeIn(1000)
			 	});
			 },3000);
});