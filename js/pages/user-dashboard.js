$(document).ready(function(){
    
    // MENU MOBILE
    function checkPosition() {
        if (window.matchMedia('(max-width: 992px)').matches) {
            $(".left-menu").hide();
        }
        else{
            $(".left-menu").show();
        }

        if(window.matchMedia('(max-width: 762px)').matches){
            $(".joinGroup-overlay .group-button div").each(function(){
                $(this).hide();
            });
            $(".group-button-active").children().show();
        }
        else{
            $(".joinGroup-overlay .group-button div").each(function(){
                $(this).show();
            });
        }
    }

    checkPosition();

    $(".menu-symbol").click(function(){
        $(".left-menu").show("slide", { direction: "right" }, 400);
    });

    $(".right-container").click(function(){
        if(window.matchMedia('(max-width: 992px)').matches && $(".left-menu").is(":visible")){
            $(".left-menu").hide("slide", { direction: "right" }, 400);
        }
    })

    $(window).on('resize', function() {
        checkPosition();
    });

    //MENU
    $(".left-menu .tab1").children(".deactive-img").css("display", "none");
    $(".left-menu .tab1").children(".active-img").css("display", "block");
    $(".left-menu .tab1").children(".text-regular").addClass("text-active");

    $(".section").each(function(){
        $(this).hide();
    });
    $(".announcement").show();

    var tab = $(".left-menu .tab");

    tab.click(function(){
        $(".section").each(function(){
            $(this).hide();
        });
        $(".left-menu .tab").each(function(){
            $(this).children(".active-img").css("display", "none");
            $(this).children(".deactive-img").css("display", "block");
            $(this).children(".text-regular").removeClass("text-active");
        });
        $(this).children(".deactive-img").css("display", "none");
        $(this).children(".active-img").css("display", "block");
        $(this).children(".text-regular").addClass("text-active");

        if($(".tab1").children(".text-regular").hasClass("text-active")){
            $(".announcement").show();
        }
        else if($(".tab2").children(".text-regular").hasClass("text-active")){
            $(".task").show();
        }
        else if($(".tab3").children(".text-regular").hasClass("text-active")){
            $(".schedule").show();
        }
        else if($(".tab4").children(".text-regular").hasClass("text-active")){
            $(".profile").show();
        }
        if(window.matchMedia('(max-width: 992px)').matches && $(".left-menu").is(":visible")){
            $(".left-menu").hide("slide", { direction: "right" }, 400);
        }

        $(".right-container").scrollTop(0);

    });

    // ANNOUNCEMENT
    var anButton = $(".announcement .button"); 
    anButton.click(function(){
        $(this).closest(".list").children(".content").slideToggle();
        $(this).toggleClass("button-active");
    });

    // TASK
    $(".group1").addClass("group-button-active");
    $(".group1").children().show();
    $(".group3").addClass("group-button-deactivate");
    $(".joinGroup-overlay .group-button").click(function(){
        if(!$(this).hasClass("group-button-deactivate")){
            if(window.matchMedia('(max-width: 762px)').matches){
                $(".joinGroup-overlay .group-button .text").each(function(){
                    $(this).hide();
                });
                $(this).children().show();
            }
            $(".group-button").each(function(){
                $(this).removeClass("group-button-active");
            });
            $(this).addClass("group-button-active");


        }
    });

    $(".joinGroup-overlay").hide();
    $(".task .join-group").click(function(){
        $(".joinGroup-overlay").show();
    });
    $(".joinGroup-overlay .close").click(function(){
        $(".joinGroup-overlay").hide();
    });


    $(".viewCV-overlay").hide();
    $(".task .view-cv").click(function(){
        $(".viewCV-overlay").show();
    });
    $(".viewCV-overlay .close").click(function(){
        $(".viewCV-overlay").hide();
    });

    $(".task .readMore").click(function(){
        $(this).hide();
        $(this).parent().children(".description-container").find(".text-regular").css("height", "auto");
    });

    $(".task .view-team").click(function(){
        $(".task").hide();
        $(".task-team").show();

        $(".right-container").scrollTop(0);
    });

    $(".task-team .button-orange").click(function(){
        $(".viewCV-overlay").show();
    });

    // SCHEDULE
    

    // PROFILE
    $(".profile .view").click(function(){
        $(".viewCV-overlay").show();
    });

    $(".logout-overlay").hide();
    // LOG OUT
    $(".logout-tab").click(function(){
        $(".logout-overlay").show();
    })
    $(".logout-overlay .back-button").click(function(){
        $(".logout-overlay").hide();
    })


});




