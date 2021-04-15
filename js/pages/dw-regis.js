const next = (e) => {
  const part = $(e).parents('.part');
  const nextPart = part.next('.part');
  const id = $(nextPart).attr('id');

  $(`.bar#${id}`).addClass('active');
  setTimeout(() => $(`.point#${id}`).addClass('active'), 400);
  part.fadeOut('slow', () => part.hide(() => nextPart.fadeIn('slow')));
};

const back = (e) => {
  const part = $(e).parents('.part');
  const prevPart = part.prev('.part');
  const id = $(part).attr('id');

  $(`.point#${id}`).removeClass('active');
  setTimeout(() => $(`.bar#${id}`).removeClass('active'), 400);
  part.fadeOut('slow', () => part.hide(() => prevPart.fadeIn('slow')));
};

const validateInput = (e) => {
  const file = e.files[0];
  const fileName = file.name;
  const fileSize = file.size;
  const feedback = $('.invalid-feedback');

  if (fileSize > 5 * 1024 * 1024) {
    $(e)[0].setCustomValidity('File must be less than 5 Mb');
    $(feedback).text('File must be less than 5 Mb');
  } else if (
    !fileName.includes('.jpg') &&
    !fileName.includes('.jpeg') &&
    !fileName.includes('.pdf') &&
    !fileName.includes('.png')
  ) {
    console.log(fileName.includes('.pdf'));
    console.log(fileName);
    $(e)[0].setCustomValidity('File type must be .jpeg, .jpg, .pdf, or .png');
    $(feedback).text('File type must be .jpeg, .jpg, .pdf, or .png');
  } else {
    $(e)[0].setCustomValidity('');
    $(feedback).text('');
  }
  $('#cv').text(fileName);
};

const onFormSubmit = () => {
  const inp = $('#cv-input')[0];
  const feedback = $('.invalid-feedback');

  if (!inp.value) {
    $('#cv-input')[0].setCustomValidity('Must input CV');
    $(feedback).text('Must input CV');
  }
};
