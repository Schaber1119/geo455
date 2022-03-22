var customOptions ={'maxWidth': '150','className' : 'custom'};

var landmarks = L.layerGroup();


var streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
});

var grayscale = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1
});

var topo = L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
    layers: 'SRTM30-Colored-Hillshade'
});



var mymap = L.map("map", {
    center: [51.48882027639122, -0.1028811094342392], 
    zoom: 11,
    layers: [grayscale, landmarks]});

var baseLayers = {
    'Grayscale': grayscale,
    'Streets': streets,
    "Hillshade": topo,
	};

function getColor(value) {
    return value > 139 ? '#54278f':
           value > 87  ? '#756bb1':
           value > 53  ? '#9e9ac8':
           value > 32  ? '#cbc9e2':
                         '#f2f0f7';
}
function style(feature){
    return {
        fillColor: getColor(feature.properties.pop_den),   
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.9
    };
}

var geojson; // define a variable to make the geojson layer accessible for the function to use   
            
function highlightFeature(e) {
    // Get access to the feature that was hovered through e.target
    var feature = e.target;

    // Set a thick grey border on the feature as mouseover effect
    // Adjust the values below to change the highlighting styles of features on mouseover
    // Check out https://leafletjs.com/reference-1.3.4.html#path for more options for changing style
    feature.setStyle({
        weight: 5,
        color: '#666',
        fillOpacity: 0.7
    });

    // Bring the highlighted feature to front so that the border doesn’t clash with nearby states
    // But not for IE, Opera or Edge, since they have problems doing bringToFront on mouseover
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        feature.bringToFront();
    }
}

var geojson; // define a variable to make the geojson layer accessible for the function to use   
            
function resetHighlight(e) {
    geojson.resetStyle(e.target);
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature, // Do what defined by the highlightFeature function on mouseover
        mouseout: resetHighlight,    // Do what defined by the resetHighlight function on mouseout
    });
}


geojson = L.geoJson(data, {
    style:style,
    onEachFeature: onEachFeature
}).bindPopup(function (layer){
    return layer.feature.properties.NAME 
           + '<p style="color:purple">' + layer.feature.properties.pop_den.toString() + ' people/hectare </p>';       
}).addTo(mymap);



var legend = L.control({position: 'bottomright'}); // Try the other three corners if you like.

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'legend'),
        grades = [0, 32, 53, 87, 139]; // The break values to define the intervals of population, note we begin from 0 here

    div.innerHTML = '<b>Density per hectare</b><br>'; // The legend title (HTML-based)

    // Loop through our the classes and generate a label with a color box for each interval.
    // If you are creating a choropleth map, you DO NOT need to change lines below.
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
        '<i style="background:' + getColor(grades[i] + 1) + '"></i>' +
        grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};
legend.addTo(mymap);

////////////////////////////////////////////////////////////////////////


    
function style_2(feature){
    return {
        fillColor: getColor_2(feature.properties.lang_den),   
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.9
    };
}

function getColor_2(value) {
    return value > 13  ? '#a50f15':
           value > 7  ? '#de2d26':
           value > 4  ? '#fb6a4a':
           value > 2  ? '#fcae91':
                         '#fee5d9';
}
function highlightFeature_2(e) {
    
    var feature = e.target;

    
    feature.setStyle({
        weight: 5,
        color: '#666',
        fillOpacity: 0.7
    });

    
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        feature.bringToFront();
    }
}

var geojson_2;  
            
function resetHighlight_2(e_2) {
    geojson_2.resetStyle(e_2.target);
}

function onEachFeature_2(feature, layer) {
    layer.on({
        mouseover: highlightFeature_2, 
        mouseout: resetHighlight_2,   
    });
}

geojson_2 = L.geoJson(data, {
    style:style_2,
    onEachFeature: onEachFeature_2
}).bindPopup(function (layer){
    return layer.feature.properties.NAME 
           + '<p style="color:red">' + layer.feature.properties.lang_den.toString() + ' Non English Speaking/hectare </p>';       
}).addTo(mymap);

var legend = L.control({position: 'bottomright'}); // Try the other three corners if you like.

    legend.onAdd = function (mymap) {

        var div = L.DomUtil.create('div', 'legend'),
            grades_2 = [1, 2, 4, 7, 13]; // The break values to define the intervals of population, note we begin from 0 here

        div.innerHTML = '<b>Language Density <br></b>'; // The legend title (HTML-based), in this case it's Population Density 2011

        // Loop through our the classes and generate a label with a color box for each interval.
        // If you are creating a choropleth map, you DO NOT need to change lines below.
        for (var i = 0; i < grades_2.length; i++) {
            div.innerHTML +=
            '<i style="background:' + getColor_2(grades_2[i] + 1) + '"></i>' +
            grades_2[i] + (grades_2[i + 1] ? '&ndash;' + grades_2[i + 1] + '<br>' : '+');
        }

        return div;
    };

    legend.addTo(mymap);

var mapLayers = {
    'Population': geojson,
    'Language': geojson_2,
};

legend.addTo(mymap);

var layerControl = L.control.layers(mapLayers).addTo(mymap);