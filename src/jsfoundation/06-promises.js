const { httpClientPlugin } = require('../plugins');

const getPokemonById = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const pokemon = await httpClientPlugin.get(url);
  return pokemon.name;
};

// const getPokemonById = async (id) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

//   const response = await fetch(url);
//   const pokemon = await response.json();

//   return pokemon.name;
// };

// const getPokemonById = (id) => {
//   return fetch(url)
//     .then((response) => response.json())
//     .then(() => {
//       throw new Error('Pokemon no existe');
//     })
//     .then((pokemon) => pokemon.name);
// };

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
