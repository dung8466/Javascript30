const link = 'https://raw.githubusercontent.com/hienvd/vietnam-cities-list/master/cities.json';

const cities = [];

axios.get(link)
    .then(res => cities.push(...res.data))
    .catch(err => console.log(err.data));

function findMatch(word , cities){
    return cities.filter( match =>{
        const regex = new RegExp(word, 'gi');
        return match.city.match(regex) || match.province.match(regex);
    });
}

function displayMatch(){
    const city = findMatch(this.value, cities);
    const valueReturn = city.map(value =>{
        const regex = new RegExp(value, 'gi');
        const cityName = value.city.replace(regex, (match) => `<span class="hl">${match}</span>`);
        const provinceName = value.province.replace(regex, (match) => `<span class="hl">${match}</span>`);
        return `
            <li>
                <span class='name'>${cityName}, ${provinceName}</span>
                <span class='population'>${(value.population).toLocaleString()}</span>                
            </li>
        `;
    }).join('');
    suggestions.innerHTML = valueReturn;
}

const searchResults = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchResults.addEventListener('change', displayMatch);
searchResults.addEventListener('keyup', displayMatch);