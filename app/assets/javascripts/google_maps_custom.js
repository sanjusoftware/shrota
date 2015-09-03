function gmap_show(event) {
    if ((event.lat == null) || (event.lng == null) ) {    // validation check if coordinates are there
        return 0;
    }

    handler = Gmaps.build('Google');    // map init
    handler.buildMap({ provider: {}, internal: {id: 'map'}}, function(){
        markers = handler.addMarkers([    // put marker method
            {
                "lat": event.lat,    // coordinates from parameter event
                "lng": event.lng,
                "picture": {    // setup marker icon
                    "url": "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=E|E87A00|000000",
                    "width":  100,
                    "height": 100
                },
                "infowindow": "<b>" + event.address + "</b> "
            }
        ]);
        handler.bounds.extendWith(markers);
        handler.fitMapToBounds();
        handler.getMap().setZoom(10);    // set the default zoom of the map
    });
}

function gmap_form(event) {
    handler = Gmaps.build('Google');    // map init
    handler.buildMap({ provider: {}, internal: {id: 'map'}}, function(){
        if (event && event.lat && event.lng) {    // statement check - new or edit view
            markers = handler.addMarkers([    // print existent marker
                {
                    "lat": event.lat,
                    "lng": event.lng,
                    "picture": {
                        "url": "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=E|E87A00|000000",
                        "width":  32,
                        "height": 32
                    },
                    "infowindow": "<b>" + event.address + "</b> "
                }
            ]);
            handler.bounds.extendWith(markers);
            handler.fitMapToBounds();
            handler.getMap().setZoom(10);
        }
        else {    // show the empty map
            handler.fitMapToBounds();
            handler.map.centerOn([52.10, 19.30]);
            handler.getMap().setZoom(10);
        }
    });

    var markerOnMap;

    function placeMarker(location) {    // simply method for put new marker on map
        if (markerOnMap) {
            markerOnMap.setPosition(location);
        }
        else {
            markerOnMap = new google.maps.Marker({
                position: location,
                map: handler.getMap()
            });
        }
    }

    google.maps.event.addListener(handler.getMap(), 'click', function(event) {    // event for click-put marker on map and pass coordinates to hidden fields in form
        placeMarker(event.latLng);
        document.getElementById("map_lat").value = event.latLng.lat();
        document.getElementById("map_lng").value = event.latLng.lng();
    });
}

