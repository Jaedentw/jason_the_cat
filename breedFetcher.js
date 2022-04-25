const request = require('request');
const myArgs = process.argv.slice(2);
const breed = myArgs[0];


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