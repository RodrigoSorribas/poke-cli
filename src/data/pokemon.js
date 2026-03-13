import Pokemon from "../models/pokemon.js";
import moves from "./move.js";

const pokemons = {
    pikachu: new Pokemon(
        "Pikachu",
        35,
        55,
        40,
        90,
        [moves.thunderbolt, moves.headbutt],
        "electric"
    ),

    charmander: new Pokemon(
        "Charmander",
        39,
        52,
        43,
        65,
        [moves.firePunch, moves.headbutt],
        "fire"
    ),

    squirtle: new Pokemon(
        "Squirtle",
        44,
        48,
        65,
        43,
        [moves.waterGun, moves.headbutt],
        "water"
    ),

    bulbasaur: new Pokemon(
        "Bulbasaur",
        45,
        49,
        49,
        45,
        [moves.leechSeed, moves.headbutt],
        "grass"
    ),
};



export default pokemons;