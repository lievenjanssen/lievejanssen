//<![CDATA[
    if (GBrowserIsCompatible()) {
	  var gicons = [];
      var gmarkers = [];
      var htmls = [];
      var to_htmls = [];
      var from_htmls = [];
      var i=0;

      // A function to create the marker and set up the event window
      function createMarker(point,name,html) {
        var marker = new GMarker(point);

        // The info window version with the "to here" form open
        to_htmls[i] = html + '<br>Directions: <b>To here<\/b> - <a href="javascript:fromhere(' + i + ')">From here<\/a>' +
           '<br>Start address:<form action="http:\/\/maps.google.com\/maps" method="get" target="_blank">' +
           '<input type="text" size="35" maxlength="40" name="saddr" id="saddr" value="" \/><br \/>' +
           '<input value="Get Directions" type="submit" \/>' +
           '<input type="hidden" name="daddr" value="Kwatrechtsteenweg 150, Wetteren, Belgium" \/>';
        // The info window version with the "from here" form open
        from_htmls[i] = html + '<br \/>Directions: <a href="javascript:tohere(' + i + ')">To here<\/a> - <b>From here<\/b>' +
           '<br>End address:<form action="http:\/\/maps.google.com\/maps" method="get"" target="_blank">' +
           '<input type="text" size="35" maxlength="40" name="daddr" id="daddr" value="" \/><br \/>' +
           '<input value="Get Directions" type="submit" \/>' +
           '<input type="hidden" name="saddr" value="Kwatrechtsteenweg 150, Wetteren, Belgium" \/>';
        // The inactive version of the direction info
        html = html + '<br \/>Directions: <a href="javascript:tohere('+i+')">To here<\/a> - <a href="javascript:fromhere('+i+')">From here<\/a>';

        GEvent.addListener(marker, "click", function() {
          marker.openInfoWindowHtml(html);
        });

        gmarkers[i] = marker;
        htmls[i] = html;
        i++;
        //return marker;
		map.addOverlay(marker);
	    marker.openInfoWindowHtml(html);
        GEvent.addListener(marker, "click", function() {
          marker.openInfoWindowHtml(html);
        });
      }

      // functions that open the directions forms
      function tohere(i) {
        gmarkers[i].openInfoWindowHtml(to_htmls[i]);
      }
      function fromhere(i) {
        gmarkers[i].openInfoWindowHtml(from_htmls[i]);
      }

      // Display the map, with some controls and set the initial location 
      var map = new GMap2(document.getElementById("map"));
      map.addControl(new GLargeMapControl());
      //map.addControl(new GMapTypeControl());
      map.setCenter(new GLatLng(51.018277,3.88386), 10);
      // Set up markers with info windows 
      var point = new GLatLng(51.018277,3.88386);
      var marker = createMarker(point,'Gorilla','<h3>Gorilla<\/h3>Kwatrechtsteenweg 150<br \/>9320 Wetteren<br \/>Belgium<br \/>+32 (0)9 366 49 39');
    }
    // display a warning if the browser was not compatible
    else {
      alert("Sorry, the Google Maps API is not compatible with this browser");
    }
    //]]>