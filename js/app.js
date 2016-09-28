jQuery(function($) {

  var clicks = 0;
  $('#clicks').html(clicks);
  $('#catImg').on('click', function() {
    clicks++;
    $('#clicks').html(clicks);
    console.log(clicks);
  });
});
