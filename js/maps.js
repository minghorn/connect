function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(-25.363882,131.044922),
    zoom: 2,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(-25.363882,131.044922),
    title: "Hello World",
    animation: google.maps.Animation.DROP
  });

  marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);