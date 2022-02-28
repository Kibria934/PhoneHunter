const loadData = () => {
    const value = document.getElementById('search-field').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${value}`
    fetch(url)
        .then(res => res.json())
        .then(data => showPhone(data.data));
}
const showPhone = name => {
    name.forEach(brand => {
        console.log(brand);
        //    if (brand == null) {
        //        console.log('Sorry we can nont fide any phone in this name');
        //    } else {
        //        console.log(brand);
        //    }
    });
}