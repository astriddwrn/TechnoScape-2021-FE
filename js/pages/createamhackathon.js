$(document).ready(function () {

    $("form").validate({
        rules: {
            team_name: {
              required: true,
              remote: true
            }

          },
          messages: {
            team_name: {
                  required: "Please input this field",
                /* remote: "The team name is already taken" */
            }            
            
        },
          
          errorPlacement: function(error, element) {
            if (element.attr("type") == "radio"){
                error.insertAfter(element.parent().parent());
                error.addClass('errorMsg');
                element.parent().parent().children(".symbol").css("display", "block");
            }
            else{
                error.insertAfter(element.parent());
                error.addClass('errorMsg');
                element.parent().addClass('errorBorder');
                element.parent().children(".symbol").css("display", "block");
            }
                
          },
          unhighlight: function(element) {  
            // element.parent().after().remove();
            $(element).addClass("valid");
            $(element).parent().removeClass('errorBorder');
            $(element).parent().children(".symbol").css("display", "none");
            $(element).parent().parent().children(".symbol").css("display", "none");
          }

    });
    
    $(".next1").click(function () {
        $(".section-1").animate({
            opacity: 0,
        }, 400, function () {
            $(".section-1").css("display", "none");
            $(".section-1").css("opacity", 0);
            $(".section-2").css("display", "flex");
    
            $(".section-2").animate({
                opacity: 1,
            }, 400, function () {
                
                $(".section-2").css("opacity", 1);
            });
        });
        
    });

    $(".next2").click(function(){
        $('form').valid();
        var ariaInvalidNotFalse = $(".section-2 .valid");
        if(ariaInvalidNotFalse.length<1){
            return
        }
        else {
            $( ".section-2" ).animate({
                opacity: 0,
              }, 400, function() {
                $( ".section-2" ).css("display", "none");
                $(".section-2").css("opacity", 0);
                
               /*  $( ".section-3" ).css("display", "block");
    
                $( ".section-3" ).animate({
                    opacity: 1,
                  }, 400, function() {
                    
                    $( ".section-3" ).css("opacity", 1);
                  }); */
              });
        }
        
    });

    $(".back1").click(function(){
        if($(".section-2").css("display")=="flex"){
            $( ".section-2" ).animate({
                opacity: 0,
              }, 400, function() {
                $( ".section-2" ).css("display", "none");
                $( ".section-2" ).css("opacity", 0);
                $( ".section-1" ).css("display", "flex");
    
                $( ".section-1" ).animate({
                    opacity: 1,
                  }, 400, function() {
                    
                    $( ".section-1" ).css("opacity", 1);
                  });
              });
        }
        
    });
});
