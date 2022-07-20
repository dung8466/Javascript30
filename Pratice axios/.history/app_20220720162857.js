const axiosLink = 'https://github.com/hienvd/vietnam-cities-list/blob/master/cities.json';
axios.get(axiosLink)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });