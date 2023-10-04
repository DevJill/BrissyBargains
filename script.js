
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
const somersetLatLng = L.latLng(-26.336390035126595, 151.70417250677656);
const coralSeaLatLng = L.latLng(-28.42635504054971, 154.139599395836);

const bounds = L.latLngBounds(somersetLatLng, coralSeaLatLng);
map.maxBoundsViscosity = 1.0;
map.setMaxBounds(bounds);

//Move Control Zoom

map.zoomControl.setPosition('topright')


//Custom Icons
const iconSize = [42, 41];
const iconAnchor = [21, 41];
const shadowSize = [42, 41];
const shadowAnchor = [21, 41];
const popupAnchor = [0, -35]


const youIcon = L.icon({
    iconUrl: './images/you-are-here-drop-pin.png',
    shadowUrl : './images/drop-pin-shadow.png',
    iconSize,
    iconAnchor,
    shadowSize,
    shadowAnchor,
    popupAnchor,
});
const groceryIcon = L.icon({
    iconUrl: './images/grocery-drop-pin.png',
    shadowUrl : './images/grocery-pin-shadow.png',
    iconSize,
    iconAnchor,
    shadowSize,
    shadowAnchor,
    popupAnchor,
});
const vegIcon = L.icon({
    iconUrl: './images/veg-drop-pin.png',
    shadowUrl : './images/veg-pin-shadow.png',
    iconSize,
    iconAnchor,
    shadowSize,
    shadowAnchor,
    popupAnchor,
});
const meatsIcon = L.icon({
    iconUrl: './images/meat-drop-pin.png',
    shadowUrl : './images/meats-pin-shadow.png',
    iconSize,
    iconAnchor,
    shadowSize,
    shadowAnchor,
    popupAnchor,
});
const fishIcon = L.icon({
    iconUrl: './images/fish-drop-pin.png',
    shadowUrl : './images/fish-pin-shadow.png',
    iconSize,
    iconAnchor,
    shadowSize,
    shadowAnchor,
    popupAnchor,
});
const marketsIcon = L.icon({
    iconUrl: './images/markets-drop-pin.png',
    shadowUrl : './images/markets-pin-shadow.png',
    iconSize,
    iconAnchor,
    shadowSize,
    shadowAnchor,
    popupAnchor,
});

//Creating Current Location Marker                   
currPos = (pos) => {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    const youCheckbox = document.getElementById('you-checkbox');
    const youMarker = L.marker([lat, lng], {riseOnHover: true, icon:youIcon}).addTo(map);
    youMarker._icon.classList.add('visible');
    youMarker._shadow.classList.add('visible');
    const youPopup = youMarker.bindPopup(`<strong>Your Location :)</strong>`);
    youPopup.addTo(map);


    function youCheckBoxes(e){
        if(e.target === youCheckbox && youCheckbox.checked == true){
            youMarker._icon.classList.toggle('invisible');
            youMarker._shadow.classList.toggle('invisible');
            youMarker._icon.classList.toggle('visible');
            youMarker._shadow.classList.toggle('visible');
        } else if (e.target === youCheckbox && youCheckbox.checked == false){
            youMarker._icon.classList.toggle('invisible');
            youMarker._shadow.classList.toggle('invisible');
            youMarker._icon.classList.toggle('visible');
            youMarker._shadow.classList.toggle('visible');
        }
    }

    document.addEventListener('click', youCheckBoxes);
}



navigator.geolocation.getCurrentPosition(currPos);
// openPopup()

//Hiding Info Container
const hideBtn = document.querySelector('.min-btn');
const hideBtnImg = document.querySelector('.min-btn-img');
const showBtn = document.querySelector('.max-btn');
const showBtnImg = document.querySelector('.max-btn-img');
const infoContainer = document.querySelector('.info-container');

function hideInfo(e){
    if(e.target === hideBtn && !infoContainer.classList.contains('hide') 
    || e.target === hideBtnImg && !infoContainer.classList.contains('hide')){
        infoContainer.classList.toggle('hide')
    } else if (e.target === showBtn && infoContainer.classList.contains('hide') 
    || e.target === showBtnImg && infoContainer.classList.contains('hide')) {
        infoContainer.classList.remove('hide')
    }
}




//Fieldset Submitted
const fieldset = document.querySelector('.help-fieldset');

function hideFieldsetInputs(e){
        if(e.target.classList.contains('fieldset-submit-suggestion') 
        || e.target.classList.contains('hidden-fieldset-submit-suggestion')){

        const fieldsetDiv = fieldset.querySelector('div');
        if(fieldsetDiv.classList.contains('fieldset-inputs')){
            fieldsetDiv.remove();
        }
       
        const fieldsetNewDiv = document.createElement('div');
        fieldsetNewDiv.classList.add('fieldset-ty-div');

        const fieldsetP1 = document.createElement('p');
        const fieldsetP2 = document.createElement('p');
        fieldsetP1.appendChild(document.createTextNode('Thank you!'));
        fieldsetP2.appendChild(document.createTextNode('Got another suggestion?'));
       
        fieldsetNewDiv.appendChild(fieldsetP1);
        fieldsetNewDiv.appendChild(fieldsetP2);

        const fieldsetBtnDiv = document.createElement('div');
        fieldsetBtnDiv.classList.add('suggest-more-btn');
        const suggestMoreBtn = document.createElement('button');
        suggestMoreBtn.type = 'submit';
        suggestMoreBtn.classList.add('fieldset-submit-more-suggestion');
        suggestMoreBtn.appendChild(document.createTextNode('Suggest More'));

        const hiddenfieldsetBtnDiv = document.createElement('div');

        hiddenfieldsetBtnDiv.classList.add('hidden-suggest-more-btn');
        const hiddenSuggestMoreBtn = document.createElement('button');
        hiddenSuggestMoreBtn.type = 'submit';
        hiddenSuggestMoreBtn.classList.add('hidden-fieldset-submit-more-suggestion');
        hiddenSuggestMoreBtn.appendChild(document.createTextNode('Suggest More'));

        const hiddenNopeBtn = document.createElement('button');
        hiddenNopeBtn.classList.add('nope-btn')
        hiddenNopeBtn.classList.add('hidden-fieldset-submit-more-suggestion');
        hiddenNopeBtn.appendChild(document.createTextNode('Nope'));

        hiddenfieldsetBtnDiv.appendChild(hiddenSuggestMoreBtn);
        hiddenfieldsetBtnDiv.appendChild(hiddenNopeBtn);
        fieldsetBtnDiv.appendChild(suggestMoreBtn);
        fieldsetNewDiv.appendChild(fieldsetBtnDiv);
        fieldsetNewDiv.appendChild(hiddenfieldsetBtnDiv);
        fieldset.appendChild(fieldsetNewDiv);
    }
}

