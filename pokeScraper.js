var fetch = require('node-fetch');
var RateLimiter = require('limiter').RateLimiter;
var fs = require('fs');
var limiter = new RateLimiter(1, 500);

const getPokemonById = (id) => {
  return new Promise((resolve, reject) => {
    limiter.removeTokens(1, () => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((response) => {
          response.json().then((data) => {
            resolve(formatResponse(data));
          })
        })
        .catch((e) => {
          reject(e)
        })
    })
  })
};

let promiseArray = [];
for(var i = 1; i <= 151; i++) {
  promiseArray.push(getPokemonById(i));
}

Promise.all(promiseArray).then(value => {
  let formattedValue = JSON.stringify(value, null, 2);
  fs.writeFile('data.json', formattedValue, (err) => {
    if (err) throw err;
    console.log('Complete');
  });
}, reason => {
  console.log(reason);
});

const formatResponse = (data) => {
  let newObj = {
    [data.name] : {
      id: data.id,
      height: data.height,
      weight: data.weight,
      sprites: data.sprites,
      stats: data.stats,
      base_experience: data.base_experience,
      types: data.types,
    },
  }

  return newObj;
}
