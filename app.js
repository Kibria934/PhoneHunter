const error = (errorInput) => {
    const errorMsg = document.getElementById('error-masg');
    errorMsg.style.display = errorInput;
}

const loadData = () => {
    const container = document.getElementById('second-container');
    container.innerHTML = ``;
    const detailsContainer = document.getElementById('details-display');
    detailsContainer.innerHTML = ``
    const value = document.getElementById('search-field').value.toLowerCase();
    if (value == 'oppo' || value == 'apple' || value == 'iphone' || value == 'samsung' || value == 'huawei') {
        const url = `https://openapi.programming-hero.com/api/phones?search=${value}`
        fetch(url)
            .then(res => res.json())
            .then(data => showPhone(data));

    } else {
        error('block')
    }
}

const showPhone = name => {
    const names = name.data.slice(1, 21)
    const value = document.getElementById('search-field').value;
    const container = document.getElementById('second-container');

    if (value == '') {
        error('block')
    }
    if (isNaN(value)) {
        error('none')
        names.forEach(brand => {
            const div = document.createElement('div');
            div.innerHTML = `
                <div class="col">
                    <div class="card h-100">
                        <img height="500" src="${brand.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Name: ${brand.phone_name}</h5>
                            <h5 class="card-title">Phne Brand: ${brand.brand}</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                           <button onclick="details('${brand.slug}')" id = "search-button"> explore</button>
                        </div>
                    </div>
                </div>
           `;
            container.appendChild(div)
        });
    }
    document.getElementById('search-field').value = ``

}


// === === === === Explore button handler === === === === === === ===//
const details = (id) => {
    const detailsContainer = document.getElementById('details-display');
    detailsContainer.innerHTML = ``
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    fetch(url)
        .then(res => res.json())
        .then(id => displayDetails(id.data))

}


const displayDetails = (input) => {
    // ===================== If Release date not found than this code will work=============//
    const { releaseDate, others } = input;
    const sensorList = input.mainFeatures.sensors;

    // ======================sensors=================
    if ((releaseDate != '' || others != undefined) && (releaseDate === '')) {
        const detailsContainer = document.getElementById('details-display');
        const div = document.createElement('div');
        div.innerHTML = `
    <div class = " py-3 text-center">
        <img width="300" height="400" src="${input.image}" alt="">
        <h2>Name: <span class="text-success fw-semibold py-3">${input.name}</span> </h2>
        <h3><span class="text-danger fw-semibold py-3">NO realease date found</span> </h3>
        <h3>Brand Name: <span class="text-black fw-semibold py-3">${input.brand}</span> </h3>
        </div>        
        <h3 id="mainFeature">Main Feature:  <p class="text-black fs-4 fw-semibold" id="chipset">Chipset: ${input.mainFeatures.chipSet}</p>
         <p class="text-black fs-4 fw-semibold">Display size: <span class="fs-5">${input.mainFeatures.displaySize}</span></p>
         <p class="text-black fs-4 fw-semibold">Memory: <span class="fs-5">${input.mainFeatures.memory}</span></p>
         <p class="text-black fs-4 fw-semibold">Storage: <span class="fs-5">${input.mainFeatures.storage}</span></p>
         </h3>
         <h3>Other: <p class="text-black fs-4 fw-semibold">Bluetooth: <span class="fs-5">${input.others.Bluetooth}</span></p>
          <p class="text-black fs-4 fw-semibold">WLAN: <span class="fs-5">${input.others.WLAN}</span></p>
        <p class="text-black fs-4 fw-semibold">GPS: <span class="fs-5">${input.others.GPS}</span></p>
        <p class="text-black fs-4 fw-semibold">NFC: <span class="fs-5">${input.others.NFC}</span></p>
        <p class="text-black fs-4 fw-semibold">Radio: <span class="fs-5">${input.others.Radio}</span></p>
        <p class="text-black fs-4 fw-semibold">USB: <span class="fs-5">${input.others.USB}</span></p>
          </h3>
             <h3><p class="text-primary fs-4 fw-semibold">sensor: <span class="fs-5 text-black">${input.mainFeatures.sensors}</span></p></h3>
                `;
        detailsContainer.appendChild(div)

    }
    // ===================== If Release date  found than this code will work=============//

    if (releaseDate != '') {
        const detailsContainer = document.getElementById('details-display');
        const div = document.createElement('div');
        div.innerHTML = `
    <div class = " py-3 text-center">
        <img width="300" height="400" src="${input.image}" alt="">
        <h2>Name: <span class="text-success fw-semibold py-3">${input.name}</span> </h2>
        <h3> Release Date: <span class="text-success fw-semibold py-3">${input.releaseDate}</span> </h3>
        <h3>Brand Name: <span class="text-black fw-semibold py-3">${input.brand}</span> </h3>
        </div>        
        <h3 id="mainFeature">Main Feature:  <p class="text-black fs-4 fw-semibold" id="chipset">Chipset: ${input.mainFeatures.chipSet}</p>
         <p class="text-black fs-4 fw-semibold">Display size: <span class="fs-5">${input.mainFeatures.displaySize}</span></p>
         <p class="text-black fs-4 fw-semibold">Memory: <span class="fs-5">${input.mainFeatures.memory}</span></p>
         <p class="text-black fs-4 fw-semibold">Storage: <span class="fs-5">${input.mainFeatures.storage}</span></p>
         </h3>
         <h3>Other: <p class="text-black fs-4 fw-semibold">Butothe: <span class="fs-5">${input.others.Bluetooth}</span></p>
        <p class="text-black fs-4 fw-semibold">WLAN: <span class="fs-5">${input.others.WLAN}</span></p>
        <p class="text-black fs-4 fw-semibold">GPS: <span class="fs-5">${input.others.GPS}</span></p>
        <p class="text-black fs-4 fw-semibold">NFC: <span class="fs-5">${input.others.NFC}</span></p>
        <p class="text-black fs-4 fw-semibold">Radio: <span class="fs-5">${input.others.Radio}</span></p>
        <p class="text-black fs-4 fw-semibold">USB: <span class="fs-5">${input.others.USB}</span></p>  </h3>
        <h3><p class="text-primary fs-4 fw-semibold">sensor: <span class="fs-5 text-black">${input.mainFeatures.sensors}</span></p></h3>
   `;
        detailsContainer.appendChild(div);

    }
}