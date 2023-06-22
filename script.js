
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
currPos = (pos) => {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;

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

//Fieldset Submitted

const mainFieldsetDiv = document.querySelector('.want-to-help')
const fieldset = document.querySelector('.help-fieldset');

function hideFieldsetInputs(e){
    
        if(e.target.classList.contains('fieldset-submit-input')){

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
        suggestMoreBtn.classList.add('fieldset-submit-suggestion');
        suggestMoreBtn.appendChild(document.createTextNode('Suggest More'));
    
        fieldsetBtnDiv.appendChild(suggestMoreBtn);
        fieldsetNewDiv.appendChild(fieldsetBtnDiv);
        fieldset.appendChild(fieldsetNewDiv);

    }
}

function showFieldsetInputs(e){  

    if(e.target.classList.contains('fieldset-submit-suggestion')){

        const fieldsetDiv = fieldset.querySelector('div');
        if(fieldsetDiv.classList.contains('fieldset-ty-div')){
            fieldsetDiv.remove();
        }

        const createFieldsetInputs = document.createElement('div');
        createFieldsetInputs.classList.add('fieldset-inputs')

        const shopLabel = document.createElement('label');
        // shopLabel.for = "shop-name";
        shopLabel.classList.add('fieldset-input-title');
        shopLabel.appendChild(document.createTextNode('Shop name:'));
        createFieldsetInputs.appendChild(shopLabel);

        const shopLabelInput = document.createElement('input');
        shopLabelInput.type = 'text';
        shopLabelInput.name = "shop-name";
        shopLabelInput.classList.add('fieldset-input');
        createFieldsetInputs.appendChild(shopLabelInput)

        const shopSuburbLabel = document.createElement('label');
        // shopSuburbLabel.for = "shop-suburb-name";
        shopSuburbLabel.classList.add('fieldset-input-title');
        shopSuburbLabel.appendChild(document.createTextNode('Shop Suburb:'));
        createFieldsetInputs.appendChild(shopSuburbLabel);

        const shopSuburbInput = document.createElement('input');
        shopSuburbInput.type = 'text';
        shopSuburbInput.name = "shop-suburb-name";
        shopSuburbInput.classList.add('fieldset-input');
        createFieldsetInputs.appendChild(shopSuburbInput)

        const fieldsetSubmit = document.createElement('input');
        fieldsetSubmit.type = 'submit';
        fieldsetSubmit.value = "Submit";
        fieldsetSubmit.classList.add('fieldset-submit-input');
        createFieldsetInputs.appendChild(fieldsetSubmit);

        fieldset.appendChild(createFieldsetInputs);
        
    }
}


// function hideFieldsetInputs(e){
//     if(e.target === submitBtn){
//         fieldsetInputs.innerHTML = 
//        `<p>Thank you!</p>
//         <p>Got anymore suggestions?</p>
//         <div class="suggest-more-btn"><input type="submit" value="Suggest More" class="fieldset-submit-input fieldset-submit-input-suggest-more"><div>`;
//     }
// }

// function showFieldsetInputs(e){
//     if(e.target.classList.contains('fieldset-submit-input-suggest-more')){
//         fieldsetInputs.innerHTML = '';
//         fieldsetInputs.innerHTML = 
//        `<label for="shop-name" class="fieldset-input-title">Shop name:</label>
//         <input type="text" name="shop-name" class="fieldset-input">
//         <label for="shop-suburb-name" class="fieldset-input-title">Shop Suburb:</label>
//         <input type="text" name="shop-suburb-name" class="fieldset-input">
//         <input type="submit" value="Submit" class="fieldset-submit-input">`;
//     }


// }


 




function checkUI(){
    if(infoContainer.classList.contains('hide-info')){
        siteContainer.classList.add('site-container-hide-info');
    }


};


document.addEventListener('click', hideInfo);
document.addEventListener('click', maxInfo);
document.addEventListener('click', hideFieldsetInputs);
document.addEventListener('click', showFieldsetInputs);






































