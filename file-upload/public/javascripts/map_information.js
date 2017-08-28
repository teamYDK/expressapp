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

 /*   var contentString =
	'<!-- <div id="modal-overlay"></div> -->'+
	'<div class="ex_2" style="left: 275.5px; top: 133.5px;">'+
	'<!-- モーダルウインドウ -->'+
	'<div id="modal-content">'+
	'<form id="detail">'+
	'<p id="username">UserName</p>'+
	'<hr>'+
	'<p id="comment">Comment</p>'+
	'<hr>'+
	'<p>Like　Comment</p>'+
	'<hr>'+
	'</form>'+
	'<img src="picture/Effel.JPG">'+
	'<p>'+
	'<a id="modal-close" class="button-link">'+
	'<p id="close">閉じる</p>'+
	'</a>'+
	'</p>'+
	'<!-- モーダルウィンドウのコンテンツの終了 -->'+
	'</div>'+
	'<p>'+
	'<a id="modal-open" class="button-link"><img class="ipicture" src="picture/tapi.png"></a>'+
	'</p>'+
	'<!-- ここまでモーダルウィンドウ -->'+
	'</div>'; */




    var infowindow = new google.maps.InfoWindow({

      /*<ul>
        <% for item in @messages : %>
          <li><%= item.title %><br/><img src="/uploads/<%= item.file %>" width="300"></li>
        <% end %>
      </ul>*/

	content:
  '<div class="ex_2" style="left: 275.5px; top: 133.5px;">'+
  /* モーダルウインドウ */
    '<div id="modal-content">'+

      '<form id="detail">'+
        '<p id="username">UserName</p>'+
        '<hr>'+
        '<p id="comment">Comment</p>'+
        '<hr>'+
        '<p>Like　Comment</p>'+
        '<hr>'+
      '</form>'+

      '<img src="picture/Paris.JPG">'+

      '<p>'+
      '<a id="modal-close" class="button-link">'+
      '<p id="close">閉じる</p>'+
      '</a>'+
      '</p>'+

      /* モーダルウィンドウのコンテンツの終了 --> */
      '</div>'+

      /*'<p>'+
      '<a id="modal-open" class="button-link">クリックするとモーダルウィンドウが開きます。</a>'+
      '</p>'+*/
      /* ここまでモーダルウィンドウ */
      '</div>'


/*
  '<div>Username<br>Comment<br>'+
  '<ul>'+
  '<% for item in @messages : %>'+
	'<img scr="/uploads/<%= item.file %>'+
  '<% end %>'+
  '<ul>'+
  '<div>'*/


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
