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

/* Mentors */
/* mentorsButton */
$(document).ready(function(){
    $("#mentors-design-button").click(function () {
		$("#mentors-design-button").addClass("mentors-buttons-active");
		$("#mentors-technology-button").removeClass("mentors-buttons-active");
		$("#mentors-business-button").removeClass("mentors-buttons-active");
	});
	$("#mentors-technology-button").click(function () {
		$("#mentors-technology-button").addClass("mentors-buttons-active");
		$("#mentors-design-button").removeClass("mentors-buttons-active");
		$("#mentors-business-button").removeClass("mentors-buttons-active");
	});
	$("#mentors-business-button").click(function () {
		$("#mentors-business-button").addClass("mentors-buttons-active");
		$("#mentors-technology-button").removeClass("mentors-buttons-active");
		$("#mentors-design-button").removeClass("mentors-buttons-active");
    });
});

/* mentorsCardShow */
$(document).ready(function(){
	$("#mentors-design-button").click(function () {
		/* Normal Display */
		$("#mentors-technology").hide();
		$("#mentors-business").hide();
		$("#mentors-design").fadeIn(800);
		/* Tablet Display */

		/* Mobile Display */
		$('#design1-img').attr('src','/assets/img/Hackathon/mentors-design-1.svg');
		$('div#design1-title').text('Rose Bush');
		$('div#design1-text').text('UX Researcher at ABC Company');

		$('#design2-img').attr('src','/assets/img/Hackathon/mentors-design-2.svg');
		$('div#design2-title').text('John Doe');
		$('div#design2-text').text('UI Designer at ABC Company');

		$('#design3-img').attr('src','/assets/img/Hackathon/mentors-design-3.svg');
		$('div#design3-title').text('Olive Yew');
		$('div#design3-text').text('UI Designer at ABC Company');
	});

	$("#mentors-technology-button").click(function () {
		/* Normal Display */
		$("#mentors-design").hide();
		$("#mentors-business").hide();
		$("#mentors-technology").fadeIn(800);
		/* Tablet Display */

		/* Mobile Display */
		$('#design1-img').attr('src','/assets/img/Hackathon/mentors-design-3.svg');
		$('div#design1-title').text('Olive Yew');
		$('div#design1-text').text('UI Designer at ABC Company');

		$('#design2-img').attr('src','/assets/img/Hackathon/mentors-design-1.svg');
		$('div#design2-title').text('Rose Bush');
		$('div#design2-text').text('UX Researcher at ABC Company');

		$('#design3-img').attr('src','/assets/img/Hackathon/mentors-design-2.svg');
		$('div#design3-title').text('John Doe');
		$('div#design3-text').text('UI Designer at ABC Company');
	});

	$("#mentors-business-button").click(function () {
		/* Normal Display */
		$("#mentors-technology").hide();
		$("#mentors-design").hide();
		$("#mentors-business").fadeIn(800);
		/* Tablet Display */

		/* Mobile Display */
		$('#design1-img').attr('src','/assets/img/Hackathon/mentors-design-2.svg');
		$('div#design1-title').text('John Doe ');
		$('div#design1-text').text('UI Designer at ABC Company');

		$('#design2-img').attr('src','/assets/img/Hackathon/mentors-design-3.svg');
		$('div#design2-title').text('Olive Yew');
		$('div#design2-text').text('UI Designer at ABC Company');

		$('#design3-img').attr('src','/assets/img/Hackathon/mentors-design-1.svg');
		$('div#design3-title').text('Rose Bush');
		$('div#design3-text').text('UX Researcher at ABC Company');
	});
});
  


/* Mentors Carousel */
$(document).ready(function(){
	$('.mobile-carousel').slick({
		arrows: false,
		autoplay: false,
		autoplaySpeed: 2000,
		infinite: false,
		dots: true,
		customPaging: function(slider, i) {
	  
		  return '<div class="dots2" id=' + i + "></div>";
		},
		useTransform: true,
		cssEase: "ease-in-out"
	});
});

/* Jury */


