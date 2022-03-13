const fetchCountries = async () => {
    try {
        const res = await fetch('https://restcountries.com/v2/all');
        const countries = await res.json();
        createCountryInfo(countries);
    } catch(error) {
        console.log(error);
    }
}

const createCountryInfo = (countries) => {
    const wrapper = document.querySelector('.wrapper');
    const countryContainer = document.querySelector('.country-detail');
    const filterContainer = document.querySelector('.filter-container');
    const backButton = document.querySelector('.back-button');
    for(let item of countries) {
        const infoContainer = document.createElement('div');
        const flag = document.createElement('img');
        const info = document.createElement('div');
        const countryName = document.createElement('h2');
        const population = document.createElement('p');
        const region = document.createElement('p');
        const capital = document.createElement('p');
        infoContainer.className = "info-container";
        info.className = "info";
        flag.className = "flag";
        population.className = "info-name";
        region.className = "info-name";
        capital.className = "info-name";
        countryName.className = "country-name";
        flag.src = item.flag;
        countryName.innerText = item.name;
        population.innerHTML = "<span>Population: " + "</span>" + item.population;
        region.innerHTML = "<span>Region: " + "</span>" + item.region;
        capital.innerHTML = "<span>Capital: " + "</span>" + item.capital;
        wrapper.append(infoContainer);
        info.append(countryName);
        info.append(population);
        info.append(region);
        info.append(capital);
        infoContainer.append(flag);
        infoContainer.append(info);
        infoContainer.addEventListener("click", function() {
            countryDetails(item);
            console.log(item);
            wrapper.style.display = "none";
            filterContainer.style.display = "none";
            countryContainer.style.display = "flex";
            backButton.style.display = "block";
        })
    }
    backButton.addEventListener("click", function() {
        wrapper.style.display = "grid";
        filterContainer.style.display = "flex";
        countryContainer.style.display = "none";
        backButton.style.display = "none";
    })
}

const countryDetails = (item) => {
    const countryDetail = document.querySelector('.country-detail');
    const flag = document.createElement('img');
    const info = document.createElement('div');
    const countryName = document.createElement('h2');
    const nativeName = document.createElement('p');
    const population = document.createElement('p');
    const region = document.createElement('p');
    const capital = document.createElement('p');
    const subRegion = document.createElement('p');
    info.className = "detail-container-info";
    flag.className = "detail-flag";
    flag.src = item.flag;
    countryName.innerText = item.name;
    nativeName.innerHTML = "<span>Native Name: " + "</span>" + item.nativeName;
    population.innerHTML = "<span>Population: " + "</span>" + item.population;
    region.innerHTML = "<span>Region: " + "</span>" + item.region;
    subRegion.innerHTML = "<span>Sub Region: " + "</span>" + item.subregion;
    capital.innerHTML = "<span>Capital: " + "</span>" + item.capital;
    info.append(countryName);
    info.append(nativeName);
    info.append(population);
    info.append(region);
    info.append(subRegion);
    info.append(capital);
    countryDetail.append(flag);
    countryDetail.append(info);
}


async function searchCountry() {
    const searchInput = document.querySelector('#searchInput');
    const searchTerm = searchInput.elements.query.value;
    const res = await axios.get('https://restcountries.com/v2/all/' + {searchTerm});
}

window.addEventListener('load', (event) => {
    fetchCountries();
});