function showFieldsetInputs(e){  
    if(e.target.classList.contains('fieldset-submit-more-suggestion') 
    || e.target.classList.contains('hidden-fieldset-submit-more-suggestion')){
        const fieldsetDiv = fieldset.querySelector('div');
        if(fieldsetDiv.classList.contains('fieldset-ty-div')){
            fieldsetDiv.remove();
        }

        const createFieldsetInputs = document.createElement('div');
        createFieldsetInputs.classList.add('fieldset-inputs');
        const createShrinkInputs = document.createElement('div');
        createShrinkInputs.classList.add('shrink-inputs')

        const shopLabel = document.createElement('label');
        shopLabel.htmlFor = "shop-name-id";
        shopLabel.classList.add('fieldset-input-title');
        shopLabel.appendChild(document.createTextNode('Shop Name:'));
        createShrinkInputs.appendChild(shopLabel);

        const shopLabelInput = document.createElement('input');
        shopLabelInput.setAttribute('id', 'shop-name-id'); 
        shopLabelInput.type = 'text';
        shopLabelInput.name = "shop-name";
        shopLabelInput.classList.add('fieldset-input');
        createShrinkInputs.appendChild(shopLabelInput)

        const shopSuburbLabel = document.createElement('label');
        shopSuburbLabel.htmlFor = "shop-suburb-name-id";
        shopSuburbLabel.classList.add('fieldset-input-title');
        shopSuburbLabel.appendChild(document.createTextNode('Shop Suburb:'));
        createShrinkInputs.appendChild(shopSuburbLabel);

        const shopSuburbInput = document.createElement('input');
        shopSuburbInput.setAttribute('id', 'shop-suburb-name-id');
        shopSuburbInput.type = 'text';
        shopSuburbInput.name = "shop-suburb-name";
        shopSuburbInput.classList.add('fieldset-input');
        createShrinkInputs.appendChild(shopSuburbInput);

        const fieldsetSubmit = document.createElement('input');
        fieldsetSubmit.type = 'submit';
        fieldsetSubmit.value = "Send Suggestion";
        fieldsetSubmit.classList.add('fieldset-submit-suggestion');
        createShrinkInputs.appendChild(fieldsetSubmit);

        const hiddenFieldsetSubmit = document.createElement('input');
        hiddenFieldsetSubmit.type = 'submit';
        hiddenFieldsetSubmit.value = "Send Suggestion";
        hiddenFieldsetSubmit.classList.add('hidden-fieldset-submit-suggestion');

        const fieldsetNvmBtn = document.createElement('button');
        fieldsetNvmBtn.classList.add('nevermind-btn');
        fieldsetNvmBtn.appendChild(document.createTextNode('Nevermind'))

        const fieldsetBtnGrid = document.createElement('div');
        fieldsetBtnGrid.classList.add('hidden-want-to-help-buttons');
        fieldsetBtnGrid.appendChild(fieldsetNvmBtn);
        fieldsetBtnGrid.appendChild(hiddenFieldsetSubmit);

        createFieldsetInputs.appendChild(createShrinkInputs)
        createFieldsetInputs.appendChild(fieldsetBtnGrid)

        fieldset.appendChild(createFieldsetInputs);
    }
}

//Checking and Unchecking Boxes
function groceryCheckBoxes(e){

    const iconImg = document.querySelectorAll('.leaflet-marker-icon');
    const iconImgShadow = document.querySelectorAll('.leaflet-marker-shadow');
    
    if(e.target.classList.contains('grocery-checkbox') && e.target.checked === false){
        for(i = 0; i < iconImg.length; i++){
            if(iconImg[i].classList.contains('grocery-icon') && iconImgShadow[i].classList.contains('grocery-icon')){
                iconImg[i].classList.toggle('visible');
                iconImg[i].classList.toggle('invisible');
                iconImgShadow[i].classList.toggle('visible');
                iconImgShadow[i].classList.toggle('invisible');
            }}} 
            else if (e.target.classList.contains ('grocery-checkbox') && e.target.checked === true){
            for(i = 0; i < iconImg.length; i++){
                if(iconImg[i].classList.contains('grocery-icon') && iconImgShadow[i].classList.contains('grocery-icon')){
                    iconImg[i].classList.toggle('invisible');
                    iconImg[i].classList.toggle('visible');
                    iconImgShadow[i].classList.toggle('invisible');
                    iconImgShadow[i].classList.toggle('visible');
            }}
}};

