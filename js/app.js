jQuery(function($) {

  var clicks = 0;
  $('#catImg').on('click', function() {
    clicks++;
    console.log(clicks);
  });
});
