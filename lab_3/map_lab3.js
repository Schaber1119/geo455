var mymap = L.map("map").setView([41.02826089204844, -90.18687903748238], 6);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2NoYWJlcjExMTkiLCJhIjoiY2t6bmN1YWxkNW9vbTJucGgyYjlmOTVqcSJ9.YOF5Esp7JPsbPbdyt6ps9A', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

var myIcon1 = L.icon({
    iconUrl: 'images/effigy.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],});

var zurich = L.marker([38.65561727016546, -90.0618228], {icon: myIcon1}).bindPopup("<b>Cahokia Mounds State Historic Site").addTo(mymap);
var Effigy = L.marker([43.08918263845527, -91.20079210543317], {icon: myIcon1}).bindPopup("<b>Effigy Mounds National Monument").addTo(mymap);
var Aztalan = L.marker([43.068821151374365, -88.86291614355959], {icon: myIcon1}).bindPopup("<b>Aztalan State Park").addTo(mymap);
var Lizard = L.marker([43.4632691277612, -88.13959473240938], {icon: myIcon1}).bindPopup("<b>Lizard Mound County Park").addTo(mymap);
var Cranberry = L.marker([44.16518225481055, -90.0623122545042], {icon: myIcon1}).bindPopup("<b>Cranberry Creek Mound Group State Natural Area").addTo(mymap);
var Man = L.marker([43.48855479577384, -89.67150369687461], {icon: myIcon1}).bindPopup("<b>Man Mound Park").addTo(mymap);
var High = L.marker([44.16686405412237, -88.29070439672995], {icon: myIcon1}).bindPopup("<b>High Cliff State Park").addTo(mymap);
var Panther = L.marker([42.92553218061186, -88.85464503068697], {icon: myIcon1}).bindPopup("<b>Panther Intagliano").addTo(mymap);
var Bow = L.marker([44.59443474870687, -92.50966702211767], {icon: myIcon1}).bindPopup("<b>Bow and Arrow").addTo(mymap);
var Effigy  = L.marker([42.831061553697324, -88.76565730793908], {icon: myIcon1}).bindPopup("<b>Effigy Mounds Preserve").addTo(mymap);