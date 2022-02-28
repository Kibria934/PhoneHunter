const error = (errorInput) => {
    const errorMsg = document.getElementById('error-masg');
    errorMsg.style.display = errorInput;
}

const loadData = () => {
    const container = document.getElementById('second-container');
    container.innerHTML = ``
    const value = document.getElementById('search-field').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${value}`
    fetch(url)
        .then(res => res.json())
        .then(data => showPhone(data.data));
}
const showPhone = names => {
    const value = document.getElementById('search-field').value;
    const container = document.getElementById('second-container');
    console.log(names);

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
                        <img height="400" src="${brand.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Name: ${brand.phone_name}</h5>
                            <h5 class="card-title">Phne Brand: ${brand.brand}</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <button class="btn btn-outline-secondary border rounded-3" id="detailsBtn">Explore</button>
                        </div>
                    </div>
                </div>
           `;
            container.appendChild(div)
        });
    }

    document.getElementById('search-field').value = ``

}