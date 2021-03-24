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

/* Time Trigger on Hackathon-Timeline */
var closeRegistration = new Date("June 20, 2021 23:59:59").getTime();
var technicalMeeting = new Date("June 24, 2021 23:59:59").getTime();
var competitionDay = new Date("June 26, 2021 23:59:59").getTime();

// Update the count down every 1 second
var timelineHackathonTrigger = setInterval(function () {
	/* Get Today's date and time */
	var now = new Date().getTime();
	var triggerCloseregistration = closeRegistration - now;
	var triggerTechnicalmeeting = technicalMeeting - now;
	var triggercompetitionDay = competitionDay - now;

	if (triggerCloseregistration < 0) {
		$("#timeline-circle1").addClass("timeline-circle-active");
		$("#timeline-vertical1").addClass("timeline-vertical-active");
	}
	if (triggerTechnicalmeeting < 0) {
		$("#timeline-circle2").addClass("timeline-circle-active");
		$("#timeline-vertical2").addClass("timeline-vertical-active");
	}
	if (triggercompetitionDay < 0) {
		$("#timeline-circle3").addClass("timeline-circle-active");
	}

	/* Updates every 1 minutes, biar ga lag? */
}, 60000);