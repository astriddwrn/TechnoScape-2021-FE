let prevPosition = $(window).scrollTop();
$(window).scroll(() => {
  let currPosition = $(window).scrollTop();
  const mediaQuery = window.matchMedia("(min-width: 768px)");
  if (mediaQuery.matches) {
    if (prevPosition > currPosition) {
      $("#navbar").removeClass("scroll-down");
      $("#navbar").addClass("scroll-up");
    } else {
      $("#navbar").removeClass("scroll-up");
      $("#navbar").addClass("scroll-down");
    }
    if (currPosition > 700) {
      $("#navbar").addClass("change-bg");
    } else {
      $("#navbar").removeClass("change-bg");
    }
    prevPosition = currPosition;
  }
});

const navSlide = () => {
  const nav = document.querySelector("nav");
  const burger = document.querySelector(".burger");

  const navLinks = document.querySelector(".nav-links");
  const li = document.querySelectorAll(".nav-links li");
  burger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
    li.forEach((link, index) => {
      if (link.style.animation) link.style.animation = "";
      else {
        link.style.animation = `navLinksFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
  });
};
navSlide();

const setBlue = (input) => {
  input.classList.remove("set-border-white");
  input.nextElementSibling.classList.remove("set-text-white");
};

const setWhiteWhenFilled = (input) => {
  if (input.value !== "") {
    input.classList.add("set-border-white");
    input.nextElementSibling.classList.add("set-text-white");
  }
};

const validateEmail = (input) => {
  const regex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

  if (regex.test(input.value)) {
    input.classList.remove("is-invalid");
  } else {
    input.classList.add("is-invalid");
  }
};

const expandQuestionsAnswer = (e) => {
  let faqItem = e.closest(".faq-content-item");
  let faqAns = $(faqItem.lastElementChild);
  let activeItem = $(".faq-content-item.active");
  let activeAns = $(".ans.active");

  const removeActiveElm = () => {
    $(activeItem).removeClass("active");
    $(activeAns).slideToggle();
    $(activeAns).removeClass("active");
  };

  const addActiveElm = () => {
    $(faqItem).addClass("active");
    $(faqAns).addClass("active");
    $(faqAns).slideToggle();
  };

  if ($(faqItem).hasClass("active")) {
    removeActiveElm();
  } else {
    removeActiveElm();
    addActiveElm();
  }
};

$(".faq-caro").slick({
  prevArrow: $("#faq-nav-left"),
  nextArrow: $("#faq-nav-right"),
  dots: true,
});

$(".share .talk-btn").click(function () {
  $(".shareToFriend-overlay").css("display", "block");
});
$(".shareToFriend-overlay .close").click(function () {
  $(".shareToFriend-overlay").css("display", "none");
});

$(document).ready(function () {
  //HIGHLIGHTS
  var indexBehind2 = 2;

  var indexMiddle2 = 0;
  var indexLeft2 = 3;
  var indexRight2 = 1;

  function setSlidesNext2() {
    $(".highlights .glass")
      .eq(indexBehind2)
      .addClass("behindHigh")
      .removeClass("leftHigh");

    $(".highlights .glass")
      .eq(indexMiddle2)
      .addClass("activeHigh")
      .removeClass("rightHigh");
    $(".highlights .glass")
      .eq(indexLeft2)
      .addClass("leftHigh")
      .removeClass("activeHigh");
    $(".highlights .glass")
      .eq(indexRight2)
      .addClass("backHigh")
      .addClass("rightHigh");

    setTimeout(function () {
      $(".behindHigh").animate(
        {
          opacity: 0,
        },
        300,
        function () {
          $(this).removeClass("behindHigh");
        }
      );

      $(".highlights .glass").each(function () {
        $(this).removeClass("backHigh");
      });
    }, 700);
  }

  function setSlidesPrev2() {
    $(".highlights .glass")
      .eq(indexBehind2)
      .addClass("behindHigh")
      .removeClass("rightHigh");

    $(".highlights .glass")
      .eq(indexMiddle2)
      .addClass("activeHigh")
      .removeClass("leftHigh");
    $(".highlights .glass")
      .eq(indexRight2)
      .addClass("rightHigh")
      .removeClass("activeHigh");
    $(".highlights .glass")
      .eq(indexLeft2)
      .addClass("backHigh")
      .addClass("leftHigh");

    setTimeout(function () {
      $(".behindHigh").animate(
        {
          opacity: 0,
        },
        300,
        function () {
          $(this).removeClass("behindHigh");
        }
      );

      $(".highlights .glass").each(function () {
        $(this).removeClass("backHigh");
      });
    }, 700);
  }

  function setDesc2() {
    $(".highlights .description-container div").each(function () {
      $(this).addClass("deactiveHighDesc");
    });

    setTimeout(function () {
      $(".highlights .description-container div")
        .eq(indexMiddle2)
        .removeClass("deactiveHighDesc")
        .addClass("activeHighDesc");
    }, 500);
  }

  function setDots2() {
    // return;
    $(".highlights .dots").removeClass("activeHighDots");
    $(".highlights .dots").eq(indexMiddle2).addClass("activeHighDots");
  }

  $(".highlights .glass").eq(indexMiddle2).addClass("activeHigh");
  $(".highlights .glass").eq(indexLeft2).addClass("leftHigh");
  $(".highlights .glass").eq(indexRight2).addClass("rightHigh");

  $(setDesc2());

  $(setDots2());

  // NEXT
  $(".highlights .next").click(function () {
    // return;
    indexBehind2 = indexLeft2;
    indexMiddle2 += 1;
    indexLeft2 += 1;
    indexRight2 += 1;

    if (indexMiddle2 > 3) {
      indexMiddle2 = 0;
    }
    if (indexLeft2 > 3) {
      indexLeft2 = 0;
    }
    if (indexRight2 > 3) {
      indexRight2 = 0;
    }

    $(setSlidesNext2());

    $(setDesc2());

    $(setDots2());
  });

  // prev
  $(".highlights .prev").click(function () {
    // return;
    indexBehind2 = indexRight2;
    indexMiddle2 -= 1;
    indexLeft2 -= 1;
    indexRight2 -= 1;

    if (indexMiddle2 < 0) {
      indexMiddle2 = 3;
    }
    if (indexLeft2 < 0) {
      indexLeft2 = 3;
    }
    if (indexRight2 < 0) {
      indexRight2 = 3;
    }

    $(setSlidesPrev2());

    $(setDesc2());

    $(setDots2());
  });

  $(".highlights .carousel-wrapper2").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,

    dots: true,
    customPaging: function (slider, i) {
      return '<div class="dotsHigh2" id=' + i + "></div>";
    },
    useTransform: true,
    cssEase: "ease-in-out",
  });

  $(".highlights .carousel-wrapper2").on(
    "afterChange",
    function (event, slick, currentSlide) {
      $(".highlights .description-container2 div").each(function () {
        $(this).addClass("deactiveHighDesc");
      });
      setTimeout(function () {
        $(".highlights .description-container2 div")
          .eq(currentSlide)
          .removeClass("deactiveHighDesc")
          .addClass("activeHighDesc");
      }, 300);
    }
  );

  /*Speakers*/
  var indexBehind = 2;

  var indexMiddle = 0;
  var indexLeft = 3;
  var indexRight = 1;

  function setSlidesNext() {
    $(".speakers .glass")
      .eq(indexBehind)
      .addClass("behindHigh")
      .removeClass("leftHigh");

    $(".speakers .glass")
      .eq(indexMiddle)
      .addClass("activeHigh")
      .removeClass("rightHigh");
    $(".speakers .glass")
      .eq(indexLeft)
      .addClass("leftHigh")
      .removeClass("activeHigh");
    $(".speakers .glass")
      .eq(indexRight)
      .addClass("backHigh")
      .addClass("rightHigh");

    setTimeout(function () {
      $(".behindHigh").animate(
        {
          opacity: 0,
        },
        300,
        function () {
          $(this).removeClass("behindHigh");
        }
      );

      $(".speakers .glass").each(function () {
        $(this).removeClass("backHigh");
      });
    }, 700);
  }

  function setSlidesPrev() {
    $(".speakers .glass")
      .eq(indexBehind)
      .addClass("behindHigh")
      .removeClass("rightHigh");

    $(".speakers .glass")
      .eq(indexMiddle)
      .addClass("activeHigh")
      .removeClass("leftHigh");
    $(".speakers .glass")
      .eq(indexRight)
      .addClass("rightHigh")
      .removeClass("activeHigh");
    $(".speakers .glass")
      .eq(indexLeft)
      .addClass("backHigh")
      .addClass("leftHigh");

    setTimeout(function () {
      $(".behindHigh").animate(
        {
          opacity: 0,
        },
        300,
        function () {
          $(this).removeClass("behindHigh");
        }
      );

      $(".speakers .glass").each(function () {
        $(this).removeClass("backHigh");
      });
    }, 700);
  }

  function setDesc() {
    $(".speakers .description-container div").each(function () {
      $(this).addClass("deactiveHighDesc");
    });

    setTimeout(function () {
      $(".speakers .description-container div")
        .eq(indexMiddle2)
        .removeClass("deactiveHighDesc")
        .addClass("activeHighDesc");
    }, 500);
  }

  function setDots() {
    // return;
    $(".speakers .dots").removeClass("activeHighDots");
    $(".speakers .dots").eq(indexMiddle).addClass("activeHighDots");
  }

  $(".speakers .glass").eq(indexMiddle).addClass("activeHigh");
  $(".speakers .glass").eq(indexLeft).addClass("leftHigh");
  $(".speakers .glass").eq(indexRight).addClass("rightHigh");

  $(setDesc());

  $(setDots());

  // NEXT
  $(".speakers .next").click(function () {
    // return;
    indexBehind = indexLeft;
    indexMiddle += 1;
    indexLeft += 1;
    indexRight += 1;

    if (indexMiddle > 3) {
      indexMiddle = 0;
    }
    if (indexLeft > 3) {
      indexLeft = 0;
    }
    if (indexRight > 3) {
      indexRight = 0;
    }

    $(setSlidesNext());

    $(setDesc());

    $(setDots());
  });

  // prev
  $(".speakers .prev").click(function () {
    // return;
    indexBehind = indexRight;
    indexMiddle -= 1;
    indexLeft -= 1;
    indexRight -= 1;

    if (indexMiddle < 0) {
      indexMiddle = 3;
    }
    if (indexLeft < 0) {
      indexLeft = 3;
    }
    if (indexRight < 0) {
      indexRight = 3;
    }

    $(setSlidesPrev());

    $(setDesc());

    $(setDots());
  });

  $(".speakers .carousel-wrapper2").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,

    dots: true,
    customPaging: function (slider, i) {
      return '<div class="dotsHigh2" id=' + i + "></div>";
    },
    useTransform: true,
    cssEase: "ease-in-out",
  });

  $(".speakers .carousel-wrapper2").on(
    "afterChange",
    function (event, slick, currentSlide) {
      $(".speakers .description-container2 div").each(function () {
        $(this).addClass("deactiveHighDesc");
      });
      setTimeout(function () {
        $(".speakers .description-container2 div")
          .eq(currentSlide)
          .removeClass("deactiveHighDesc")
          .addClass("activeHighDesc");
      }, 300);
    }
  );
});
