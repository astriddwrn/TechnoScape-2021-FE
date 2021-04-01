let prevPosition = $(window).scrollTop();
$(window).scroll(() => {
	let currPosition = $(window).scrollTop();
	const mediaQuery = window.matchMedia("(min-width: 768px)");
	if (mediaQuery.matches) {
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
