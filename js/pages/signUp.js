$(document).ready(function(){

    $(".next1").click(function(){
        $( ".section-1" ).animate({
            opacity: 0,
          }, 400, function() {
            $( ".section-1" ).css("display", "none");
            $( ".section-1" ).css("opacity", 0);
            $( ".section-2" ).css("display", "block");

            $(".line1").animate({
                left:"0"
            },400, function(){
                $(".ball2").animate({
                    left:"0"
                },400);
            });

            $( ".section-2" ).animate({
                opacity: 1,
              }, 400, function() {
                
                $( ".section-2" ).css("opacity", 1);
              });
          });
    });
    
    $(".next2").click(function(){
        $( ".section-2" ).animate({
            opacity: 0,
          }, 400, function() {
            $( ".section-2" ).css("display", "none");
            $( ".section-2" ).css("opacity", 0);
            $( ".section-3" ).css("display", "block");

            $(".line2").animate({
                left:"0"
            },400, function(){
                $(".ball3").animate({
                    left:"0"
                },400);
            });

            $( ".section-3" ).animate({
                opacity: 1,
              }, 400, function() {
                
                $( ".section-3" ).css("opacity", 1);
              });
          });
    });


    $(".ball2").click(function(){
        if($(".section-3").css("display")=="block"){
            $( ".section-3" ).animate({
                opacity: 0,
              }, 400, function() {
                $( ".section-3" ).css("display", "none");
                $( ".section-3" ).css("opacity", 0);
                $( ".section-2" ).css("display", "block");
    
                $(".ball3").animate({
                    left:"-100%"
                },400, function(){
                    $(".line2").animate({
                        left:"-100%"
                    },400);
                });
    
                $( ".section-2" ).animate({
                    opacity: 1,
                  }, 400, function() {
                    
                    $( ".section-2" ).css("opacity", 1);
                  });
              });
        }
        
    });

    $(".ball1").click(function(){
        if($(".section-2").css("display")=="block"){
            $( ".section-2" ).animate({
                opacity: 0,
              }, 400, function() {
                $( ".section-2" ).css("display", "none");
                $( ".section-2" ).css("opacity", 0);
                $( ".section-1" ).css("display", "block");
    
                $(".ball2").animate({
                    left:"-100%"
                },400, function(){
                    $(".line1").animate({
                        left:"-100%"
                    },400);
                });
    
                $( ".section-1" ).animate({
                    opacity: 1,
                  }, 400, function() {
                    $( ".section-1" ).css("opacity", 1);
                  });
              });
        }

        else if($(".section-3").css("display")=="block"){
            $( ".section-3" ).animate({
                opacity: 0,
              }, 400, function() {
                $( ".section-3" ).css("display", "none");
                $( ".section-3" ).css("opacity", 0);
                $( ".section-1" ).css("display", "block");
    
                $(".ball3").animate({
                    left:"-100%"
                },200, function(){
                    $(".line2").animate({
                        left:"-100%"
                    },200, function(){
                        $(".ball2").animate({
                            left:"-100%"
                        }, 200, function(){
                            $(".line1").animate({
                                left:"-100%"
                            },200);
                        });
                    });
                });
    
                $( ".section-1" ).animate({
                    opacity: 1,
                  }, 400, function() {
                    
                    $( ".section-1" ).css("opacity", 1);
                  });
              });
        }
        
    });

});