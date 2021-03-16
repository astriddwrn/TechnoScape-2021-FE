let prevPosition = $(window).scrollTop();
$(window).scroll(() => {
	let currPosition = $(window).scrollTop();
	if (prevPosition > currPosition) {
		$("#navbar").removeClass("scroll-down");
		$("#navbar").addClass("scroll-up");
	} else {
		$("#navbar").removeClass("scroll-up");
		$("#navbar").addClass("scroll-down");
	}
	if (currPosition > 700) {
		$("#navbar").addClass("change-bg");
	} else {
		$("#navbar").removeClass("change-bg");
	}
	prevPosition = currPosition;
});


// Why You Should Join
$(document).ready(function(){
	$('.carousel-wrapper').slick({
		centerMode: true,
		focusOnSelect: true,
		slidesToShow: 3,
		dots: true,
  		arrows: true,
  		swipe: true,
  		// swipeToSlide: false,
		infinite: true,
		pauseOnFocus: false,
        pauseOnHover: false,
		prevArrow: $('.prev-container'),
		nextArrow: $('.next-container')
	});

	// function removeLeftSlide(){
	// 	var center = $('.slick-center');
	// 	var centerIndx = $('.slick-center[slick-index]' - 1);

	// 	$(centerIndx).hide();
	// };

	// $('next-container').click(function(){
	// 	$(removeLeftSlide());
	// });



	function setSlideVisibility() {
		var invisibleSlides = $('.slick-slide[aria-hidden="true"]');
		//Find the visible slides i.e. where aria-hidden="false"
		var visibleSlides = $('.slick-slide[aria-hidden="false"]');
		//Make sure all of the visible slides have an opacity of 1
		$(visibleSlides).each(function() {
		  $(this).animate({
			opacity: 1 ,
		}, 400);
		});
		//Set the opacity of the first and last partial slides.
		$(visibleSlides).first().prev().animate({
			opacity: 0,
		}, 400);
		// $(visibleSlides).last().next().animate({
		// 	opacity: 0,
		// }, 200);

		$(invisibleSlides).css('opacity', 0);
	  }
	  
	  

	  $(setSlideVisibility());
	  
	//   $('.carousel-wrapper').on('beforeChange', function() {
	// 	$('.slick-slide').each(function() {
			
	// 		$(this).css('opacity', 1);
	// 		$(invisibleSlides).removeClass('invisible');
	// 	});
	//   });
	  
	  $('.carousel-wrapper').on('afterChange', function() {
		setSlideVisibility();
	  });


  });