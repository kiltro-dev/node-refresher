import { getPokemonById } from '../../src/jsfoundation/06-promises';

describe('jsfoundation/06-promises', () => {
  test('getPokemonById should return a pokemon', async () => {
    const pokemonId = 1;
    const pokemonName = await getPokemonById(pokemonId);
    expect(pokemonName).toBe('bulbasaur');
  });

  test('should return an error if pokemon does not exist', async () => {
    const pokemonId = 10000000;
    try {
      await getPokemonById(pokemonId);
    } catch (error) {
      expect(error).toBe(`Pokemon not found with id ${pokemonId}`);
    }
  });
});
