// let prevPosition = $(window).scrollTop();
// $(window).scroll(() => {
// 	let currPosition = $(window).scrollTop();
// 	if (prevPosition > currPosition) {
// 		$("#navbar").removeClass("scroll-down");
// 		$("#navbar").addClass("scroll-up");
// 	} else {
// 		$("#navbar").removeClass("scroll-up");
// 		$("#navbar").addClass("scroll-down");
// 	}
// 	if (currPosition > 700) {
// 		$("#navbar").addClass("change-bg");
// 	} else {
// 		$("#navbar").removeClass("change-bg");
// 	}
// 	prevPosition = currPosition;
// });


// // Why You Should Join
// $(document).ready(function(){
// 	$('.carousel-wrapper').slick({
// 		centerMode: true,
// 		focusOnSelect: true,
// 		slidesToShow: 3,
// 		dots: true,
//   		arrows: true,
//   		swipe: true,
// 		infinite: true,
// 		pauseOnFocus: false,
//         pauseOnHover: false,
// 		prevArrow: $('.prev-container'),
// 		nextArrow: $('.next-container')
// 	});



// 	function setSlideVisibility() {
// 		var invisibleSlides = $('.slick-slide[aria-hidden="true"]');
// 		var visibleSlides = $('.slick-slide[aria-hidden="false"]');
// 		$(visibleSlides).each(function() {
// 		  $(this).animate({
// 			opacity: 1 ,
// 		}, 400);
// 		});
// 		$(visibleSlides).first().prev().animate({
// 			opacity: 0,
// 		}, 400);
// 		$(invisibleSlides).css('opacity', 0);
// 	  }

// 	  $(setSlideVisibility());
	  
// 	  $('.carousel-wrapper').on('afterChange', function() {
// 		setSlideVisibility();
// 	  });


//   });


$(document).ready(function(){
	$(".join .glass").each(function(){
		$(this).addClass("invisibleJoin");
	});

	var indexMiddle=0;
	var indexLeft=3;
	var indexRight=1;

	$(".join .glass").eq(indexMiddle).removeClass("invisibleJoin").addClass("activeJoin");
	$(".join .glass").eq(indexLeft).removeClass("invisibleJoin").addClass("leftJoin");
	$(".join .glass").eq(indexRight).removeClass("invisibleJoin").addClass("rightJoin");

	$(".join .glass").each(function(){
		$(this).animate({
		opacity: 1,
		}, 400)
	});

	// next
	$(".join .next").click(function(){
		$(".join .glass").each(function(){
			$(this).animate({
			opacity: 0,
			}, 400)
		});

		$(".join .glass").eq(indexMiddle).removeClass("activeJoin");
		$(".join .glass").eq(indexLeft).removeClass("leftJoin");
		$(".join .glass").eq(indexRight).removeClass("rightJoin");

		$(".join .glass").each(function(){
			$(this).addClass("invisibleJoin");
		});

		indexMiddle+=1;
		indexLeft+=1;
		indexRight+=1;

		if(indexMiddle>3){
			indexMiddle=0;
		}
		if(indexLeft>3){
			indexLeft=0;
		}
		if(indexRight>3){
			indexRight=0;
		}


		$(".join .glass").eq(indexMiddle).removeClass("invisibleJoin").addClass("activeJoin");
		$(".join .glass").eq(indexLeft).removeClass("invisibleJoin").addClass("leftJoin");
		$(".join .glass").eq(indexRight).removeClass("invisibleJoin").addClass("rightJoin");

		$(".join .glass").each(function(){
			$(this).animate({
			opacity: 1,
			}, 400)
		});


	});


	// prev
	$(".join .prev").click(function(){
		$(".join .glass").eq(indexMiddle).removeClass("activeJoin");
		$(".join .glass").eq(indexLeft).removeClass("leftJoin");
		$(".join .glass").eq(indexRight).removeClass("rightJoin");

		$(".join .glass").each(function(){
			$(this).addClass("invisibleJoin");
		});

		indexMiddle-=1;
		indexLeft-=1;
		indexRight-=1;

		if(indexMiddle<0){
			indexMiddle=3;
		}
		if(indexLeft<0){
			indexLeft=3;
		}
		if(indexRight<0){
			indexRight=3;
		}

		$(".join .glass").eq(indexMiddle).removeClass("invisibleJoin").addClass("activeJoin");
		$(".join .glass").eq(indexLeft).removeClass("invisibleJoin").addClass("leftJoin");
		$(".join .glass").eq(indexRight).removeClass("invisibleJoin").addClass("rightJoin");


	});


	// $(".join .glass").eq(1).removeClass("invisibleJoin").addClass("activeJoin")
	// var indexSlide=$(".join .glass").index();
	
	// if(indexSlide==1){
	// 	$(this).removeClass("invisibleJoin");
	// }
	// function activee(){
	// 	$(this).removeClass("invisibleJoin");
	// 	$(this).addClass("activeJoin");
	// }

	// if($(".glass").eq()==1){
	// 	activee;
	// }
	

});