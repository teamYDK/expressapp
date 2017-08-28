var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: new google.maps.LatLng(2.8,-187.3),
    mapTypeId: 'terrain'
  });

  // Create a <script> tag and set the USGS URL as the source.
  var script = document.createElement('script');

  // <<外部スクリプトファイルのURLを指定>>
  script.src = 'URL';
    document.getElementsByTagName('head')[0].appendChild(script);
}

// Loop through the results array and place a marker for each
// set of coordinates.
result = function(place_content) {
  for (var i = 0; i < result.length; i++) {
      var username = result.username[i];
      var coords = result.geometry.coordinates;
      var latLng = new google.maps.LatLng(coords[1],coords[0]);
      var title = result.[i].title;
      var comment = result.[i].comment;
      var picture = result.[i].comment;
      var myMarker = new google.maps.Marker({
	  position: latLng,
	  map: map
      });
      attachMessage(myMarker);
  }
