
/* ==========================================================================
	Asynchronous Loading Google Maps
============================================================================= */
function loadScript() {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = '://https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.4885965210397!2d-71.52313632693856!3d-16.3999935944212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424baba662980f%3A0xfb214b27ee36fad8!2sEl%20Tabl%C3%B3n!5e0!3m2!1ses!2spe!4v1688183052659!5m2!1ses!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';
	document.body.appendChild(script);
}
window.onload = loadScript;

/* ==========================================================================
	Google Maps SETTING's
============================================================================= */
/*
 * define the coordinates of your company
 */

lat = 28.65850;
lng = 77.20341;

var map;
var MY_MAPTYPE_ID = 'custom_style';
 
function initialize() {

	  var featureOpts = [
		 {
				"featureType": "landscape",
				"stylers": [
				  { "weight": 0.1 },
				  { "color": "grey" }
				]
			  },{
				"featureType": "road",
				"elementType": "geometry",
				"stylers": [
				  { "visibility": "simplified" },
				  { "color": "brown" }
				]
			  },{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
				  { "color": "yellow" }
				]
			  },{
				"featureType": "road",
				"elementType": "labels.text.fill",
				"stylers": [
				  { "color": "#2c3e50" }
				]
			  },{
					"featureType": "poi",
					"elementType": "labels.text.fill",
					"stylers": [
					  { "color": "#e74c3c" }
					]
				  },{
				"featureType": "road",
				"elementType": "labels.text.stroke",
				"stylers": [
				  { "color": "Yellow" }
				]
			  },{
				"featureType": "water",
				"stylers": [
				  { "color": "blue" }
				]
			  }
			];
  
  var myLatlng = new google.maps.LatLng(lat,lng);
  var mapOptions = {
    zoom: 11,
    scrollwheel: false,
    mapTypeControl:false,
    streetViewControl:false,
    center: myLatlng,
    mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
      },
      mapTypeId: MY_MAPTYPE_ID
  };
  
  var map = new google.maps.Map(document.getElementById('page_maps'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
  	icon: "images/marker.png",
      map: map
  });
  
  var styledMapOptions = {
		    name: 'Custom Style'
		  };
  
	var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions); 
	map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
	google.maps.event.addDomListener(window, 'load', initialize);
}



/*-----------------------------------------------------------------*/
