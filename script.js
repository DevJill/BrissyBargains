
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
    const youPopup = youMarker.bindPopup(`<strong>Your Location :)</strong>`);
    youPopup.addTo(map);


    function youCheckBoxes(e){
        if(e.target === youCheckbox && youCheckbox.checked == true){
            youMarker.addTo(map);
        } else if (e.target === youCheckbox && youCheckbox.checked == false){
            youMarker.remove()
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
    if(e.target === hideBtn || e.target === hideBtnImg){
        infoContainer.style.display = 'none';
    } else if (e.target === showBtn || e.target === showBtnImg) {
        infoContainer.style.display = 'block';
    }
}




//Fieldset Submitted
const fieldset = document.querySelector('.help-fieldset');

function hideFieldsetInputs(e){
        if(e.target.classList.contains('fieldset-submit-suggestion') || e.target.classList.contains('hidden-fieldset-submit-suggestion')){

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
    if(e.target.classList.contains('fieldset-submit-more-suggestion') || e.target.classList.contains('hidden-fieldset-submit-more-suggestion')){
        const fieldsetDiv = fieldset.querySelector('div');
        if(fieldsetDiv.classList.contains('fieldset-ty-div')){
            fieldsetDiv.remove();
        }

        const createFieldsetInputs = document.createElement('div');
        createFieldsetInputs.classList.add('fieldset-inputs')

        const shopLabel = document.createElement('label');
        shopLabel.htmlFor = "shop-name";
        shopLabel.classList.add('fieldset-input-title');
        shopLabel.appendChild(document.createTextNode('Shop Name:'));
        createFieldsetInputs.appendChild(shopLabel);

        const shopLabelInput = document.createElement('input');
        shopLabelInput.type = 'text';
        shopLabelInput.name = "shop-name";
        shopLabelInput.classList.add('fieldset-input');
        createFieldsetInputs.appendChild(shopLabelInput)

        const shopSuburbLabel = document.createElement('label');
        shopSuburbLabel.htmlFor = "shop-suburb-name";
        shopSuburbLabel.classList.add('fieldset-input-title');
        shopSuburbLabel.appendChild(document.createTextNode('Shop Suburb:'));
        createFieldsetInputs.appendChild(shopSuburbLabel);

        const shopSuburbInput = document.createElement('input');
        shopSuburbInput.type = 'text';
        shopSuburbInput.name = "shop-suburb-name";
        shopSuburbInput.classList.add('fieldset-input');
        createFieldsetInputs.appendChild(shopSuburbInput);

        const fieldsetSubmit = document.createElement('input');
        fieldsetSubmit.type = 'submit';
        fieldsetSubmit.value = "Send Suggestion";
        fieldsetSubmit.classList.add('fieldset-submit-suggestion');
        createFieldsetInputs.appendChild(fieldsetSubmit);

        const hiddenFieldsetSubmit = document.createElement('input');
        hiddenFieldsetSubmit.type = 'submit';
        hiddenFieldsetSubmit.value = "Send Suggestion";
        hiddenFieldsetSubmit.classList.add('hidden-fieldset-submit-suggestion');

        const fieldsetNvmBtn = document.createElement('button');
        fieldsetNvmBtn.classList.add('nevermind-btn');
        fieldsetNvmBtn.appendChild(document.createTextNode('Nvm'))

        const fieldsetBtnGrid = document.createElement('div');
        fieldsetBtnGrid.classList.add('hidden-want-to-help-buttons');
        fieldsetBtnGrid.appendChild(hiddenFieldsetSubmit);
        fieldsetBtnGrid.appendChild(fieldsetNvmBtn);
        createFieldsetInputs.appendChild(fieldsetBtnGrid);

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
                 iconImg[i].style.display = 'none';
                 iconImgShadow[i].style.display = 'none';
            }}} 
            else if (e.target.classList.contains ('grocery-checkbox') && e.target.checked === true){
            for(i = 0; i < iconImg.length; i++){
                if(iconImg[i].classList.contains('grocery-icon') && iconImgShadow[i].classList.contains('grocery-icon')){
                    iconImg[i].style.display = 'block';
                    iconImgShadow[i].style.display = 'block';
            }}
}};

function vegCheckBoxes(e){

    const iconImg = document.querySelectorAll('.leaflet-marker-icon');
    const iconImgShadow = document.querySelectorAll('.leaflet-marker-shadow');
    
    if(e.target.classList.contains('veg-checkbox') && e.target.checked === false){
        for(i = 0; i < iconImg.length; i++){
            if(iconImg[i].classList.contains('veg-icon') && iconImgShadow[i].classList.contains('veg-icon')){
                 iconImg[i].style.display = 'none';
                 iconImgShadow[i].style.display = 'none';
            }}} 
            else if (e.target.classList.contains ('veg-checkbox') && e.target.checked === true){
            for(i = 0; i < iconImg.length; i++){
                if(iconImg[i].classList.contains('veg-icon') && iconImgShadow[i].classList.contains('veg-icon')){
                    iconImg[i].style.display = 'block';
                    iconImgShadow[i].style.display = 'block';
            }}
}};

function meatsCheckBoxes(e){

    const iconImg = document.querySelectorAll('.leaflet-marker-icon');
    const iconImgShadow = document.querySelectorAll('.leaflet-marker-shadow');
    
    if(e.target.classList.contains('meats-checkbox') && e.target.checked === false){
        for(i = 0; i < iconImg.length; i++){
            if(iconImg[i].classList.contains('meats-icon') && iconImgShadow[i].classList.contains('meats-icon')){
                 iconImg[i].style.display = 'none';
                 iconImgShadow[i].style.display = 'none';
            }}} 
            else if (e.target.classList.contains ('meats-checkbox') && e.target.checked === true){
            for(i = 0; i < iconImg.length; i++){
                if(iconImg[i].classList.contains('meats-icon') && iconImgShadow[i].classList.contains('meats-icon')){
                    iconImg[i].style.display = 'block';
                    iconImgShadow[i].style.display = 'block';
            }}
}};

function fishCheckBoxes(e){

    const iconImg = document.querySelectorAll('.leaflet-marker-icon');
    const iconImgShadow = document.querySelectorAll('.leaflet-marker-shadow');
    
    if(e.target.classList.contains('fish-checkbox') && e.target.checked === false){
        for(i = 0; i < iconImg.length; i++){
            if(iconImg[i].classList.contains('fish-icon') && iconImgShadow[i].classList.contains('fish-icon')){
                 iconImg[i].style.display = 'none';
                 iconImgShadow[i].style.display = 'none';
            }}} 
            else if (e.target.classList.contains ('fish-checkbox') && e.target.checked === true){
            for(i = 0; i < iconImg.length; i++){
                if(iconImg[i].classList.contains('fish-icon') && iconImgShadow[i].classList.contains('fish-icon')){
                    iconImg[i].style.display = 'block';
                    iconImgShadow[i].style.display = 'block';
            }}
}};

function marketsCheckBoxes(e){

    const iconImg = document.querySelectorAll('.leaflet-marker-icon');
    const iconImgShadow = document.querySelectorAll('.leaflet-marker-shadow');
    
    if(e.target.classList.contains('markets-checkbox') && e.target.checked === false){
        for(i = 0; i < iconImg.length; i++){
            if(iconImg[i].classList.contains('markets-icon') && iconImgShadow[i].classList.contains('markets-icon')){
                 iconImg[i].style.display = 'none';
                 iconImgShadow[i].style.display = 'none';
            }}} 
            else if (e.target.classList.contains ('markets-checkbox') && e.target.checked === true){
            for(i = 0; i < iconImg.length; i++){
                if(iconImg[i].classList.contains('markets-icon') && iconImgShadow[i].classList.contains('markets-icon')){
                    iconImg[i].style.display = 'block';
                    iconImgShadow[i].style.display = 'block';
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
        const iconPopup = document.querySelectorAll('.leaflet-popup-content');
    
    for(i = 0; i < iconImg.length; i++){
         if(iconImg[i].src.indexOf('grocery') != -1){
             iconImg[i].classList.add('grocery-icon');
         } else if(iconImg[i].src.indexOf('veg') != -1){
            iconImg[i].classList.add('veg-icon');
         } else if(iconImg[i].src.indexOf('meat') != -1){
             iconImg[i].classList.add('meats-icon');
         } else if(iconImg[i].src.indexOf('fish') != -1){
             iconImg[i].classList.add('fish-icon');
         } else if(iconImg[i].src.indexOf('markets') != -1){
             iconImg[i].classList.add('markets-icon');
         }}
    
    for(i = 0; i < iconImgShadow.length; i++){
         if(iconImgShadow[i].src.indexOf('grocery') != -1){
             iconImgShadow[i].classList.add('grocery-icon');
         } else if(iconImgShadow[i].src.indexOf('veg') != -1){
             iconImgShadow[i].classList.add('veg-icon');
         } else if(iconImgShadow[i].src.indexOf('meat') != -1){
             iconImgShadow[i].classList.add('meats-icon');
         } else if(iconImgShadow[i].src.indexOf('fish') != -1){
             iconImgShadow[i].classList.add('fish-icon');
         } else if(iconImgShadow[i].src.indexOf('markets') != -1){
             iconImgShadow[i].classList.add('markets-icon');
         }
    }

}



    //Trying to Make Search Bar Functional...... Kind of Getting Silly ehehe

    document.addEventListener('click', searchFocus);
    document.addEventListener('click', searchUnfocus);

    const searchInput = document.getElementById('site-search');
    const searchDDContainer = document.querySelector('.search-drop-down-overlay');

    function searchFocus(e){
        if(e.target === searchInput){
            searchInput.style.borderRadius = '5px 0 0 0'
            searchDDContainer.classList.remove('hide')
        }
    }

    function searchUnfocus(e){
        if(e.target !== searchInput && !e.target.classList.contains('card') 
        && !e.target.classList.contains('search-drop-down-overlay') 
        && !e.target.classList.contains('card-p') && !searchDDContainer.classList.contains('hide')){
            searchInput.style.borderRadius = '5px 0 0 5px'
            searchDDContainer.classList.add('hide');
            console.log(e.target)
        }
    }













    



    let storeArray = [];
    let card2Array = [];


    


    fetch('./shops.json')
    .then((response) => {
    return response.json();
    })
    .then((data) => {

    let storePopup;
    
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
            storePopup = groceryPopup;
            storePopup.store = `${data[i].name}`;
            storeArray.push(groceryPopup);
            groceryMarker.bindPopup(groceryPopup);
            groceryMarker.addTo(map);
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
            storePopup = vegPopup;
            storePopup.store = `${data[i].name}`;
            storeArray.push(vegPopup);
            vegMarker.bindPopup(vegPopup);
            vegMarker.addTo(map);
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
            storePopup = meatsPopup;
            storePopup.store = `${data[i].name}`;
            storeArray.push(meatsPopup);
            meatsMarker.bindPopup(meatsPopup);
            meatsMarker.addTo(map);
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
            storePopup = fishPopup;
            storePopup.store = `${data[i].name}`;
            storeArray.push(fishPopup);
            fishMarker.bindPopup(fishPopup);
            fishMarker.addTo(map);
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
            storePopup = marketsPopup;
            storePopup.store = `${data[i].name}`;
            storeArray.push(marketsPopup);
            marketsMarker.bindPopup(marketsPopup);
            marketsMarker.addTo(map);
        }

        settingBS();

    };



    for(j = 0; j < data.length; j++){

        // console.log(data[j])
        const div = document.createElement('div');
        div.classList.add('card');
        div.classList.add('card-p');

        if(data[j].type === 'Grocery'){
            div.classList.add('grocery-card')
        } else if(data[j].type === 'Produce'){
            div.classList.add('veg-card')
        } else if(data[j].type === 'Meats'){
            div.classList.add('meats-card')
        } else if(data[j].type === 'Fish'){
            div.classList.add('fish-card')
        } else if(data[j].type === 'Markets'){
            div.classList.add('markets-card')
        }

        const paragraph = document.createElement('p');
        paragraph.classList.add('card-p');



        const strongP = document.createElement('strong');
        strongP.classList.add('card-p');
        strongP
        .appendChild(document.createTextNode(data[j].name));

        paragraph
        .appendChild(strongP);

        const paragraph2 = document.createElement('p')
        paragraph2.classList.add('card-p');
        paragraph2.appendChild(document.createTextNode(data[j].address));

        div.appendChild(paragraph);
        div.appendChild(paragraph2);

        searchDDContainer.appendChild(div);

        card2Array.push({name: data[j].name, element : div});


    }

})

console.log(card2Array);
searchInput.addEventListener('input', e => {
     const value = e.target.value;
     card2Array.forEach(card => {
        if(card.name.includes(value)){
            console.log(card)
         }

})})

    // const cardDiv = document.querySelectorAll('.card');

// });





    //     searchDDContainer
    //     .appendChild(document.createElement('div').classList.add('card').classList.add('card-p')
    //     .appendChild(document.createElement('p').classList.add('card-p')
    //     .appendChild(document.createElement('strong').classList.add('card-p')
    //     .appendChild(document.createTextNode(data[i].name)))));
    // }




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
document.addEventListener('DOMContentLoaded', settingBS);

