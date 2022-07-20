const link = 'https://raw.githubusercontent.com/hienvd/vietnam-cities-list/master/cities.json';

const cities = [];

axios.get(link)
    .then(res => cities.push(...res.data))
    .catch(err => console.log(err.data));

function findMatch(word , cities){
    return cities.find( match =>{
        const regex = new RegExp(word, 'gi');
        return match.city.match(regex) || match.province.match(regex);
    });
}

const searchResults = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

