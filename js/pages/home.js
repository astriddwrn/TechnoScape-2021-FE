let scrollPrevPosition = $(window).scrollTop();
$(window).scroll(() => {
	let currPosition = $(window).scrollTop();
	const mediaQuery = window.matchMedia("(min-width: 768px)");
	if (mediaQuery.matches) {
		if (scrollPrevPosition > currPosition) {
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
		scrollPrevPosition = currPosition;
	}
});

const navSlide = () => {
	const nav = document.querySelector("nav");
	const burger = document.querySelector(".burger");

	const navLinks = document.querySelector(".nav-links");
	const li = document.querySelectorAll(".nav-links li");
	burger.addEventListener("click", () => {
		navLinks.classList.toggle("nav-active");
		burger.classList.toggle("toggle");
		li.forEach((link, index) => {
			if (link.style.animation) link.style.animation = "";
			else {
				link.style.animation = `navLinksFade 0.5s ease forwards ${
					index / 7 + 0.3
				}s`;
			}
		});
	});
};
navSlide();

const setBlue = (input) => {
	input.classList.remove("set-border-white");
	input.nextElementSibling.classList.remove("set-text-white");
};

const setWhiteWhenFilled = (input) => {
	if (input.value !== "") {
		input.classList.add("set-border-white");
		input.nextElementSibling.classList.add("set-text-white");
	}
};

const validateEmail = (input) => {
	console.log(input);

	const regex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

	if (regex.test(input.value)) {
		input.classList.remove("is-invalid");
	} else {
		input.classList.add("is-invalid");
	}
};

$("body").mousemove((e) => {
	let x = (e.pageX * -1) / 150;
	let y = (e.pageY * -1) / 150;
	if (e.pageX === 0) x = -0.5;
	$(".star").css(
		"transform",
		"translate(" + x + 750 + "px, " + y + 100 + "px)",
	);
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
let prevPosition = {
	top: $(window).scrollTop(),
	bottom: $(window).scrollTop() + $(window).height(),
};

let videoPositionTop = $("#video").position().top;
let planetPosition = {
	top: 10,
	bottom: 10,
};
let planetMovingSpeed = 2;

$(window).scroll(() => {
	let currPosition = {
		top: $(window).scrollTop(),
		bottom: $(window).scrollTop() + $(window).height(),
	};

	// Navbar
	if (prevPosition.top > currPosition.top) {
		$("#navbar").removeClass("scroll-down");
		$("#navbar").addClass("scroll-up");
	} else {
		$("#navbar").removeClass("scroll-up");
		$("#navbar").addClass("scroll-down");
	}
	if (currPosition.top > 700) {
		$("#navbar").addClass("change-bg");
	} else {
		$("#navbar").removeClass("change-bg");
	}

	//Video Promotional
	if (
		currPosition.bottom > videoPositionTop &&
		currPosition.top <= videoPositionTop + $(window).height()
	) {
		if (currPosition.top > prevPosition.top) {
			planetPosition.top += planetMovingSpeed;
			planetPosition.bottom -= planetMovingSpeed;
		} else {
			planetPosition.top -= planetMovingSpeed;
			planetPosition.bottom += planetMovingSpeed;
		}
		document.documentElement.style.setProperty(
			"--top-position",
			planetPosition.top + "px",
		);
		document.documentElement.style.setProperty(
			"--bottom-position",
			planetPosition.bottom + "px",
		);
	}

	prevPosition.top = currPosition.top;
	prevPosition.bottom = prevPosition.bottom;
});

// Video Promotional Video Play
const playVideo = () => {
	$("#play-button").hide();
	$("#vid").show();
	$("#vid")[0].src += "&autoplay=1";
};
