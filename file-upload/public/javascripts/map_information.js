function initMap(){



        var map = new google.maps.Map(document.getElementById('map'), {

	center: {lat: 35.681, lng: 139.767},

	zoom: 5,

	styles: [

            {elementType: 'geometry', stylers: [{color: '#d3d6dd'}]},

            {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},

            {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},

            {

                featureType: 'administrative',

                elementType: 'geometry.stroke',

                stylers: [{color: '#616266'}]

            },

            {

                featureType: 'administrative.land_parcel',

                elementType: 'geometry.stroke',

                stylers: [{color: '#dcd2be'}]

            },

            {

                featureType: 'administrative.land_parcel',

                elementType: 'labels.text.fill',

                stylers: [{color: '#31c9eb'}]

            },

            {

                featureType: 'landscape.natural',

                elementType: 'geometry',

                stylers: [{color: '#d3d6dd'}]

            },

            {

                featureType: 'poi',

                elementType: 'geometry',

                stylers: [{color: '#d3d6dd'}]

            },

            {

                featureType: 'poi',

                elementType: 'labels.text.fill',

                stylers: [{color: '#cc7a9f'}]

            },

            {

                featureType: 'poi.park',

                elementType: 'geometry.fill',

                stylers: [{color: '#d3d6dd'}]

            },

            {

                featureType: 'poi.park',

                elementType: 'labels.text.fill',

                stylers: [{color: '#447530'}]

            },

            {

                featureType: 'road',

                elementType: 'geometry',

                stylers: [{color: '#f5f1e6'}]

            },

            {

                featureType: 'road.arterial',

                elementType: 'geometry',

                stylers: [{color: '#f5f1e6'}]

            },

            {

                featureType: 'road.highway',

                elementType: 'geometry',

                stylers: [{color: '#f5f1e6'}]

            },

            {

                featureType: 'road.highway',

                elementType: 'geometry.stroke',

                stylers: [{color: '#f5f1e6'}]

            },

            {

                featureType: 'road.highway.controlled_access',

                elementType: 'geometry',

                stylers: [{color: '#f5f1e6'}]

            },

            {

                featureType: 'road.highway.controlled_access',

                elementType: 'geometry.stroke',

                stylers: [{color: '#f5f1e6'}]

            },

            {

                featureType: 'road.local',

                elementType: 'labels.text.fill',

                stylers: [{color: '#806b63'}]

            },

            {

                featureType: 'transit.line',

                elementType: 'geometry',

                stylers: [{color: '#dfd2ae'}]

            },

            {

                featureType: 'transit.line',

                elementType: 'labels.text.fill',

                stylers: [{color: '#8f7d77'}]

            },

            {

                featureType: 'transit.line',

                elementType: 'labels.text.stroke',

                stylers: [{color: '#ebe3cd'}]

            },

            {

                featureType: 'transit.station',

                elementType: 'geometry',

                stylers: [{color: '#dfd2ae'}]

            },

            {

                featureType: 'water',

                elementType: 'geometry.fill',

                stylers: [{color: '#315fcc'}]

            },

            {

                featureType: 'water',

                elementType: 'labels.text.fill',

                stylers: [{color: '#ffffff'}]

            }

        ]

    });


    var uluru = {lat: -25.363, lng: 131.044};

    var contentString = '<div id="content">'+

	'<div id="siteNotice">'+

	'</div>'+

	'<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+

	'<div id="bodyContent">'+

	'<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +

	'sandstone rock formation in the southern part of the '+

	'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+

	'south west of the nearest large town, Alice Springs; 450&#160;km '+

	'(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+

	'features of the Uluru - Kata Tjuta National Park. Uluru is '+

	'sacred to the Pitjantjatjara and Yankunytjatjara, the '+

	'Aboriginal people of the area. It has many springs, waterholes, '+

	'rock caves and ancient paintings. Uluru is listed as a World '+

	'Heritage Site.</p>'+

	'<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+

	'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+

	'(last visited June 22, 2009).</p>'+

	'</div>'+

	'</div>';



    var infowindow = new google.maps.InfoWindow({

	content: contentString

    });



    var marker = new google.maps.Marker({

	position: uluru,

	map: map,

	/*  title: 'Uluru (Ayers Rock)' */

    });

    marker.addListener('click', function() {

	infowindow.open(map, marker);

    });



}