function vegCheckBoxes(e){

    const iconImg = document.querySelectorAll('.leaflet-marker-icon');
    const iconImgShadow = document.querySelectorAll('.leaflet-marker-shadow');
    
    if(e.target.classList.contains('veg-checkbox') 
    && e.target.checked === false){
        for(i = 0; i < iconImg.length; i++){
            if(iconImg[i].classList.contains('veg-icon') && iconImgShadow[i].classList.contains('veg-icon')){
                iconImg[i].classList.toggle('visible');
                iconImg[i].classList.toggle('invisible');
                iconImgShadow[i].classList.toggle('visible');
                iconImgShadow[i].classList.toggle('invisible');
            }}} 
            else if (e.target.classList.contains ('veg-checkbox') && e.target.checked === true){
            for(i = 0; i < iconImg.length; i++){
                if(iconImg[i].classList.contains('veg-icon') && iconImgShadow[i].classList.contains('veg-icon')){
                    iconImg[i].classList.toggle('invisible');
                    iconImg[i].classList.toggle('visible');
                    iconImgShadow[i].classList.toggle('invisible');
                    iconImgShadow[i].classList.toggle('visible');
            }}
}};

function meatsCheckBoxes(e){

    const iconImg = document.querySelectorAll('.leaflet-marker-icon');
    const iconImgShadow = document.querySelectorAll('.leaflet-marker-shadow');
    
    if(e.target.classList.contains('meats-checkbox') && e.target.checked === false){
        for(i = 0; i < iconImg.length; i++){
            if(iconImg[i].classList.contains('meats-icon') && iconImgShadow[i].classList.contains('meats-icon')){
                iconImg[i].classList.toggle('visible');
                iconImg[i].classList.toggle('invisible');
                iconImgShadow[i].classList.toggle('visible');
                iconImgShadow[i].classList.toggle('invisible');
            }}} 
            else if (e.target.classList.contains ('meats-checkbox') && e.target.checked === true){
            for(i = 0; i < iconImg.length; i++){
                if(iconImg[i].classList.contains('meats-icon') && iconImgShadow[i].classList.contains('meats-icon')){
                    iconImg[i].classList.toggle('invisible');
                    iconImg[i].classList.toggle('visible');
                    iconImgShadow[i].classList.toggle('invisible');
                    iconImgShadow[i].classList.toggle('visible');
            }}
}};

function fishCheckBoxes(e){

    const iconImg = document.querySelectorAll('.leaflet-marker-icon');
    const iconImgShadow = document.querySelectorAll('.leaflet-marker-shadow');
    
    if(e.target.classList.contains('fish-checkbox') && e.target.checked === false){
        for(i = 0; i < iconImg.length; i++){
            if(iconImg[i].classList.contains('fish-icon') && iconImgShadow[i].classList.contains('fish-icon')){
                iconImg[i].classList.toggle('visible');
                iconImg[i].classList.toggle('invisible');
                iconImgShadow[i].classList.toggle('visible');
                iconImgShadow[i].classList.toggle('invisible');
            }}} 
            else if (e.target.classList.contains ('fish-checkbox') && e.target.checked === true){
            for(i = 0; i < iconImg.length; i++){
                if(iconImg[i].classList.contains('fish-icon') && iconImgShadow[i].classList.contains('fish-icon')){
                    iconImg[i].classList.toggle('invisible');
                    iconImg[i].classList.toggle('visible');
                    iconImgShadow[i].classList.toggle('invisible');
                    iconImgShadow[i].classList.toggle('visible');
            }}
}};

function marketsCheckBoxes(e){

    const iconImg = document.querySelectorAll('.leaflet-marker-icon');
    const iconImgShadow = document.querySelectorAll('.leaflet-marker-shadow');
    
    if(e.target.classList.contains('markets-checkbox') && e.target.checked === false){
        for(i = 0; i < iconImg.length; i++){
            if(iconImg[i].classList.contains('markets-icon') && iconImgShadow[i].classList.contains('markets-icon')){
                iconImg[i].classList.toggle('visible');
                iconImg[i].classList.toggle('invisible');
                iconImgShadow[i].classList.toggle('visible');
                iconImgShadow[i].classList.toggle('invisible');
            }}} 
            else if (e.target.classList.contains ('markets-checkbox') && e.target.checked === true){
            for(i = 0; i < iconImg.length; i++){
                if(iconImg[i].classList.contains('markets-icon') && iconImgShadow[i].classList.contains('markets-icon')){
                    iconImg[i].classList.toggle('invisible');
                    iconImg[i].classList.toggle('visible');
                    iconImgShadow[i].classList.toggle('invisible');
                    iconImgShadow[i].classList.toggle('visible');
            }}
}};

//Hiding Site Legend For Mobile
const wantToHelpBtn = document.querySelector('.show-want-to-help')
const showFieldset = document.querySelector('.want-to-help')
const siteLegend = document.querySelector('.legend');


function hideSiteLegend(e){
    if(e.target.classList.contains('show-want-to-help-btn')){
        wantToHelpBtn.style.display = 'none';
        showFieldset.style.display = 'block';
        siteLegend.style.display = 'none';
    }
}

function showSiteLegend(e){
    if(e.target.classList.contains('nevermind-btn') || e.target.classList.contains('nope-btn')){
        wantToHelpBtn.style.display = 'block';
        showFieldset.style.display = 'none';
        siteLegend.style.display = 'block';
    }
}

//Adding Classes to Icons
function settingBS(){

        const iconImg = document.querySelectorAll('.leaflet-marker-icon');
        const iconImgShadow = document.querySelectorAll('.leaflet-marker-shadow');
    
    for(i = 0; i < iconImg.length; i++){
         if(iconImg[i].src.indexOf('grocery') != -1){
             iconImg[i].classList.add('grocery-icon');
             iconImg[i].classList.add('visible');
         } else if(iconImg[i].src.indexOf('veg') != -1){
            iconImg[i].classList.add('veg-icon');
            iconImg[i].classList.add('visible');
         } else if(iconImg[i].src.indexOf('meat') != -1){
             iconImg[i].classList.add('meats-icon');
             iconImg[i].classList.add('visible');
         } else if(iconImg[i].src.indexOf('fish') != -1){
             iconImg[i].classList.add('fish-icon');
             iconImg[i].classList.add('visible');
         } else if(iconImg[i].src.indexOf('markets') != -1){
             iconImg[i].classList.add('markets-icon');
             iconImg[i].classList.add('visible');
         }}
    
    for(i = 0; i < iconImgShadow.length; i++){
         if(iconImgShadow[i].src.indexOf('grocery') != -1){
             iconImgShadow[i].classList.add('grocery-icon');
             iconImgShadow[i].classList.add('visible');
         } else if(iconImgShadow[i].src.indexOf('veg') != -1){
             iconImgShadow[i].classList.add('veg-icon');
             iconImgShadow[i].classList.add('visible');
         } else if(iconImgShadow[i].src.indexOf('meat') != -1){
             iconImgShadow[i].classList.add('meats-icon');
             iconImgShadow[i].classList.add('visible');
         } else if(iconImgShadow[i].src.indexOf('fish') != -1){
             iconImgShadow[i].classList.add('fish-icon');
             iconImgShadow[i].classList.add('visible');
         } else if(iconImgShadow[i].src.indexOf('markets') != -1){
             iconImgShadow[i].classList.add('markets-icon');
             iconImgShadow[i].classList.add('visible');
         }
    }

}


//Trying to Make Search Bar Functional...... Kind of Getting Silly ehehe
    document.addEventListener('click', searchFocus);
    document.addEventListener('click', searchUnfocus);

    const searchInput = document.getElementById('site-search');
    const searchDDContainer = document.querySelector('.search-drop-down-overlay');

    const hiddenSearchInput = document.getElementById('hidden-site-search');
    const hiddenSearchDDContainer = document.querySelector('.hidden-search-drop-down-overlay')

    function searchFocus(e){
        if(e.target === searchInput){
            searchInput.style.borderRadius = '5px 0 0 0'
            searchDDContainer.classList.remove('hide')
        }
    }
    
    hiddenSearchInput.addEventListener('click', (e) => {
        if(e.target === hiddenSearchInput){
            hiddenSearchInput.style.borderRadius = '5px 0 0 0';
            hiddenSearchDDContainer.classList.remove('hide')
        }
    })

    function searchUnfocus(e){
        if(e.target !== searchInput && !e.target.classList.contains('card') 
        && !e.target.classList.contains('search-drop-down-overlay') && !e.target.classList.contains('main-search')
        && !e.target.classList.contains('card-p') && !searchDDContainer.classList.contains('hide')){
            searchInput.style.borderRadius = '5px 0 0 5px'
            searchDDContainer.classList.add('hide');
        }
    }

    document.addEventListener('click', (e) => {
        if(e.target !== hiddenSearchInput && !e.target.classList.contains('hidden-search-drop-down-overlay') 
        && !e.target.classList.contains('mobile-card') && !e.target.classList.contains('hidden-main-search')
        && !e.target.classList.contains('mobile-card-p') && !e.target.classList.contains('card-p') 
        && !hiddenSearchDDContainer.classList.contains('hide')){
            hiddenSearchInput.style.borderRadius = '5px 0 0 5px'
            hiddenSearchDDContainer.classList.add('hide');
            console.log(e.target)
        }
    })

 
//Fetching Data From JSON File
    let storeArray = [];
    let card2Array = [];
    let card2ArrayMobile = [];
    let popupArray = [];
    let popupArrayMobile = [];
    
    fetch('./shops.json')
    .then((response) => {
    return response.json();
    })
    .then((data) => {
    
    for(i = 0; i < data.length; i++){
        if(data[i].type == 'Grocery'){
            const groceryPopup = L.popup()
            .setLatLng([data[i].latNLong[0], data[i].latNLong[1]])
            .setContent
            (`<div class="style-icon"><p><strong><a href="${data[i].website}">${data[i].name}</a></strong></p>
            <p>${data[i].address}</p><br>
                    <div class="grocery-hours"
                        Mon: ${data[i].mondayOpenHrs}<br>
                        Tue: ${data[i].tuesdayOpenHrs}<br>
                        Wed: ${data[i].wednesdaydayOpenHrs}<br>
                        Thu: ${data[i].thrusdayOpenHrs}<br>
                        Fri: ${data[i].fridayOpenHrs}<br>
                        Sat: ${data[i].saturdayOpenHrs}<br>
                        Sun: ${data[i].sundayOpenHrs}<br><br>
                    </div>
                    <div class="phone-grid"><img src="./images/icons8-phone-48.png"><div>Phone: ${data[i].phone}</div></div></div>`)
            const groceryMarker = L.marker([data[i].latNLong[0], data[i].latNLong[1]], {riseOnHover: true, icon:groceryIcon});
            groceryPopup.store = `${data[i].name}`;
            groceryMarker.bindPopup(groceryPopup);
            groceryMarker.addTo(map);
            popupArray.push({name: data[i].name, latNLong: data[i].latNLong, marker: groceryMarker});
            popupArrayMobile.push({name: data[i].name, latNLong: data[i].latNLong, marker: groceryMarker});
        } else if(data[i].type == 'Produce'){
            const vegPopup = L.popup()
            .setLatLng([data[i].latNLong[0], data[i].latNLong[1]])
            .setContent
            (`<div class="style-icon"><p><strong><a href="${data[i].website}">${data[i].name}</a></strong></p>
                    <p>${data[i].address}</p><br>
                    <div class="veg-hours"
                        Mon: ${data[i].mondayOpenHrs}<br>
                        Tue: ${data[i].tuesdayOpenHrs}<br>
                        Wed: ${data[i].wednesdaydayOpenHrs}<br>
                        Thu: ${data[i].thrusdayOpenHrs}<br>
                        Fri: ${data[i].fridayOpenHrs}<br>
                        Sat: ${data[i].saturdayOpenHrs}<br>
                        Sun: ${data[i].sundayOpenHrs}<br><br>
                    </div>
                    <div class="phone-grid"><img src="./images/icons8-phone-48.png"><div>Phone: ${data[i].phone}</div></div></div>`)
            const vegMarker = L.marker([data[i].latNLong[0], data[i].latNLong[1]], {riseOnHover: true, icon:vegIcon});
            vegPopup.store = `${data[i].name}`;
            vegMarker.bindPopup(vegPopup);
            vegMarker.addTo(map);
            popupArray.push({name: data[i].name, latNLong: data[i].latNLong, marker: vegMarker});
            popupArrayMobile.push({name: data[i].name, latNLong: data[i].latNLong, marker: vegMarker});
        } else if(data[i].type == 'Meats'){
            const meatsPopup = L.popup()
            .setLatLng([data[i].latNLong[0], data[i].latNLong[1]])
            .setContent
            (`<div class="style-icon"><p><strong><a href="${data[i].website}">${data[i].name}</a></strong></p>
                    <p>${data[i].address}</p><br>
                    <div class="meats-hours"
                        Mon: ${data[i].mondayOpenHrs}<br>
                        Tue: ${data[i].tuesdayOpenHrs}<br>
                        Wed: ${data[i].wednesdaydayOpenHrs}<br>
                        Thu: ${data[i].thrusdayOpenHrs}<br>
                        Fri: ${data[i].fridayOpenHrs}<br>
                        Sat: ${data[i].saturdayOpenHrs}<br>
                        Sun: ${data[i].sundayOpenHrs}<br><br>
                    </div>
                    <div class="phone-grid"><img src="./images/icons8-phone-48.png"><div>Phone: ${data[i].phone}</div></div></div>`)
            const meatsMarker = L.marker([data[i].latNLong[0], data[i].latNLong[1]], {riseOnHover: true, icon:meatsIcon});
            meatsPopup.store = `${data[i].name}`;
            meatsMarker.bindPopup(meatsPopup);
            meatsMarker.addTo(map);
            popupArray.push({name: data[i].name, latNLong: data[i].latNLong, marker: meatsMarker});
            popupArrayMobile.push({name: data[i].name, latNLong: data[i].latNLong, marker: meatsMarker});
        } else if(data[i].type == 'Fish'){
            const fishPopup = L.popup()
            .setLatLng([data[i].latNLong[0], data[i].latNLong[1]])
            .setContent
            (`<div class="style-icon"><p><strong><a href="${data[i].website}">${data[i].name}</a></strong></p>
                    <p>${data[i].address}</p><br>
                    <div class="fish-hours"
                        Mon: ${data[i].mondayOpenHrs}<br>
                        Tue: ${data[i].tuesdayOpenHrs}<br>
                        Wed: ${data[i].wednesdaydayOpenHrs}<br>
                        Thu: ${data[i].thrusdayOpenHrs}<br>
                        Fri: ${data[i].fridayOpenHrs}<br>
                        Sat: ${data[i].saturdayOpenHrs}<br>
                        Sun: ${data[i].sundayOpenHrs}<br><br>
                    </div>
                    <div class="phone-grid"><img src="./images/icons8-phone-48.png"><div>Phone: ${data[i].phone}</div></div></div>`)
            const fishMarker = L.marker([data[i].latNLong[0], data[i].latNLong[1]], {riseOnHover: true, icon:fishIcon});
            fishPopup.store = `${data[i].name}`;
            fishMarker.bindPopup(fishPopup);
            fishMarker.addTo(map);
            popupArray.push({name: data[i].name, latNLong: data[i].latNLong, marker: fishMarker});
            popupArrayMobile.push({name: data[i].name, latNLong: data[i].latNLong, marker: fishMarker});
        } else if(data[i].type == 'Markets'){
            const marketsPopup = L.popup()
            .setLatLng([data[i].latNLong[0], data[i].latNLong[1]])
            .setContent
            (`<div class="style-icon"><p><strong><a href="${data[i].website}">${data[i].name}</a></strong></p>
                    <p>${data[i].address}</p><br>
                    <div class="markets-hours"
                        Mon: ${data[i].mondayOpenHrs}<br>
                        Tue: ${data[i].tuesdayOpenHrs}<br>
                        Wed: ${data[i].wednesdaydayOpenHrs}<br>
                        Thu: ${data[i].thrusdayOpenHrs}<br>
                        Fri: ${data[i].fridayOpenHrs}<br>
                        Sat: ${data[i].saturdayOpenHrs}<br>
                        Sun: ${data[i].sundayOpenHrs}<br><br>
                    </div>
                    <div class="phone-grid"><img src="./images/icons8-phone-48.png"><div>Phone: ${data[i].phone}</div></div></div>`)
            const marketsMarker = L.marker([data[i].latNLong[0], data[i].latNLong[1]], {riseOnHover: true, icon:marketsIcon});
            marketsPopup.store = `${data[i].name}`;
            marketsMarker.bindPopup(marketsPopup);
            marketsMarker.addTo(map);
            popupArray.push({name: data[i].name, latNLong: data[i].latNLong, marker: marketsMarker});
            popupArrayMobile.push({name: data[i].name, latNLong: data[i].latNLong, marker: marketsMarker});
        }

        settingBS();

    };



    for(j = 0; j < data.length; j++){

        const div = document.createElement('div');
        div.classList.add('card');
        div.classList.add('card-p');

        if(data[j].type === 'Grocery'){
            div.classList.add('grocery-card')
            div.classList.add('grocery')
            div.classList.add('groceries')
            div.classList.add('supermarket')
        } else if(data[j].type === 'Produce'){
            div.classList.add('veg-card')
            div.classList.add('vegetables')
            div.classList.add('veg')
            div.classList.add('fruit')
            div.classList.add('fruits')
        } else if(data[j].type === 'Meats'){
            div.classList.add('meats-card');
            div.classList.add('butcher');
            div.classList.add('butchers');
            div.classList.add('meat');
            div.classList.add('meat');
        } else if(data[j].type === 'Fish'){
            div.classList.add('fish-card')
            div.classList.add('fish')
        } else if(data[j].type === 'Markets'){
            div.classList.add('markets-card')
            div.classList.add('market')
            div.classList.add('markets')
        }

        const paragraph = document.createElement('p');
        paragraph.classList.add('card-p');

        const strongP = document.createElement('strong');
        strongP.classList.add('card-p');
        strongP.appendChild(document.createTextNode(data[j].name));

        paragraph.appendChild(strongP);

        const paragraph2 = document.createElement('p')
        paragraph2.classList.add('card-p');
        paragraph2.appendChild(document.createTextNode(data[j].address));

        div.appendChild(paragraph);
        div.appendChild(paragraph2);

        searchDDContainer.appendChild(div);

        card2Array.push({name: data[j].name, element : div, latNLong: data[j].latNLong});
    }

    for(j = 0; j < data.length; j++){

        const div = document.createElement('div');
        div.classList.add('mobile-card');
        div.classList.add('mobile-card-p');

        if(data[j].type === 'Grocery'){
            div.classList.add('grocery-card')
            div.classList.add('grocery')
            div.classList.add('groceries')
            div.classList.add('supermarket')
        } else if(data[j].type === 'Produce'){
            div.classList.add('veg-card')
            div.classList.add('vegetables')
            div.classList.add('veg')
            div.classList.add('fruit')
            div.classList.add('fruits')
        } else if(data[j].type === 'Meats'){
            div.classList.add('meats-card');
            div.classList.add('butcher');
            div.classList.add('butchers');
            div.classList.add('meat');
        } else if(data[j].type === 'Fish'){
            div.classList.add('fish-card')
            div.classList.add('fish')
        } else if(data[j].type === 'Markets'){
            div.classList.add('markets-card')
            div.classList.add('market')
            div.classList.add('markets')
        }

        const paragraph = document.createElement('p');
        paragraph.classList.add('card-p');

        const strongP = document.createElement('strong');
        strongP.classList.add('card-p');
        strongP.appendChild(document.createTextNode(data[j].name));

        paragraph.appendChild(strongP);

        const paragraph2 = document.createElement('p')
        paragraph2.classList.add('card-p');
        paragraph2.appendChild(document.createTextNode(data[j].address));

        div.appendChild(paragraph);
        div.appendChild(paragraph2);


        hiddenSearchDDContainer.appendChild(div)

        card2ArrayMobile.push({name: data[j].name, element : div, latNLong: data[j].latNLong});
    }
})

