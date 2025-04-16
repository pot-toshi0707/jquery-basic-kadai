$(function() {
  $('#color').on('click', function() {
    $('#target').css('color', 'red');
  });

  $('#text').on('click', function() {
    $('#target').text('Hello');
  });

  $('#fadeOut').on('click', function() {
    $('#target').fadeOut();
  });

  $('#fadeIn').on('click', function() {
    $('#target').fadeIn();
  });

})