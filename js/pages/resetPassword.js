



$(document).ready(function(){

    // FROM VALIDATION
      $.validator.addMethod("emailPattern", function(value, element) {
        return this.optional(element) || value == value.match(/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i);
      });
      $.validator.addMethod("passwordPattern", function(value, element) {
        return this.optional(element) || value == value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
      });




    $("form").validate({
        rules: {
            password: {
                required: true,
                passwordPattern: true
            },
            confirm: {
                required: true,
                equalTo : "#password"
            }
            

          },
          messages: {
            password: {
                required: "Please input this field",
                passwordPattern: "Password must contain at least a lower case, an upper case, a number, and 8 digits"
            },
            confirm: {
                required: "Please input this field",
                equalTo : "Password are not matching"
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


   

    $('.reset').click(function(){
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