//Search/Checkbox Tings
const searchBtn = document.querySelector('#main-search');

function hidingAndUnhidingIconsForSearch(){
    const iconImg = document.querySelectorAll('.leaflet-marker-icon');
    const iconImgShadow = document.querySelectorAll('.leaflet-marker-shadow');

    card2Array.forEach(card => {

        if(searchInput.value === ''){
            searchDDContainer.classList.add('hide');
            searchInput.style.borderRadius = '5px 0 0 5px';
        } else if(card.element.classList.contains(`${searchInput.value.toLowerCase()}`)){
            card.element.classList.remove('hide');

            if(card.element.classList.contains('grocery-card')){
                for(let i = 0; i < iconImg.length; i++){
                    if(iconImg[i].classList.contains('grocery-icon') 
                    && iconImgShadow[i].classList.contains('grocery-icon')
                    && iconImg[i].classList.contains('hide')){
                        iconImg[i].classList.remove('hide')
                        iconImgShadow[i].classList.remove('hide')
                    }
           }}
        
           if(card.element.classList.contains('veg-card')){
            for(let i = 0; i < iconImg.length; i++){
                if(iconImg[i].classList.contains('veg-icon') 
                && iconImgShadow[i].classList.contains('veg-icon')
                && iconImg[i].classList.contains('hide')){
                    iconImg[i].classList.remove('hide')
                    iconImgShadow[i].classList.remove('hide')
                }
            }}
        
            if(card.element.classList.contains('meats-card')){
                for(let i = 0; i < iconImg.length; i++){
                    if(iconImg[i].classList.contains('meats-icon') 
                    && iconImgShadow[i].classList.contains('meats-icon')
                    && iconImg[i].classList.contains('hide')){
                        iconImg[i].classList.remove('hide')
                        iconImgShadow[i].classList.remove('hide')
                    }
           }}
                                           
           if(card.element.classList.contains('fish-card')){
            for(let i = 0; i < iconImg.length; i++){
                if(iconImg[i].classList.contains('fish-icon') 
                && iconImgShadow[i].classList.contains('fish-icon')
                && iconImg[i].classList.contains('hide')){
                    iconImg[i].classList.remove('hide')
                    iconImgShadow[i].classList.remove('hide')
                }
            }}                     
                      
            if(card.element.classList.contains('markets-card')){
                for(let i = 0; i < iconImg.length; i++){
                    if(iconImg[i].classList.contains('markets-icon') 
                    && iconImgShadow[i].classList.contains('markets-icon')
                    && iconImg[i].classList.contains('hide')){
                        iconImg[i].classList.remove('hide')
                        iconImgShadow[i].classList.remove('hide')
                    }
           }}}}
)
}  

function enterSearch (e){
    if(document.activeElement === searchInput && e.key === "Enter"){
        hidingAndUnhidingIconsForSearch()
}}

searchBtn.addEventListener('click', () => {
    hidingAndUnhidingIconsForSearch()
})

searchBtn.addEventListener('click', () => {
    hidingAndUnhidingIconsForSearch()
})

searchInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    card2Array.forEach(card => {
       const isVisible = 
       card.name.toLowerCase().includes(value);
       card.element.classList.toggle('hide', !isVisible)

})})

