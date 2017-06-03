Exports a flat json object keyed by pokemon name that has this shape:

```js
{
  squirtle: {
    name: "squirtle",
    id: 7,
    height: 5,
    weight: 90,
    sprites: {...},
    stats: {...},
    base_experience: 63,
    types: [{...}],
}
```

One would use this in an es6 app like so:

first install it with npm or yarn:

`yarn add pokemon-metadata`

Then get the metadata!

```
import pokemonMetadata from 'pokemon-metadata';

const squirtle = pokemonMetadata.squirtle;
```

This data was sourced from this awesome project => https://pokeapi.co/

Have fun :)
