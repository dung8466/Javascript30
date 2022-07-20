const axiosLink = 'https://github.com/hienvd/vietnam-cities-list/blob/master/cities.json';
const axios = require('https://github.com/hienvd/vietnam-cities-list/blob/master/cities.json)
axios(axiosLink)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });