



$(document).ready(function(){

    // FROM VALIDATION
      $.validator.addMethod("emailPattern", function(value, element) {
        return this.optional(element) || value == value.match(/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i);
      });

    $("form").validate({
        rules: {
            email: {
              required: true,
              emailPattern: true,
            //   remote: php //ini buat unique
            }

          },
          messages: {
            
            email: {
              required: "Please input this field",
              emailPattern: "Please specify a valid email address (must contain @ and .)",
            //   remote: "Line ID is taken"
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


   

    $('.send').click(function(){
        $('form').valid();
        var ariaInvalidNotFalse = $(".valid");
        if(ariaInvalidNotFalse.length<2){
            $('.send').prop('disabled', 'disabled');
        }
        else{
            $('.send').prop('disabled', false);
        }
    });



});