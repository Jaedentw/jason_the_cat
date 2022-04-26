const { fetchBreedDescription } = require('./breedFetcher');
const myArgs = process.argv.slice(2);
const breedName = myArgs[0];

fetchBreedDescription(breedName, (err, desc) => {
  if (err) {
    console.log('Error fetch details:', err);
  } else {
    console.log(desc);
  }
});