//Mobile Search/Checkbox Tings
const mobileSearchBtn = document.querySelector('#hidden-main-search');

function mobileHidingAndUnhidingIconsForSearch(){
    const iconImg = document.querySelectorAll('.leaflet-marker-icon');
    const iconImgShadow = document.querySelectorAll('.leaflet-marker-shadow');

    card2ArrayMobile.forEach(card => {

        if(hiddenSearchInput.value === ''){
            hiddenSearchDDContainer.classList.add('hide');
            hiddenSearchInput.style.borderRadius = '5px 0 0 5px';
        } else if(card.element.classList.contains(`${hiddenSearchInput.value.toLowerCase()}`)){
            card.element.classList.remove('hide');
            
            if(card.element.classList.contains('grocery-card')){
                for(let i = 0; i < iconImg.length; i++){
                    if(iconImg[i].classList.contains('grocery-icon') 
                    && iconImgShadow[i].classList.contains('grocery-icon')
                    && iconImg[i].classList.contains('hide')){
                        iconImg[i].classList.remove('hide')
                        iconImgShadow[i].classList.remove('hide')
                    }
           }}
        
           if(card.element.classList.contains('veg-card')){
            for(let i = 0; i < iconImg.length; i++){
                if(iconImg[i].classList.contains('veg-icon') 
                && iconImgShadow[i].classList.contains('veg-icon')
                && iconImg[i].classList.contains('hide')){
                    iconImg[i].classList.remove('hide')
                    iconImgShadow[i].classList.remove('hide')
                }
            }}
        
            if(card.element.classList.contains('meats-card')){
                for(let i = 0; i < iconImg.length; i++){
                    if(iconImg[i].classList.contains('meats-icon') 
                    && iconImgShadow[i].classList.contains('meats-icon')
                    && iconImg[i].classList.contains('hide')){
                        iconImg[i].classList.remove('hide')
                        iconImgShadow[i].classList.remove('hide')
                    }
           }}
                                           
           if(card.element.classList.contains('fish-card')){
            for(let i = 0; i < iconImg.length; i++){
                if(iconImg[i].classList.contains('fish-icon') 
                && iconImgShadow[i].classList.contains('fish-icon')
                && iconImg[i].classList.contains('hide')){
                    iconImg[i].classList.remove('hide')
                    iconImgShadow[i].classList.remove('hide')
                }
            }}                     
                      
            if(card.element.classList.contains('markets-card')){
                for(let i = 0; i < iconImg.length; i++){
                    if(iconImg[i].classList.contains('markets-icon') 
                    && iconImgShadow[i].classList.contains('markets-icon')
                    && iconImg[i].classList.contains('hide')){
                        iconImg[i].classList.remove('hide')
                        iconImgShadow[i].classList.remove('hide')
                    }
           }}}}
)}

function mobileEnterSearch (e){
    if(document.activeElement === hiddenSearchInput && e.key === "Enter"){
        mobileHidingAndUnhidingIconsForSearch()
}}

mobileSearchBtn.addEventListener('click', () => {  
    mobileHidingAndUnhidingIconsForSearch();
})

hiddenSearchInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    card2ArrayMobile.forEach(card => {
       const isVisible = 
       card.name.toLowerCase().includes(value);
       card.element.classList.toggle('hide', !isVisible)
})})

//SET LOCATION TO HAVE POPUP CENTRE SCREEN
function openPopup(e){
    const card = e.target;
    popupArray.forEach(popup => {
        if(card.classList.contains('card') && card.querySelector('strong').innerHTML === popup.name
           || card.parentElement.classList.contains('card') && card.parentElement.querySelector('strong').innerHTML === popup.name
           || card.parentElement.parentElement.classList.contains('card') && card.innerHTML === popup.name){ 
            popup.marker.openPopup();
            const markerLat = popup.marker._latlng.lat
            const markerLng = popup.marker._latlng.lng

            map.setView([markerLat + (0.029), markerLng - (0.049562514)], 12)
        }
    })
}

function mobileOpenPopup(e){
    const card = e.target;
    popupArrayMobile.forEach(popup => {
        if(card.classList.contains('mobile-card') && card.querySelector('strong').innerHTML === popup.name
           || card.parentElement.classList.contains('mobile-card') && card.parentElement.querySelector('strong').innerHTML === popup.name
           || card.parentElement.parentElement.classList.contains('mobile-card') && card.innerHTML === popup.name){ 
            hiddenSearchDDContainer.classList.add('hide')
            hiddenSearchInput.style.borderRadius = '5px 0 0 5px'

            if(!infoContainer.classList.contains('hide')){
                infoContainer.classList.add('hide')
            }

            popup.marker.openPopup();
            const markerLat = popup.marker._latlng.lat
            const markerLng = popup.marker._latlng.lng
            map.setView([markerLat + (0.049562514), markerLng - (0.003)], 12)
        }
    })
}

