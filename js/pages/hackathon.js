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
		$("#mentors-technology").hide();
		$("#mentors-business").hide();
		$("#mentors-design").fadeIn(800);
	});
	$("#mentors-technology-button").click(function () {
		$("#mentors-design").hide();
		$("#mentors-business").hide();
		$("#mentors-technology").fadeIn(800);
	});
	$("#mentors-business-button").click(function () {
		$("#mentors-technology").hide();
		$("#mentors-design").hide();
		$("#mentors-business").fadeIn(800);
	});
});
  
/* Mentors Carousel */

/* Jury */