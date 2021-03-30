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

	
    

	// NEXT
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



	// SHARE TO FRIEND
	$(".shareToFriend .button-orange").click(function(){
		$(".shareToFriend-overlay").css("display", "block");
	});
	$(".shareToFriend-overlay .close").click(function(){
		$(".shareToFriend-overlay").css("display", "none");
	});


});
