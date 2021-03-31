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


$(document).ready(function () {
    $('.question .question-top').click(function () {
        $(this).next('.answer').slideToggle();
		$(this).parent().find('img').toggle();
    });
});

var currPagenumb = 1;
let currPagestring = "1 of 3";

$(document).ready(function () {
	$('#afterpage').click(function () {
		if (currPagenumb == 1) {
			currPagestring = "2 of 3";
			$('#currpage').html(currPagestring);
			currPagenumb = 2;
			$("#faqPage1").addClass("faq-none");
			$("#faqPage2").removeClass("faq-none");
			$("#faqPage3").addClass("faq-none");
		} else if (currPagenumb == 2) {
			currPagestring = "3 of 3";
			$('#currpage').html(currPagestring);
			currPagenumb = 3;
			$("#faqPage1").addClass("faq-none");
			$("#faqPage2").addClass("faq-none");
			$("#faqPage3").removeClass("faq-none");
		}
	});
	$('#beforepage').click(function () {
		if (currPagenumb == 2) {
			currPagestring = "1 of 3";
			$('#currpage').html(currPagestring);
			currPagenumb = 1;
			$("#faqPage1").removeClass("faq-none");
			$("#faqPage2").addClass("faq-none");
			$("#faqPage3").addClass("faq-none");
		} else if (currPagenumb == 3) {
			currPagestring = "2 of 3";
			$('#currpage').html(currPagestring);
			currPagenumb = 2;
			$("#faqPage1").addClass("faq-none");
			$("#faqPage2").removeClass("faq-none");
			$("#faqPage3").addClass("faq-none");
		}
	});
});
