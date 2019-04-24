var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 48.149285, lng: 17.121549},
      zoom: 16
    });
  }
  $('a[href^="#"]').click(function() {

$('html,body').animate({ scrollTop: $(this.hash).offset().top-90}, 600);
$('.navbar-collapse').collapse('hide');
return false;

e.preventDefault();

});