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
		$("#mentors-design").show();
		$("#mentors-technology").hide();
	 	$("#mentors-business").hide();
	});
	$("#mentors-technology-button").click(function () {
		$("#mentors-technology").show();
		$("#mentors-design").hide();
	 	$("#mentors-business").hide();
	});
	$("#mentors-business-button").click(function () {
		$("#mentors-business").show();
		$("#mentors-technology").hide();
	 	$("#mentors-design").hide();
	});
});
  
/* Mentors Carousel */
