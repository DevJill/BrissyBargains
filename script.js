const mapContainer = document.getElementById('map-container');

const mapDiv = document.createElement('div');
mapDiv.setAttribute('id', 'map');
mapContainer.appendChild(mapDiv);

















const map = L.map('map').setView([-27.470125, 153.021072], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//Minimum Zoom
map.options.minZoom = 7;

//Setting Bounds

const somersetLatLng = L.latLng( -27.1190, 152.5511);
const jacobsWellLatLng = L.latLng(-27.786249, 153.359535);

const bounds = L.latLngBounds(somersetLatLng, jacobsWellLatLng);
map.maxBoundsViscosity = 1.0;
map.setMaxBounds(bounds);

//Creating Current Location Marker

const marker = L.marker([0, 0]).addTo(map);
                      
currPos = (pos) => {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;

    marker.setLatLng([lat, lng]).update();
}

navigator.geolocation.getCurrentPosition(currPos);






































