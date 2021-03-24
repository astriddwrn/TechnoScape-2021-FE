let prevPosition = {
  top: $(window).scrollTop(),
  bottom: $(window).scrollTop() + $(window).height(),
};

let videoPositionTop = $('#video').position().top;
let planetPosition = {
  top: 10,
  bottom: 10,
};
let planetMovingSpeed = 2;

$(window).scroll(() => {
  let currPosition = {
    top: $(window).scrollTop(),
    bottom: $(window).scrollTop() + $(window).height(),
  };

  // Navbar
  if (prevPosition.top > currPosition.top) {
    $('#navbar').removeClass('scroll-down');
    $('#navbar').addClass('scroll-up');
  } else {
    $('#navbar').removeClass('scroll-up');
    $('#navbar').addClass('scroll-down');
  }
  if (currPosition.top > 700) {
    $('#navbar').addClass('change-bg');
  } else {
    $('#navbar').removeClass('change-bg');
  }

  //Video Promotional
  if (
    currPosition.bottom > videoPositionTop &&
    currPosition.top <= videoPositionTop + $(window).height()
  ) {
    if (currPosition.top > prevPosition.top) {
      planetPosition.top += planetMovingSpeed;
      planetPosition.bottom -= planetMovingSpeed;
    } else {
      planetPosition.top -= planetMovingSpeed;
      planetPosition.bottom += planetMovingSpeed;
    }
    document.documentElement.style.setProperty(
      '--top-position',
      planetPosition.top + 'px'
    );
    document.documentElement.style.setProperty(
      '--bottom-position',
      planetPosition.bottom + 'px'
    );
  }

  prevPosition.top = currPosition.top;
  prevPosition.bottom = prevPosition.bottom;
});

// Video Promotional Video Play
const playPromotionalVideo = () => {
  $('#play-button').hide();
  $('#vid').show();
  $('#vid')[0].src += '&autoplay=1';
};
