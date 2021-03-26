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


$(document).ready(function(){

	$(".shareToFriend .button-orange").click(function(){
		$(".shareToFriend-overlay").css("display", "block");
	});
	$(".shareToFriend-overlay .close").click(function(){
		$(".shareToFriend-overlay").css("display", "none");
	});


});