jQuery(function($) {

  var clicks1 = 0;
  var clicks2 = 0;

  $('#clicks1').html(clicks1);
  $('#clicks2').html(clicks2);
  $('#catImg1').on('click', function() {
    clicks1++;
    $('#clicks1').html(clicks1);
  });
  $('#catImg2').on('click', function() {
    clicks2++;
    $('#clicks2').html(clicks2);
  });
});
