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
	let x = (e.pageX * -1) / 50;
	let y = (e.pageY * -1) / 50;
	$(".star").css(
		"transform",
		"translate(" + x + 750 + "px, " + y + 100 + "px)",
		// "translateY(" + y + 100 + "px)",
	);
	// $(".star").css("left", x + 750 + "px");
	// $(".star").css("top", y + 100 + "px");
});
$(".cards").mouseenter((e) => {
	if (
		$(".card-1").hasClass("card1-move-up") ||
		$(".card-2").hasClass("card2-move-up")
	) {
		$(".card-1").removeClass("card1-move-up");
		$(".card-2").removeClass("card2-move-up");
	}
	$(".card-1").addClass("card1-move-down");
	$(".card-2").addClass("card2-move-up");
});
$(".cards").mouseleave((e) => {
	$(".card-1").addClass("card1-move-up");
	$(".card-1").removeClass("card1-move-down");
	$(".card-2").addClass("card2-move-down");
	$(".card-2").removeClass("card2-move-up");
});
