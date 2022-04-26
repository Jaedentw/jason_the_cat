const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    let description = '';
    if (body === '[]') {
      error = `${breedName} is not a valid breed`;
      description = null;
      callback(error, description);
    } else {
      const parsedBody = JSON.parse(body);
      description = parsedBody[0]['description'];
      callback(error, description);
    }
  });
};

module.exports = { fetchBreedDescription };

/*
request.get(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(err, response, body) {
  if (err !== null) {
    console.log(`${err}:${response}`);
    return;
  }
  if (body === '[]') {
    console.log(`Error: ${breed} is not a valid breed`);
    return;
  }
  const parsedBody = JSON.parse(body);
  const description = parsedBody[0]['description'];
  console.log(description);
});
*/