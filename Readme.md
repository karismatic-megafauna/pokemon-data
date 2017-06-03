Exports a flat json object keyed by pokemon name that has this shape:

```json
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

```
import pokemonMetadata from 'pokemon-metadata';

const squirtle = pokemonMetadata.squirtle;
```
