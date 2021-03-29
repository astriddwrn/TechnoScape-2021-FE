

$(document).ready(function(){
	$(".join .glass").each(function(){
		$(this).addClass("invisibleJoin");
	});

	var indexMiddle=0;
	var indexLeft=3;
	var indexRight=1;

	$(".join .glass").eq(indexMiddle).removeClass("invisibleJoin").addClass("activeJoin");
	$(".join .glass").eq(indexLeft).removeClass("invisibleJoin").addClass("leftJoin");
	$(".join .glass").eq(indexRight).removeClass("invisibleJoin").addClass("rightJoin");

	$(".join .glass").each(function(){
		$(this).animate({
		opacity: 1,
		}, 400)
	});

	$(".join .dots").eq(indexMiddle).addClass("activeJoinDots");

	// next
	$(".join .next").click(function(){
		// return;

	
			$(".join .leftJoin, .join .rightJoin").animate({
				opacity: 0,
				}, 200
				, function(){
					$(".join .activeJoin").animate({
						opacity: 0,
						},300);
				
			});
		

			setTimeout(function(){
				$(".join .glass").each(function(){
					$(this).css("opacity", 0);
				})		
			},500);
		
		

		setTimeout(function(){
			$(".join .glass").eq(indexMiddle).removeClass("activeJoin");
			$(".join .glass").eq(indexLeft).removeClass("leftJoin");
			$(".join .glass").eq(indexRight).removeClass("rightJoin");

			$(".join .glass").each(function(){
				$(this).addClass("invisibleJoin");
			});

			$(".join .dots").eq(indexMiddle).removeClass("activeJoinDots");
	
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
	
	
			$(".join .glass").eq(indexMiddle).removeClass("invisibleJoin").addClass("activeJoin");
			$(".join .glass").eq(indexLeft).removeClass("invisibleJoin").addClass("leftJoin");
			$(".join .glass").eq(indexRight).removeClass("invisibleJoin").addClass("rightJoin");
	
			$(".join .activeJoin ").animate({
				opacity: 1,
				}, 300, 
				function(){
					$(".join .leftJoin, .join .rightJoin").animate({
						opacity: 1,
						},200, function(){
							$(".join .glass").each(function(){
								$(this).css("opacity", 1);
							});
						});
					
			});

			

			$(".join .dots").eq(indexMiddle).addClass("activeJoinDots");

		}, 520);
	});


	// prev
	$(".join .prev").click(function(){
		// return;
		$(".join .glass").each(function(){
			$(this).animate({
			opacity: 0,
			}, {
				duration: 400
			});
		});


		setTimeout(function(){
			$(".join .glass").eq(indexMiddle).removeClass("activeJoin");
			$(".join .glass").eq(indexLeft).removeClass("leftJoin");
			$(".join .glass").eq(indexRight).removeClass("rightJoin");

			$(".join .dots").eq(indexMiddle).removeClass("activeJoinDots");

			$(".join .glass").each(function(){
				$(this).addClass("invisibleJoin");
			});

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

			$(".join .glass").eq(indexMiddle).removeClass("invisibleJoin").addClass("activeJoin");
			$(".join .glass").eq(indexLeft).removeClass("invisibleJoin").addClass("leftJoin");
			$(".join .glass").eq(indexRight).removeClass("invisibleJoin").addClass("rightJoin");

			$(".join .glass").each(function(){
				$(this).animate({
				opacity: 1,
				}, 400)
			});

			$(".join .dots").eq(indexMiddle).addClass("activeJoinDots");

		}, 400);
		
	});


});