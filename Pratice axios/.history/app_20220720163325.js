const axiosLink = 'https://github.com/hienvd/vietnam-cities-list/blob/master/cities.json';


axios({
    method: 'get',
    url: `${axiosLink}`,
    responseType: 'json',
})
    .then(response => {
        console.log(response);
        })
    .catch(err => {
        console.log(err);
    });