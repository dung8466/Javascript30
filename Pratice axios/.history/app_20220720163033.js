const axiosLink = 'https://github.com/hienvd/vietnam-cities-list/blob/master/cities.json';
axios.get(axiosLink,{
    Headers: {Accept: 'application/json', Location      : 'https://github.com/hienvd/vietnam-cities-list/blob/master/cities.json', 
})
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });