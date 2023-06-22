
//Creating Map
const mapContainer = document.getElementById('map-container');

const mapDiv = document.createElement('div');
mapDiv.setAttribute('id', 'map');
mapContainer.appendChild(mapDiv);

const map = L.map('map').setView([-27.470125, 153.021072], 12);

//Map Style
L.tileLayer('https://tile.jawg.io/jawg-terrain/{z}/{x}/{y}{r}.png?access-token=befJwIMQ1LGqatCnABKXIGIx5p9gItfQXB5wnRuxHVOnyrHE47IQlGF9Opri8EqU', {}).addTo(map);
map.attributionControl.addAttribution("<a href=\"https://www.jawg.io\" target=\"_blank\">&copy; Jawg</a> - <a href=\"https://www.openstreetmap.org\" target=\"_blank\">&copy; OpenStreetMap</a>&nbsp;contributors")

//Minimum Zoom
map.options.minZoom = 7;

//Setting Bounds
const somersetLatLng = L.latLng( -27.1190, 152.5511);
const coralSeaLatLng = L.latLng(-27.863158, 153.572523);

const bounds = L.latLngBounds(somersetLatLng, coralSeaLatLng);
map.maxBoundsViscosity = 1.0;
map.setMaxBounds(bounds);

//Custom Icons
const shadowUrl = './images/drop-pin-shadow.png';
const iconSize = [42, 41];
const iconAnchor = [21, 41];
const shadowSize = [42, 41];
const shadowAnchor = [21, 41];


const youIcon = L.icon({
    iconUrl: './images/you-are-here-drop-pin.png',
    shadowUrl,
    iconSize,
    iconAnchor,
    shadowSize,
    shadowAnchor,
})

//Creating Current Location Marker
// const youMarker = L.marker([0, 0]).addTo(map);
                     
currPos = (pos) => {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;

    // marker.setLatLng([lat, lng]).update();
    L.marker([lat, lng], {icon:youIcon}).update().addTo(map)
}

navigator.geolocation.getCurrentPosition(currPos);

//Hiding Info Container
const hideBtn = document.querySelector('.min-btn');
const hideBtnImg = document.querySelector('.min-btn-img');
const siteContainer = document.querySelector('.site-container');
const infoContainer = document.querySelector('.info-container');

function hideInfo(e){
    if(e.target === hideBtn || e.target === hideBtnImg){
        infoContainer.classList.add('hide-info');
        console.log(infoContainer);
        checkUI();
        createMaxInfo();
    }
}

//Maximising Info Container
function createMaxInfo(){
    const maxInfoDiv = document.createElement('div');
    const maxBtn = createMaxBtn('max-btn max-btn:hover');
    maxInfoDiv.appendChild(maxBtn);
    
    
    maxInfoDiv.classList.add('max-info-container');
    siteContainer.insertBefore(maxInfoDiv, mapContainer);
}

function createMaxBtn(classes){
    const maxBtn = document.createElement('button');
    maxBtn.className = classes;

    const maxBtnImg = createMaxBtnImg('max-btn-img');
    maxBtn.appendChild(maxBtnImg);

    return maxBtn;
}

function createMaxBtnImg(classes){
    const maxBtnImg = document.createElement('img');
    maxBtnImg.className = classes;
    maxBtnImg.src = './images/icons8-right-arrow-50.png';
    return maxBtnImg;
}

const maxBtn = document.querySelector('.maxBtn');
const maxBtnImg = document.querySelector('.maxBtnImg');

function maxInfo(e){
    if(e.target.classList.contains('max-btn') || e.target.classList.contains('max-btn-img')){
        infoContainer.classList.remove('hide-info');

        const removeDiv = document.querySelector('.max-info-container');
        removeDiv.remove();

        siteContainer.classList.remove('site-container-hide-info');
    }

}
 




function checkUI(){
    if(infoContainer.classList.contains('hide-info')){
        siteContainer.classList.add('site-container-hide-info');
    }
}

document.addEventListener('click', hideInfo);
document.addEventListener('click', maxInfo);






































