$( document ).ready(function() {

	$( ".toogle_sub_menu" ).click(function() {
		$(".submenu").slideToggle();
	});
	//Active director
	$('.submenu li a').on('click', function() {
		$('.submenu li a').removeClass('active');
		$(this).addClass('active');
	});
	//Bio btn
	$( ".bio_btn" ).click(function() {
		$('.bio').toggleClass('bio_active');
		$(".bio_block").slideToggle();
	});
	// Play
	$('.video-icon').click(function(e)
	{
		if ( $(window).width() > 1024 ){
			e.preventDefault();
			$.okvideo({
				source: $(this).attr('vimeo-id'),
				volume: 50,
				loop: false,
				hd: true,
				adproof: false,
				annotations: false,
				controls: true,
				onFinish: function()
				{
					$('.close_video').removeClass('close_visible');
					$('#okplayer').fadeOut(function()
					{
						$('#okplayer').remove();
					});
				},
				onReady: function()
				{
					$('.close_video').addClass('close_visible');
				}
			});
			$('#okplayer').addClass('video_player');
		}
	});
	// Mobile menu icon
	$(".openNav").click(function() {
		$(this).toggleClass("open");
		$(".sidebar").toggle(300).css('display', 'flex');
	});

	//Duble click tile
	$(".tile").click(function() {
		if ($(window).width() < 1023 && $(this).hasClass('tuch')) {
			$('.tile').addClass('tuch');
			$(this).removeClass('tuch');
		    return false
		} else {
			return true
		}
	});


	$(window).resize(function(){
		$(".tile").on( 'click', function() {
			if ($(window).width() < 1023 && $(this).hasClass('tuch')) {
				$(this).removeClass('tuch');
			    return false
			} else {
				return true
			}
		});
	});
})