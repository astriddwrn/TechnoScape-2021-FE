const playVideo = () => {
  $('#play-button').hide();
  $('#vid').show();
  $('#vid')[0].src += '&autoplay=1';
};
