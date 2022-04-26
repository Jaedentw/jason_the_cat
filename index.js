const { fetchBreedDescription } = require('./breedFetcher');
const myArgs = process.argv.slice(2);
const breedName = myArgs[0];

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(description);
  }
});