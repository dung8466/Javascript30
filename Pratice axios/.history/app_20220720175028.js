const link = 'https://raw.githubusercontent.com/hienvd/vietnam-cities-list/master/cities.json';


axios.get(link)
    .then(res =>{
        console.log(res);
    })
;


