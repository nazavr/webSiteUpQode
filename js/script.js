
// jQuery for page scrolling feature - requires jQuery Easing plugin

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 'easeInOutExpo');
        event.preventDefault();

    });
});



// Closes the Responsive Menu on Menu Item Click

$('.navbar-collapse ul li a').click(function() {
    $(this).closest('.collapse').collapse('toggle');
});



// Button Toggle

$(function(){
 var obj = document.querySelectorAll('.nav-icon');
 var list = document.querySelectorAll('a.page-scroll');

  for(var i = obj.length -1;i>=0;i--){
      var toggle = obj[i];
      toggleactive(toggle);
  }
  
  function toggleactive(toggle) {
    toggle.addEventListener("click",function() {
      
      if(this.classList.contains("active") === true) {
        this.classList.remove("active");
      }
      else {
        this.classList.add("active");
      }
    });

    document.addEventListener("click", function(event) {
      if (event.toElement.classList.contains("page-scroll") === true) {
        var icon = document.querySelector('.nav-icon');
          
        if(icon.classList.contains("active") === true) {
          icon.classList.remove("active");
        }
      };
    });
  }

});



// HIDE button OLDER POST & SHOW OTHER OLDER POSTS 

$(function(){
    $('.pager').click(function(){
        $('.pager').hide();
        $('.hidden-post').show();
    });
});



// Carousel Aytoplay

$('.carousel').carousel({
  interval: 2000
});

$('.carousel_2').carousel({
  interval: 4000
});


// Animated

$(document).ready(function(){
  $('.expand').viewportChecker({
    classToAdd: 'ps'
});
  $('.expand2').viewportChecker({
    classToAdd: 'css'
  });
  $('.expand3').viewportChecker({
    classToAdd: 'js'
  });
  $('.expand4').viewportChecker({
    classToAdd: 'wp'
  });
});



// Map Script

// Latitude and longitude UpQode

var position = [49.8396830, 24.0297170];
 
function showGoogleMaps() {
 
var latLng = new google.maps.LatLng(position[0], position[1]);
 
var mapOptions = {
zoom: 13, // initialize zoom level - the max value is 21
streetViewControl: false, // hide the yellow Street View pegman
scaleControl: true, // allow users to zoom the Google Map
mapTypeId: google.maps.MapTypeId.ROADMAP,
center: latLng
};
 
map = new google.maps.Map(document.getElementById('googlemaps'),
mapOptions);
 
// Show the default red marker at the location
marker = new google.maps.Marker({
position: latLng,
map: map,
draggable: false,
animation: google.maps.Animation.DROP
});
}
 
google.maps.event.addDomListener(window, 'load', showGoogleMaps);


