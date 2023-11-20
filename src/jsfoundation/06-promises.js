const getPokemonById = (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  return fetch(url)
    .then((response) => response.json())
    // .then(() => {
    //   throw new Error('Pokemon no existe');
    // })
    .then((pokemon) => pokemon.name);
};

// const getPokemonById = (id, callback) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//   fetch(url)
//     .then((response) => response.json())
//     .then((pokemon) => callback(pokemon.name));
// };

// const getPokemonById = (id, callback) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//   fetch(url).then((response) => {
//     response.json().then((pokemon) => {
//       return callback(pokemon.name);
//     });
//   });
// };

module.exports = getPokemonById;
