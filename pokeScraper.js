var fetch = require('~/.nvm/versions/node/v7.10.0/lib/node_modules/node-fetch');

fetch(`https://pokeapi.co/api/v2/pokemon/1/`)
  .then((response) => {
    response.json()
      .then( (data) => {
        console.log(data);
      })
  })


const getDataWeWant = (data) => {
  const subsetOfData = {
    stats: data.stats,
    name: data.name,
    moves: data.moves,
    height: data.height,
  }

  return subsetOfData;
}
