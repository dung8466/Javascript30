const link = 'https://raw.githubusercontent.com/hienvd/vietnam-cities-list/master/cities.json';

const cities = [];

axios.get(link)
    .then(res => cities.push(...res.data))
;


