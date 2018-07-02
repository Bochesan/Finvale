$(document).ready(function(){

	siteHeight();

	$(window).resize(function(){
		siteHeight();
	});

	$('.mobile_menu_btn').click(function(){
		$('header nav').toggle();
		$('header .about_company').toggle();
		$('header .how_start').toggle();
		$(this).toggleClass('active');
		$('.about_company').toggleClass('active');
		return false;
	});

	$(window).resize(function(){
		if ($(window).width() > 768) {
			$('header nav').show();
			$('header .about_company').show();
			$('header .how_start').show();
		}
		else {
			$('header nav').hide();
			$('header .about_company').hide();
			$('header .how_start').hide();
		}
	});

/*	$('.login_btn a').click(function(){
		$('#authorization_popup').show();
		return false;
	});

	$('.mobile_login').click(function(){
		$(this).addClass('active');
		$('#authorization_popup').show();
		return false;
	});*/

	$('#prt_carousel .carousel').owlCarousel({
		loop: false,
		margin: 40,
		nav: true,
		responsive:{
	        0:{
	            items:1
	        },
	        380:{
	            items:2
	        },
	        520:{
	            items:3
	        },
	        900:{
	            items:4
	        },
	        1180:{
	            items:5
		   }
    	},
    	autoplay: true,
	    autoplayTimeout: 5500
	});

	$(".phone_form .input").mask("+7 (999) 999-9999");
	$(".write_code").mask("* * * *");

	$('.btn_confirm_cb').click(function(){
		$('.confirm_block').hide();
		$('.write_block').show();
		return false;
	});

	heightMenu();

	$(window).resize(function(){
		heightMenu();
	});

	$('.cpb-1').click(function(){
		if ($(window).width() < 768) {
			$('.controls_profil_panel').hide();
			$('#profil_form').show();
			return false;
		}
	});

	$(".calc_middle_line.calc_line .num_input").keyup(function(){
		cou=$(this).val();
		cou=parseFloat(cou);
		$(this).val(cou);
		if ($(this).val()==='NaN') {
			$(this).val(1);
			cou=1;
		}
		if (cou < 1) cou=1;
		if (cou > 9999) cou=9999;
		$(this).val(cou);
	});

	$('.sell_buy_btn').click(function(){
		$('.sell_buy_btn').removeClass('active');
		$(this).addClass('active');
		$('.calc_popup').hide();
		$(this).children('.calc_popup.first_step').show();
		return false;
	});

	
	$('.calc_btn').click(function(){
		$('.calc_popup').hide();
		$(this).parent().parent().parent().children('.second_step').show();
		return false;
	});

	$('.calc_close').click(function(){
		$('.sell_buy_btn').removeClass('active');
		$('.calc_popup').hide();
		return false;
	});

	$('.calc_confirm').click(function(){
		$('.sell_buy_btn').removeClass('active');
		$('.calc_popup').hide();
		return false;
	});

	$('.br_more_info').click(function(){
		$(this).toggleClass('active');
		$(this).parent().parent('.br_head').toggleClass('active');
		$(this).parent().parent('.br_head').parent('.broker_row').toggleClass('active');
		$(this).parent().parent('.br_head').parent('.broker_row').children('.br_information').toggle();
		return false;
	});

	$('.close_br_information').click(function(){
		$('.br_more_info').removeClass('active');
		$('.broker_row').removeClass('active');
		$('.bri_section').removeClass('active');
		$('.br_information').hide();
		$('.bri_detail_block').hide();
		return false;
	});

	$('.bri_line').click(function(){
		$(this).parent().toggleClass('active');
		$(this).parent().children('.bri_detail_block').toggle(400);
		return false;
	});

	scrollFunc();

	$(window).resize(scrollFunc);

	$('.head_col a').click(function(){
		$('.head_col a').removeClass('active');
		$(this).addClass('active');
		return false;
	});

	$('.see_more_bc').click(function(){
		$(this).toggleClass('active');
		$(this).parent().toggleClass('active');
		return false;
	});

});

function siteHeight() {
	var min_height_window = $(window).height();
	$('.site_bg').css({'min-height' : min_height_window});
}

function heightMenu() {
	var height_main = $('.site_bg').height();
	$('header').height(height_main - 50);
}
function scrollFunc() {
	if ($(window).width() > 1180) {
		$(".ssl_body").mCustomScrollbar({
			scrollButtons:{ enable: true }
		});
	}
	else {
		$(".ssl_body").mCustomScrollbar("destroy");
	}
}