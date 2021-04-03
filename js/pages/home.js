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
  console.log("SetBlue");
  input.classList.remove("set-border-white");
  input.nextElementSibling.classList.remove("set-text-white");
};

const setWhiteWhenFilled = (input) => {
  if (input.value !== "") {
    console.log("SetWhite");
    input.classList.add("set-border-white");
    input.nextElementSibling.classList.add("set-text-white");
  }
};

const validateEmail = (input) => {
  console.log(input);

  const regex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

  if (regex.test(input.value)) {
    console.log("Ada woi");
    input.classList.remove("is-invalid");
  } else {
    console.log("Kosong woi");
    input.classList.add("is-invalid");
  }
};

$(".share .talk-btn").click(function () {
  $(".shareToFriend-overlay").css("display", "block");
});
$(".shareToFriend-overlay .close").click(function () {
  $(".shareToFriend-overlay").css("display", "none");
});
