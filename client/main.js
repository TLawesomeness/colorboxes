'use strict';

$(document).ready(function() {
  $('#color').click(makeBox);
});

function makeBox() {
  var input = $('#input').val();
  var split = input.split(',');
  // var array = [];
  if (!input) {
    alert('Enter a color');
  } else {
    split.forEach(function(color) {
      var $box = $('<div>');
      $box.addClass('box');
      $box.css('background-color', color);
      $('#showColor').append($box);
    });
  }
}
