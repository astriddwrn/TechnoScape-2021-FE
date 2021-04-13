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

const fileInput = (e) => {
  const file = e.files[0];
  console.log(file);
  const fileName = file.name;
  const fileSize = file.size;

  if (fileSize > 5 * 1024 * 1024) {
    return false;
  }

  if (
    fileName.includes('.jpg') ||
    fileName.includes('.jpeg') ||
    fileName.includes('.pdf') ||
    fileName.includes('.png')
  ) {
    return false;
  }

  $('#cv').text(fileName);
};
