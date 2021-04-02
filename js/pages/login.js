



$(document).ready(function(){

     // alert
     $('.close').click(function(){
        $('.alert').css("display", "none");
     });


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

    // FROM VALIDATION
      $.validator.addMethod("emailPattern", function(value, element) {
        return this.optional(element) || value == value.match(/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i);
      });
    //   $.validator.addMethod("passwordPattern", function(value, element) {
    //     return this.optional(element) || value == value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
    //   });

    $("form").validate({
        rules: {
            email: {
              required: true,
              emailPattern: true,
            //   remote: php //ini buat unique
            },
            password: {
                required: true
                // passwordPattern: true
            }

          },
          messages: {
            
            email: {
              required: "Please input this field",
              emailPattern: "Please specify a valid email address (must contain @ and .)",
            //   remote: "Line ID is taken"
            },
            password: {
                required: "Please input this field",
                // passwordPattern: "Password must contain at least a lower case, an upper case, a number, and 8 digits"
            }
          },
          errorPlacement: function(error, element) {
            error.insertAfter(element.parent());
            error.addClass('errorMsg');
            element.parent().addClass('errorBorder');
            element.parent().children(".symbol").css("display", "block");
                
          },
          unhighlight: function(element) {  
            // element.parent().after().remove();
            $(element).addClass("valid");
            $(element).parent().removeClass('errorBorder');
            $(element).parent().children(".symbol").css("display", "none");
            $(element).parent().parent().children(".symbol").css("display", "none");
          }


    });


   

    $('.login').click(function(){
        $('form').valid();
        var ariaInvalidNotFalse = $(".valid");
        if(ariaInvalidNotFalse.length<2){
            $('.login').prop('disabled', 'disabled');
        }
        else{
            $('.login').prop('disabled', false);
        }
    });



});