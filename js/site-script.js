


$(document).ready(function(){



//slider film roll       
(function() {
jQuery(function() {
this.film_rolls || (this.film_rolls = []);
this.film_rolls['demo'] = new FilmRoll({
container: '#demo',
height: 443,
width:380
});
return true;
});
}).call(this);




//smooth scroll
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


})


//Google mao location
function myMap() {

  var myCenter = new google.maps.LatLng(51.523989,-0.100324);
  var mapCanvas = document.getElementById("googleMap");
  var mapOptions = {center: myCenter, zoom: 15};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
}








            