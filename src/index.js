import chalk from 'chalk';
import inquirer from 'inquirer';
import pokemons from './data/pokemon.js';
import battleLoop from './battle/battleEngine.js';

let charmander = pokemons.charmander;
let pikachu = pokemons.pikachu;

battleLoop(charmander, pikachu);
