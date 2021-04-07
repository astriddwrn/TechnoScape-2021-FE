/* Navbar */
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


$(document).ready(function(){


	//HIGHLIGHTS
	var indexBehind2=2;

	var indexMiddle2=0;
	var indexLeft2=3;
	var indexRight2=1;

    function setSlidesNext2(){
        
        $(".highlights .glass").eq(indexBehind2).addClass("behindHigh").removeClass("leftHigh");

        $(".highlights .glass").eq(indexMiddle2).addClass("activeHigh").removeClass("rightHigh");
        $(".highlights .glass").eq(indexLeft2).addClass("leftHigh").removeClass("activeHigh");
        $(".highlights .glass").eq(indexRight2).addClass("backHigh").addClass("rightHigh");
        

        setTimeout(function(){
            $(".behindHigh").animate({
                opacity: 0
            },300, function(){
                $(this).removeClass("behindHigh");
            });

            $(".highlights .glass").each(function(){
                $(this).removeClass("backHigh");
            });
            
        },700);
    }

    function setSlidesPrev2(){
        $(".highlights .glass").eq(indexBehind2).addClass("behindHigh").removeClass("rightHigh");

        $(".highlights .glass").eq(indexMiddle2).addClass("activeHigh").removeClass("leftHigh");
        $(".highlights .glass").eq(indexRight2).addClass("rightHigh").removeClass("activeHigh");
        $(".highlights .glass").eq(indexLeft2).addClass("backHigh").addClass("leftHigh");

        setTimeout(function(){
            $(".behindHigh").animate({
                opacity: 0
            },300, function(){
                $(this).removeClass("behindHigh");
            });

            $(".highlights .glass").each(function(){
                $(this).removeClass("backHigh");
            });
        },700);
    }

	function setDesc2(){
		$(".highlights .description-container div").each(function(){
			$(this).addClass("deactiveHighDesc");
		});

		setTimeout(function(){
			$(".highlights .description-container div").eq(indexMiddle2).removeClass("deactiveHighDesc").addClass("activeHighDesc");
		},500);
	}

    function setDots2(){
		// return;
        $(".highlights .dots").removeClass("activeHighDots");
        $(".highlights .dots").eq(indexMiddle2).addClass("activeHighDots");
    }

	$(".highlights .glass").eq(indexMiddle2).addClass("activeHigh");
	$(".highlights .glass").eq(indexLeft2).addClass("leftHigh");
	$(".highlights .glass").eq(indexRight2).addClass("rightHigh");

	$(setDesc2());

	$(setDots2());

	// next
	$(".highlights .next").click(function(){
		// return;
        indexBehind2 = indexLeft2;
        indexMiddle2+=1;
        indexLeft2+=1;
        indexRight2+=1;
        
        if(indexMiddle2>3){
            indexMiddle2=0;
        }
        if(indexLeft2>3){
            indexLeft2=0;
        }
        if(indexRight2>3){
            indexRight2=0;
        }
           

            $(setSlidesNext2());

			$(setDesc2());

            $(setDots2());
	});

	// prev
	$(".highlights .prev").click(function(){
		// return;
        indexBehind2 = indexRight2;
		indexMiddle2-=1;
		indexLeft2-=1;
		indexRight2-=1;

		if(indexMiddle2<0){
			indexMiddle2=3;
		}
		if(indexLeft2<0){
			indexLeft2=3;
		}
		if(indexRight2<0){
			indexRight2=3;
		}

		$(setSlidesPrev2());

		$(setDesc2());

		$(setDots2());
		
	});

	$('.highlights .carousel-wrapper2').slick({
		arrows: false,
		autoplay: true,
  		autoplaySpeed: 2000,

		dots: true,
    	customPaging: function(slider, i) {
      
      	return '<div class="dotsHigh2" id=' + i + "></div>";
    	},
    	useTransform: true,
    	cssEase: "ease-in-out"
	});

	$('.highlights .carousel-wrapper2').on('afterChange', function(event, slick, currentSlide){   
		$(".highlights .description-container2 div").each(function(){
			$(this).addClass("deactiveHighDesc");
		});
		setTimeout(function(){
			$(".highlights .description-container2 div").eq(currentSlide).removeClass("deactiveHighDesc").addClass("activeHighDesc");
		},300);
	});


	// WHY YOU SHOULD JOIN
	var indexBehind=2;
	var indexMiddle=0;
	var indexLeft=3;
	var indexRight=1;

    function setSlidesNext(){
        
        $(".join .glass").eq(indexBehind).addClass("behindJoin").removeClass("leftJoin");

        $(".join .glass").eq(indexMiddle).addClass("activeJoin").removeClass("rightJoin");
        $(".join .glass").eq(indexLeft).addClass("leftJoin").removeClass("activeJoin");
        $(".join .glass").eq(indexRight).addClass("backJoin").addClass("rightJoin");
        

        setTimeout(function(){
            $(".behindJoin").animate({
                opacity: 0
            },300, function(){
                $(this).removeClass("behindJoin");
            });

            $(".join .glass").each(function(){
                $(this).removeClass("backJoin");
            });
            
        },700);
    }

    function setSlidesPrev(){
        $(".join .glass").eq(indexBehind).addClass("behindJoin").removeClass("rightJoin");

        $(".join .glass").eq(indexMiddle).addClass("activeJoin").removeClass("leftJoin");
        $(".join .glass").eq(indexRight).addClass("rightJoin").removeClass("activeJoin");
        $(".join .glass").eq(indexLeft).addClass("backJoin").addClass("leftJoin");

        setTimeout(function(){
            $(".behindJoin").animate({
                opacity: 0
            },300, function(){
                $(this).removeClass("behindJoin");
            });

            $(".join .glass").each(function(){
                $(this).removeClass("backJoin");
            });
        },700);
    }



    function setDots(){
        $(".join .dots").removeClass("activeJoinDots");
        $(".join .dots").eq(indexMiddle).addClass("activeJoinDots");
    }

	$(".join .glass").eq(indexMiddle).addClass("activeJoin");
	$(".join .glass").eq(indexLeft).addClass("leftJoin");
	$(".join .glass").eq(indexRight).addClass("rightJoin");


	$(setDots());

    

	// next
	$(".join .next").click(function(){
		// return;
        indexBehind = indexLeft;
        indexMiddle+=1;
        indexLeft+=1;
        indexRight+=1;
        
        if(indexMiddle>3){
            indexMiddle=0;
        }
        if(indexLeft>3){
            indexLeft=0;
        }
        if(indexRight>3){
            indexRight=0;
        }
           

            $(setSlidesNext());

            $(setDots());
	});


	// prev
	$(".join .prev").click(function(){
		
        indexBehind = indexRight;
			indexMiddle-=1;
			indexLeft-=1;
			indexRight-=1;

			if(indexMiddle<0){
				indexMiddle=3;
			}
			if(indexLeft<0){
				indexLeft=3;
			}
			if(indexRight<0){
				indexRight=3;
			}

            $(setSlidesPrev());

            $(setDots());
		
	});


	$('.join .carousel-wrapper2').slick({
		arrows: false,
		autoplay: true,
  		autoplaySpeed: 2000,

		dots: true,
    	customPaging: function(slider, i) {
      
      	return '<div class="dots2" id=' + i + "></div>";
    	},
    	useTransform: true,
    	cssEase: "ease-in-out"
	});
	
	/* Timeline */
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


	/* FAQ */
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


	//   SHARE TO FRIEND
	$(".shareToFriend .button-orange").click(function(){
		$(".shareToFriend-overlay").css("display", "block");
	});
	$(".shareToFriend-overlay .close").click(function(){
		$(".shareToFriend-overlay").css("display", "none");
	});


});
