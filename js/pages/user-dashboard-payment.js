$(document).ready(function() {
    $('#receipt').change(function() {
        var i = $(this).prev('label').clone();
        var file = $('#receipt')[0].files[0].name;
        $(this).prev('label').text(file);
    });

    $('input').change(function(){
        if($(this).val()=='' && $(this).attr("type")!="radio"){
            $(this).parent().removeClass('activeBorder');
            $(".format").removeClass("errorRed");
        }
        if($(this).hasClass('error') && $(this).attr("type")!="radio"){
            $(this).parent().addClass('errorBorder');
            $(".format").addClass("errorRed");
        }
    });

    $.validator.addMethod('filesize', function (value, element, param) {
        return this.optional(element) || (element.files[0].size <= param)
    });

    jQuery(function ($) {
        "use strict";
        $("form").validate({
            
            rules: {
                receipt: {
                    required: true, 
                    extension: "jpg,jpeg,png,pdf",
                    filesize: 5242880
                }
            },
            messages: {
            },
            errorPlacement: function(error, element) {
                element.parent().addClass('errorBorder');
                $(".format").addClass("errorRed");
                    
            },
            unhighlight: function(element) {  
                // element.parent().after().remove();
                $(element).addClass("valid");
                $(element).parent().removeClass('errorBorder');
                $(".format").removeClass("errorRed");
                $(element).parent().addClass('activeBorder');
             }


        });
    });

    $('.button-orange').click(function(){
        $('form').valid();
        var ariaInvalidNotFalse = $(".valid");
        if(ariaInvalidNotFalse.length<1){
            $('.button-orange').prop('disabled', 'disabled');
        }
        else{
            $('.button-orange').prop('disabled', false);
        }
    });


});