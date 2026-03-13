import pokemons from './data/pokemon.js';
import battleLoop from './battle/battleEngine.js';

let charmander = pokemons.bulbasaur;
let pikachu = pokemons.squirtle;

battleLoop(charmander, pikachu);
