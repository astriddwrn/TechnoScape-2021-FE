const expandQuestionsAnswer = (e) => {
  let faqItem = e.closest('.faq-content-item');
  let faqAns = $(faqItem.lastElementChild);
  let activeItem = $('.faq-content-item.active');
  let activeAns = $('.ans.active');

  const removeActiveElm = () => {
    $(activeItem).removeClass('active');
    $(activeAns).slideToggle();
    $(activeAns).removeClass('active');
  };

  const addActiveElm = () => {
    $(faqItem).addClass('active');
    $(faqAns).addClass('active');
    $(faqAns).slideToggle();
  };

  if ($(faqItem).hasClass('active')) {
    removeActiveElm();
  } else {
    removeActiveElm();
    addActiveElm();
  }
};

$(document).ready(function () {
  let viewportWidth = $(window).width();

  $('.faq-caro').slick({
    prevArrow: $('#faq-nav-left'),
    nextArrow: $('#faq-nav-right'),
    dots: true,
  });

  if (viewportWidth < 993) {
    $('.why-content').slick({
      arrows: false,
      dots: true,
    });
  }

  if (viewportWidth < 576) {
    $('.speakers').slick({
      arrows: false,
      dots: true,
    });
  }

  $(window).resize(function () {
    let viewportWidth = $(window).width();

    if (viewportWidth > 993) {
      $('.why-content').slick('unslick');
    }
    if (viewportWidth > 576) {
      $('.speakers').slick('unslick');
    }
  });
});
