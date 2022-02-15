
var mymap = L.map("map").setView([37.97168071851746, 23.72670586932363], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2NoYWJlcjExMTkiLCJhIjoiY2t6bmN1YWxkNW9vbTJucGgyYjlmOTVqcSJ9.YOF5Esp7JPsbPbdyt6ps9A', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

L.marker([37.97168071851746, 23.72670586932363])
    .addTo(mymap)
    .bindPopup("<b>Hello!</b><br>I am the Parthenon at the Acropolis in Athens, Greece")
    .openPopup();