//Hiding Card(s) if Checkbox is Marked False
function hideCards(e){
    const target = e.target;
    card2Array.forEach(card => {
        if(target.classList.contains('grocery-checkbox') && target.checked === false
        && card.element.classList.contains('grocery-card')){
            card.element.classList.add('hide')
        } else if (target.classList.contains('grocery-checkbox') && target.checked === true
        && card.element.classList.contains('grocery-card') && card.element.classList.contains('hide')){           
            card.element.classList.remove('hide');
        }

        else if (target.classList.contains('veg-checkbox') && target.checked === false
        && card.element.classList.contains('veg-card')){
            card.element.classList.add('hide');
        } else if (target.classList.contains('veg-checkbox') && target.checked === true
        && card.element.classList.contains('veg-card') && card.element.classList.contains('hide')){
            card.element.classList.remove('hide');
        }

        else if(target.classList.contains('meats-checkbox') && target.checked === false
        && card.element.classList.contains('meats-card')){
            card.element.classList.add('hide')
        } else if (target.classList.contains('meats-checkbox') && target.checked === true
        && card.element.classList.contains('meats-card') && card.element.classList.contains('hide')){
            card.element.classList.remove('hide');
        }

        else if(target.classList.contains('fish-checkbox') && target.checked === false
        && card.element.classList.contains('fish-card')){
            card.element.classList.add('hide')
        } else if (target.classList.contains('fish-checkbox') && target.checked === true
        && card.element.classList.contains('fish-card') && card.element.classList.contains('hide')){
            card.element.classList.remove('hide');
        }

        else if(target.classList.contains('markets-checkbox') && target.checked === false
        && card.element.classList.contains('markets-card')){
            card.element.classList.add('hide')
        } else if (target.classList.contains('markets-checkbox') && target.checked === true
        && card.element.classList.contains('markets-card') && card.element.classList.contains('hide')){
            card.element.classList.remove('hide');
        }
})
}

//Mobile Hiding Card(s) if Checkbox is Marked False
function mobileHideCards(e){
    const target = e.target;
    card2ArrayMobile.forEach(card => {
        if(target.classList.contains('grocery-checkbox')&& target.checked === false
        && card.element.classList.contains('grocery-card')){
            card.element.classList.add('hide')
        } else if (target.classList.contains('grocery-checkbox') && target.checked === true
        && card.element.classList.contains('grocery-card') && card.element.classList.contains('hide')){           
            card.element.classList.remove('hide');
        }

        else if (target.classList.contains('veg-checkbox') && target.checked === false
        && card.element.classList.contains('veg-card')){
            card.element.classList.add('hide');
        } else if (target.classList.contains('veg-checkbox') && target.checked === true
        && card.element.classList.contains('veg-card') && card.element.classList.contains('hide')){
            card.element.classList.remove('hide');
        }

        else if(target.classList.contains('meats-checkbox') && target.checked === false
        && card.element.classList.contains('meats-card')){
            card.element.classList.add('hide')
        } else if (target.classList.contains('meats-checkbox') && target.checked === true
        && card.element.classList.contains('meats-card') && card.element.classList.contains('hide')){
            card.element.classList.remove('hide');
        }

        else if(target.classList.contains('fish-checkbox') && target.checked === false
        && card.element.classList.contains('fish-card')){
            card.element.classList.add('hide')
        } else if (target.classList.contains('fish-checkbox') && target.checked === true
        && card.element.classList.contains('fish-card') && card.element.classList.contains('hide')){
            card.element.classList.remove('hide');
        }

        else if(target.classList.contains('markets-checkbox') && target.checked === false
        && card.element.classList.contains('markets-card')){
            card.element.classList.add('hide')
        } else if (target.classList.contains('markets-checkbox') && target.checked === true
        && card.element.classList.contains('markets-card') && card.element.classList.contains('hide')){
            card.element.classList.remove('hide');
        }
})
}

const creatorPopup = document.querySelector('.about-creator-popup');
const privacyPopup = document.querySelector('.privacy-policy-popup');
const blurredBackground = document.querySelector('.blur-background');
const creatorPopupNodes = document.querySelector('.about-creator-popup').childNodes;

function showAboutCreator(e){
    if(e.target.classList.contains('about-creator-btn') && creatorPopup.classList.contains('invisible')){
        blurredBackground.classList.toggle('blur')
        creatorPopup.classList.toggle('invisible')
        creatorPopup.classList.toggle('visible')
    } else if(!e.target.classList.contains('about-creator-btn') && e.target !== creatorPopup && creatorPopup.classList.contains('visible')){
        blurredBackground.classList.toggle('blur')
        creatorPopup.classList.toggle('invisible')
        creatorPopup.classList.toggle('visible')
    }
}

function showPrivPolicy(e){
    if(e.target.classList.contains('privacy-policy-btn') && privacyPopup.classList.contains('invisible')){
        blurredBackground.classList.toggle('blur')
        privacyPopup.classList.toggle('invisible')
        privacyPopup.classList.toggle('visible')
    } else if(!e.target.classList.contains('privacy-policy-btn') && e.target !== privacyPopup && privacyPopup.classList.contains('visible')){
        blurredBackground.classList.toggle('blur')
        privacyPopup.classList.toggle('invisible')
        privacyPopup.classList.toggle('visible')
    }
}

const mapBox = document.getElementById('map');
console.log(mapBox)

function mobileHideMapBoxOverlay(e){
    console.log(e.target)
    if(e.target ==  mapBox && !infoContainer.classList.contains('hide') 
    || e.target.classList.contains('leaflet-marker-icon') && !infoContainer.classList.contains('hide')){
        infoContainer.classList.toggle('hide')
    }
}


//Event Listeners
document.addEventListener('click', hideInfo);
document.addEventListener('click', hideFieldsetInputs);
document.addEventListener('click', showFieldsetInputs);
document.addEventListener('click', groceryCheckBoxes);
document.addEventListener('click', vegCheckBoxes);
document.addEventListener('click', meatsCheckBoxes);
document.addEventListener('click', fishCheckBoxes);
document.addEventListener('click', marketsCheckBoxes);
document.addEventListener('click', hideSiteLegend);
document.addEventListener('click', showSiteLegend);
document.addEventListener('click', openPopup);
document.addEventListener('click', mobileOpenPopup);
document.addEventListener('click', hideCards);
document.addEventListener('click', showAboutCreator);
document.addEventListener('click', showPrivPolicy);
document.addEventListener('click', mobileHideCards);
document.addEventListener('click', mobileHideMapBoxOverlay)
document.addEventListener('keypress', enterSearch);
document.addEventListener('keypress', mobileEnterSearch);
document.addEventListener('DOMContentLoaded', settingBS);

