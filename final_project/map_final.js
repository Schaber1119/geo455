var mymap = L.map("map", {center: [42, 22],
    zoom: 5,
    layers: streets,});

var streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
    })
streets.addTo(mymap);

var grayscale = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1
    }).addTo(mymap);

var myIcon1 = L.icon({
    iconUrl: 'minor.png',
    iconSize: [15, 15],
    iconAnchor: [10, 10],
    popupAnchor: [-2, -10],
});

var myIcon2 = L.icon({
    iconUrl: 'major.png',
    iconSize: [15, 15],
    iconAnchor: [10, 10],
    popupAnchor: [-2, -10],
});



//~~~~~~~~~~~~~~~~~~~~~~~~~Roads~~~~~~~~~~~~~~~~~~~~~~~~~~~

var roads = L.geoJSON(roads, {color: "red"}).addTo(mymap);

//~~~~~~~~~~~~~~~~~~~~~~~~~Rivers~~~~~~~~~~~~~~~~~~~~~~~~~~~
var rivers = L.geoJSON(rivers).addTo(mymap);


var empire = L.geoJSON(empire, {color: "purple"}).addTo(mymap);


//~~~~~~~~~~~~~~~~~~~~~~~~~Minor Cities~~~~~~~~~~~~~~~~~~~~~~~~~~~
var minor = L.geoJSON(minor, {
    pointToLayer: function(feature,latlng){
        return L.marker(latlng, {icon: myIcon1});
    }
}).bindPopup(function (layer){
    return '<b>Ancient Name: </b>' + layer.feature.properties.Ancient_Toponym +
        '<br><b>Modern Name: </b>' + layer.feature.properties.Modern_Toponym +
        '<br><b>Country: </b>' + layer.feature.properties.Country
}).addTo(mymap);

//~~~~~~~~~~~~~~~~~~~~~~~~~Major Cities~~~~~~~~~~~~~~~~~~~~~~~~~~~

var major = L.geoJSON(major, {
    pointToLayer: function(feature,latlng){
        return L.marker(latlng, {icon: myIcon2});
    }
}).bindPopup(function (layer){
    return '<b>Ancient Name: </b>' + layer.feature.properties.Ancient_Toponym +
        '<br><b>Modern Name: </b>' + layer.feature.properties.Modern_Toponym +
        '<br><b>Country: </b>' + layer.feature.properties.Country
}).addTo(mymap);


//~~~~~~~~~~~~~~~~~~~~~~~~~Minimap~~~~~~~~~~~~~~~~~~~~~~~~~~~
var miniMap = new L.Control.MiniMap(L.tileLayer('https://api.maptiler.com/maps/topo/{z}/{x}/{y}.png?key=tZnptaeI9RvKHsX18rbW'), {
    toggleDisplay: true,
    minimized: true,
    position: 'bottomleft'
}).addTo(mymap);

L.control.scale({position: 'bottomright', maxWidth: '150', metric: 'True'}).addTo(mymap);

//~~~~~~~~~~~~~~~~~~~~~~~~~Overlay~~~~~~~~~~~~~~~~~~~~~~~~~~~

var overlayMaps = {
    "<img src='roads.png' height=16> Roman Road Network": roads,
    "<img src='rivers.png' height=16> Rivers in the Roman Empire": rivers,
    "<img src='empire.png' height=16> Roman Empire 117 AD": empire,
    "<img src='minor.png' height=16> Minor Roman Cities": minor,
    "<img src='major.png' height=16> Major Roman Cities": major,
};
var legend = L.control.layers({}, overlayMaps, {collapsed: false}).addTo(mymap);