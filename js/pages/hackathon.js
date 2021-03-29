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

$("body").mousemove((e) => {
	let x = (e.pageX * -1) / 150;
	let y = (e.pageY * -1) / 150;
	if (e.pageX === 0) x = -0.5;
	$(".star").css(
		"transform",
		"translate(" + x + 750 + "px, " + y + 100 + "px)",
	);
});