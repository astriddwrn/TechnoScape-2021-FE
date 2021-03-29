

$(document).ready(function(){

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

    

	// NEXT
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

        // if (window.matchMedia('(max-width: 762px)').matches) {
            
           
        //     $(".join .glass").eq(indexLeft).animate({
        //         opacity: 0
        //     },1000, function(){
        //         $(".join .glass").eq(indexLeft).removeClass("activeJoin");
        //         $(".join .glass").eq(indexMiddle).addClass("activeJoin");
        //     });
            

        //     $(setDots());

        // } else {
            //...
            
           

            $(setSlidesNext());

            $(setDots());
        // }
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


});