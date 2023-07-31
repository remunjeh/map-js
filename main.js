const apiKey = 'pk.eyJ1IjoiYWxmcmVkMjAxNiIsImEiOiJja2RoMHkyd2wwdnZjMnJ0MTJwbnVmeng5In0.E4QbAFjiWLY8k3AFhDtErA';

const mymap = L.map('map').setView([48.135868, 11.552133], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    id: 'mapbox/streets-v11',
    tileSize:512,
    zoomOffset:-1,
    accessToken: apiKey
}).addTo(mymap);


//Adding Marker
// Create map and tile layer
const mymap = L.map('map').setView([48.141513, 11.580050], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: apiKey // Make sure you have 'apiKey' defined somewhere
}).addTo(mymap);

// Adding Marker
const marker = L.marker([48.141513, 11.580050]).addTo(mymap);

// aDD Popup message
let template = `<h3>We visited ResidenzMünchen</h3>
<div style="text-align:center">
<img width="150" height="150" src="images/residenzMunchen.jpg">
</div>
`

marker.bindPopup(template);

// Add circle
const circle = L.circle([48.141513, 11.580050], {
  radius: 500,
  color: "green",
  fillColor: "red", // Fixed: red should be in quotes as it's a string
  fillOpacity: 0.2
}).addTo(mymap).bindPopup(`I am in this circle`);

// Polygon
const polygon = L.polygon([
  [48.217156, 11.642109],
  [48.231210, 11.618043],
  [48.214520, 11.616097],
  [48.214557, 11.654351],
//   [48.217156, 11.642109]

], {
  color: "blue",
  fillColor: "blue",
  fillOpacity: 0.2,
}).addTo(mymap).bindPopup('I am a polygon');
//polygon.bindPopup('I am a polygon')