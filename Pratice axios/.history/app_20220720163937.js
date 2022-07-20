const link = 'https://github.com/hienvd/vietnam-cities-list/blob/master/cities.json';

fetch(link,{
    headers: {Accept: 'https://github.com/hienvd/vietnam-cities-list/blob/master/cities.json'}
})
.then(blob => console.log(blob));