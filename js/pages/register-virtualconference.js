$(document).ready(function(){

    // input active
    $('input').focus(function(){
        if($(this).attr("type")!="radio"){
            $(this).parent().addClass('activeBorder');
        }
        
    });

    $('input').focusout(function(){
        if($(this).val()=='' && $(this).attr("type")!="radio"){
            $(this).parent().removeClass('activeBorder');
        }
        if($(this).hasClass('error') && $(this).attr("type")!="radio"){
            $(this).parent().addClass('errorBorder');
        }
    });

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
                        top:"0"
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
                        top:"0"
                    },400);
                });
    
                $( ".section-3" ).animate({
                    opacity: 1,
                  }, 400, function() {
                    
                    $( ".section-3" ).css("opacity", 1);
                  });
              });
    });

    $(".next3").click(function(){
            $(".registervc .container").addClass("noglass");
            $( ".section-3" ).animate({
                opacity: 0,
              }, 400, function() {
                $( ".section-3" ).css("display", "none");
                $( ".section-3" ).css("opacity", 0);
                $( ".section-4" ).css("display", "block");
                $("form").addClass("formpad");

                $(".line3").animate({
                    left:"0"
                },400, function(){
                    $(".ball4").animate({
                        top:"0"
                    },400);
                });
    
                $( ".section-4" ).animate({
                    opacity: 1,
                  }, 400, function() {
                    $(".section-4").css("opacity", 1);
                  });
              });
        
    });

    $('.submit').click(function(){
       
    });

    /* Ball Animation */
    $(".ball3, .back3").click(function(){
        if($(".section-4").css("display")=="block"){
            $(".registervc .container").removeClass("noglass");
            $( ".section-4" ).animate({
                opacity: 0,
              }, 400, function() {
                $( ".section-4" ).css("display", "none");
                $( ".section-4" ).css("opacity", 0);
                $( ".section-3" ).css("display", "block");
                $("form").removeClass("formpad");

                $(".ball4").animate({
                    top:"-160%"
                },400, function(){
                    $(".line3").animate({
                        left:"-100%"
                    },400);
                });
    
                $( ".section-3" ).animate({
                    opacity: 1,
                  }, 400, function() {
                    
                    $( ".section-3" ).css("opacity", 1);
                  });
              });
        }
        
    });
    
    $(".ball2, .back2").click(function(){
        if($(".section-3").css("display")=="block"){
            $(".registervc .container").removeClass("noglass");
            $( ".section-3" ).animate({
                opacity: 0,
              }, 400, function() {
                $( ".section-3" ).css("display", "none");
                $( ".section-3" ).css("opacity", 0);
                $( ".section-2" ).css("display", "block");
                $("form").removeClass("formpad");

                $(".ball3").animate({
                    top:"-160%"
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
        
        else if($(".section-4").css("display")=="block"){
            $(".registervc .container").removeClass("noglass");
            $( ".section-4" ).animate({
                opacity: 0,
              }, 400, function() {
                $( ".section-4" ).css("display", "none");
                $( ".section-4" ).css("opacity", 0);
                $( ".section-2" ).css("display", "block");
                $("form").removeClass("formpad");

                $(".ball4").animate({
                    top:"-160%"
                },200, function(){
                    $(".line3").animate({
                        left:"-100%"
                    },200, function(){
                        $(".ball3").animate({
                            top:"-160%"
                        }, 200, function(){
                            $(".line2").animate({
                                left:"-100%"
                            },200);
                        });
                    });
                });
    
                $( ".section-2" ).animate({
                    opacity: 1,
                  }, 400, function() {
                    
                    $( ".section-2" ).css("opacity", 1);
                  });
              });
        }

    });

    $(".ball1, .back1").click(function(){
        if($(".section-2").css("display")=="block"){
            $(".registervc .container").removeClass("noglass");
            $( ".section-2" ).animate({
                opacity: 0,
              }, 400, function() {
                $( ".section-2" ).css("display", "none");
                $( ".section-2" ).css("opacity", 0);
                $( ".section-1" ).css("display", "block");
                $("form").removeClass("formpad");

                $(".ball2").animate({
                    top:"-160%"
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
            $(".registervc .container").removeClass("noglass");
            $( ".section-3" ).animate({
                opacity: 0,
              }, 400, function() {
                $( ".section-3" ).css("display", "none");
                $( ".section-3" ).css("opacity", 0);
                $( ".section-1" ).css("display", "block");
                $("form").removeClass("formpad");

                $(".ball3").animate({
                    top:"-160%"
                },200, function(){
                    $(".line2").animate({
                        left:"-100%"
                    },200, function(){
                        $(".ball2").animate({
                            top:"-160%"
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

        else if($(".section-4").css("display")=="block"){
            $(".registervc .container").removeClass("noglass");
            $( ".section-4" ).animate({
                opacity: 0,
              }, 400, function() {
                $( ".section-4" ).css("display", "none");
                $( ".section-4" ).css("opacity", 0);
                $( ".section-1" ).css("display", "block");
                $("form").removeClass("formpad");

                $(".ball4").animate({
                    top:"-160%"
                },200, function(){
                    $(".line3").animate({
                        left:"-100%"
                    },200, function(){
                        $(".ball3").animate({
                            top:"-160%"
                        }, 200, function(){
                            $(".line2").animate({
                                left:"-100%"
                            }, 200, function () {
                                $(".ball2").animate({
                                    top: "-160%"
                                }, 200, function () {
                                    $(".line1").animate({
                                        left: "-100%"
                                    }, 200)
                                });
                            });
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

    $(".eye").mousedown(function () {
        var input = $("#password");
        if (input.attr("type") === "password") {
          input.attr("type", "text");
        } else {
          input.attr("type", "password");
        }
    });


    /* END */
});
