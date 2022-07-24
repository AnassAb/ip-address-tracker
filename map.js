var locationIcon = L.icon({
  iconUrl: "./images/icon-location.svg",
  iconSize: [40, 50], // size of the icon
  iconAnchor: [25, 55], // point of the icon which will correspond to marker's location
});

function setMap(lat, lng) {
  var map = new L.Map("map", {
    attributionControl: false,
    zoomControl: false,
  });
  map.setView(new L.LatLng(lat, lng), 13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "OSM",
  }).addTo(map);

  L.marker([lat, lng], { icon: locationIcon }).addTo(map);
}
