let circle = new Object();
let point = new Object();
let lat = 40.416905919032835;
let lng = -3.703481554985047;
let zoom = 6;

const mymap = L.map("map").setView([lat, lng], zoom);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
  {
    maxZoom: 18,
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
  }
).addTo(mymap);

function createCircle(e) {
  mymap.removeLayer(circle);
  mymap.removeLayer(point);
  if (mymap._zoom < 10) {
    return mymap.setView(e.latlng, 10);
  }

  mymap.setView(e.latlng, 15);
  circle = L.circle([e.latlng.lat, e.latlng.lng], 1000, {
    color: "hsl(225, 100%, 50%)",
    fillColor: "hsl(225, 100%, 50%)",
    fillOpacity: 0.3,
  }).addTo(mymap);

  point = L.marker([e.latlng.lat, e.latlng.lng]).addTo(mymap);
}

mymap.on("click", createCircle);
