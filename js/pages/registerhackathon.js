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

    var param = 5 * 1024 * 1024;
    // FROM VALIDATION
      $.validator.addMethod("letters", function(value, element) {
        return this.optional(element) || value == value.match(/^[a-zA-Z\s]*$/);
      });
      $.validator.addMethod("emailPattern", function(value, element) {
        return this.optional(element) || value == value.match(/^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i);
      });
      $.validator.addMethod("passwordPattern", function(value, element) {
        return this.optional(element) || value == value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
      });
      $.validator.addMethod("whatsappPattern", function(value, element) {
        return this.optional(element) || value == value.match(/^\+?\d+$/);
      });
      $.validator.addMethod("fileSize", function(value, element, param) {
        return this.optional(element) || (element.files[0].size <= param);
      });



    $("form").validate({
        rules: {
            name: {
              required: true,
              letters: true
            },
            placeBirth: {
                required: true,
                letters: true
            },
            dateBirth: {
                required: true
            },
            gender: {
                required: true
            },
            status: {
                required: true
            },
            email: {
              required: true,
              emailPattern: true,
            //   remote: php //ini buat unique
            },
            password: {
                required: true,
                passwordPattern: true
            },
            confirm: {
                required: true,
                equalTo : "#password"
            },
            whatsapp: {
                required: true,
                whatsappPattern: true,
                // remote: php //ini buat unique
            },
            line: {
                required: true,
                // remote: php //ini buat unique
            },
            company: {
                required: true
            },
            cv: {
                required: true,
                extension: "pdf|jpg|jpeg|png",
                fileSize: 5 * 1024 * 1024
            },
            id_card: {
                required: true,
                extension: "pdf|jpg|jpeg|png",
                fileSize: 5 * 1024 * 1024
            },
            team_code: {
                required: true,
                maxlength: 6
            }

          },
          messages: {
            name: {
                
                letters: "Please specify your name (only letters and spaces are allowed)",
                required: "Please input this field" 
            },
           placeBirth: {
                required: "Please input this field",
                letters: "Please specify your birth place (only letters and spaces are allowed)"
            },
            dateBirth: {
                required: "Please input this field"
            },
            gender: {
                required: "Please input this field"
            },
            status: {
                required: "Please input this field"
            },
            email: {
              required: "Please input this field",
              emailPattern: "Please specify a valid email address (must contain @ and .)"
              /* remote: "Line ID is taken" */
            },
            password: {
                required: "Please input this field",
                passwordPattern: "Password must contain at least a lower case, an upper case, a number, and 8 characters"
            },
            confirm: {
                required: "Please input this field",
                equalTo : "Password are not matching"
            },
            whatsapp: {
                required: "Please input this field",
                whatsappPattern: "Please input a valid whatsapp number",
                remote: "Whatsapp number is taken"
            },
            line: {
                required: "Please input this field",
                remote: "Line ID is taken"
            },
            company: {
                required: "Please input this field"
              },
            cv: {
                required: "*Please upload your CV. In format pdf,jpg,jpeg, or png.",
                extension: "Please upload your CV. In format pdf,jpg,jpeg, or png.",
                fileSize: "Max. file size is 5MB"
            },
            id_card: {
                required: "*Please upload your CV. In format pdf,jpg,jpeg, or png.",
                extension: "Please upload your CV. In format pdf,jpg,jpeg, or png.",
                fileSize: "Max. file size is 5MB"
              },
              team_code: {
                  required: "Please input this field",
                  maxlength: "Team Code only consist of 6 letters/numbers"
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
    
    
    $('#cv').bind('change', function () {
        $(".cv div").text(this.value.replace(/C:\\fakepath\\/i, ''));
        $( ".notes" ).css("display", "none");
    });

    $('#id_card').bind('change', function () {
        $(".id_card div").text(this.value.replace(/C:\\fakepath\\/i, ''));
        $( ".notes" ).css("display", "none");
    });

    
    $(".next1").click(function(){
        $('form').valid();
        var ariaInvalidNotFalse = $(".section-1 .valid");
        if(ariaInvalidNotFalse.length < 3){
            return
        }
        else{
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
        }
    });


    $(".next2").click(function(){
        $('form').valid();
        var ariaInvalidNotFalse = $(".section-2 .valid");
        if(ariaInvalidNotFalse.length<3){
            return
        }
        else{
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
        }
    });

    $(".next3").click(function(){
        $('form').valid();
        var ariaInvalidNotFalse = $(".section-3 .valid");
        if(ariaInvalidNotFalse.length<3){
            return
        }
        else{
            $( ".section-3" ).animate({
                opacity: 0,
              }, 400, function() {
                $( ".section-3" ).css("display", "none");
                $( ".section-3" ).css("opacity", 0);
                $( ".section-4" ).css("display", "block");
    
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
                    
                    $( ".section-4" ).css("opacity", 1);
                  });
              });
        }
    });

    $(".next4").click(function(){
        $('form').valid();
        var ariaInvalidNotFalse = $(".section-4 .valid");
        if(ariaInvalidNotFalse.length<2){
            return
        }
        else{
            $( ".section-4" ).animate({
                opacity: 0,
              }, 400, function() {
                $( ".section-4" ).css("display", "none");
                $( ".section-4" ).css("opacity", 0);
                $( ".section-5" ).css("display", "block");
    
                $(".line4").animate({
                    left:"0"
                },400, function(){
                    $(".ball5").animate({
                        top:"0"
                    },400);
                });
    
                $( ".section-5" ).animate({
                    opacity: 1,
                  }, 400, function() {
                    
                    $( ".section-5" ).css("opacity", 1);
                  });
              });
        }
    });

    $('.submit').click(function(){
        $('form').valid();
        var ariaInvalidNotFalse = $(".section-5 .valid");
        if(ariaInvalidNotFalse.length<1){
            $('.submit').prop('disabled', 'disabled');
        }
        else{
            $('.submit').prop('disabled', false);
        }
    });

    /* Ball Animation */
    $(".ball4, .back4").click(function(){
        if($(".section-5").css("display")=="block"){
            $( ".section-5" ).animate({
                opacity: 0,
              }, 400, function() {
                $( ".section-5" ).css("display", "none");
                $( ".section-5" ).css("opacity", 0);
                $( ".section-4" ).css("display", "block");
    
                $(".ball5").animate({
                    top:"-160%"
                },400, function(){
                    $(".line4").animate({
                        left:"-100%"
                    },400);
                });
    
                $( ".section-4" ).animate({
                    opacity: 1,
                  }, 400, function() {
                    
                    $( ".section-4" ).css("opacity", 1);
                  });
              });
        }
        
    });

    $(".ball3, .back3").click(function(){
        if($(".section-4").css("display")=="block"){
            $( ".section-4" ).animate({
                opacity: 0,
              }, 400, function() {
                $( ".section-4" ).css("display", "none");
                $( ".section-4" ).css("opacity", 0);
                $( ".section-3" ).css("display", "block");
    
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
        
        else if($(".section-5").css("display")=="block"){
            $( ".section-5" ).animate({
                opacity: 0,
              }, 400, function() {
                $( ".section-5" ).css("display", "none");
                $( ".section-5" ).css("opacity", 0);
                $( ".section-3" ).css("display", "block");
    
                $(".ball5").animate({
                    top:"-160%"
                },200, function(){
                    $(".line4").animate({
                        left:"-100%"
                    },200, function(){
                        $(".ball4").animate({
                            top:"-160%"
                        }, 200, function(){
                            $(".line3").animate({
                                left:"-100%"
                            },200);
                        });
                    });
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
            $( ".section-3" ).animate({
                opacity: 0,
              }, 400, function() {
                $( ".section-3" ).css("display", "none");
                $( ".section-3" ).css("opacity", 0);
                $( ".section-2" ).css("display", "block");
    
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
            $( ".section-4" ).animate({
                opacity: 0,
              }, 400, function() {
                $( ".section-4" ).css("display", "none");
                $( ".section-4" ).css("opacity", 0);
                $( ".section-2" ).css("display", "block");
    
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

        else if($(".section-5").css("display")=="block"){
            $( ".section-5" ).animate({
                opacity: 0,
              }, 400, function() {
                $( ".section-5" ).css("display", "none");
                $( ".section-5" ).css("opacity", 0);
                $( ".section-2" ).css("display", "block");
    
                $(".ball5").animate({
                    top:"-160%"
                },200, function(){
                    $(".line4").animate({
                        left:"-100%"
                    },200, function(){
                        $(".ball4").animate({
                            top:"-160%"
                        }, 200, function(){
                            $(".line3").animate({
                                left:"-100%"
                            }, 200, function () {
                                $(".ball3").animate({
                                    top: "-160%"
                                }, 200, function () {
                                    $(".line2").animate({
                                        left: "-100%"
                                    }, 200)
                                });
                            });
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
            $( ".section-2" ).animate({
                opacity: 0,
              }, 400, function() {
                $( ".section-2" ).css("display", "none");
                $( ".section-2" ).css("opacity", 0);
                $( ".section-1" ).css("display", "block");
    
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
            $( ".section-3" ).animate({
                opacity: 0,
              }, 400, function() {
                $( ".section-3" ).css("display", "none");
                $( ".section-3" ).css("opacity", 0);
                $( ".section-1" ).css("display", "block");
    
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
            $( ".section-4" ).animate({
                opacity: 0,
              }, 400, function() {
                $( ".section-4" ).css("display", "none");
                $( ".section-4" ).css("opacity", 0);
                $( ".section-1" ).css("display", "block");
    
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

        else if($(".section-5").css("display")=="block"){
            $( ".section-5" ).animate({
                opacity: 0,
              }, 400, function() {
                $( ".section-5" ).css("display", "none");
                $( ".section-5" ).css("opacity", 0);
                $( ".section-1" ).css("display", "block");
    
                $(".ball5").animate({
                    top:"-160%"
                },200, function(){
                    $(".line4").animate({
                        left:"-100%"
                    },200, function(){
                        $(".ball4").animate({
                            top:"-160%"
                        }, 200, function(){
                            $(".line3").animate({
                                left:"-100%"
                            }, 200, function () {
                                $(".ball3").animate({
                                    top: "-160%"
                                }, 200, function () {
                                    $(".line2").animate({
                                        left: "-100%"
                                    }, 200, function () {
                                        $(".ball2").animate({
                                            top: "-160%"
                                        }, 200, function () {
                                            $(".line1").animate({
                                                left: "-100%"
                                            }, 200);
                                        });
                                    })
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
