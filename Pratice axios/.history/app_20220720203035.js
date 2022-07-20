const link = 'https://raw.githubusercontent.com/hienvd/vietnam-cities-list/master/cities.json';

const cities = [];

axios.get(link)
    .then(res =>{
        const array = cities.push(...res.data);
        console.log(array);
    })
;


