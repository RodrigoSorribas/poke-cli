import chalk from 'chalk';

function intro(player, enemy){
    console.log("Battle Start!\n");
    console.log(`${colorPokemonName(player)} vs ${colorPokemonName(enemy)}\n`);
}

function showHp(pokemon){
    console.log(`${colorPokemonName(pokemon)} has ${chalk.red(`${pokemon.hp}HP!`)}\n`);
}

function hasFainted(pokemon){
    console.log(`${colorPokemonName(pokemon)} has fainted!\n`);
}

function attackOutput(attacker, move){
    console.log(`${colorPokemonName(attacker)} used ${colorMoveName(move)}!`);
}

function colorMoveName(move){
    let coloredName = "";
    switch (move.type){
        case "electric":
            coloredName = chalk.yellow(move.name);
            break;
        case "fire":
            coloredName = chalk.red(move.name);
            break;
        case "water":
            coloredName = chalk.blue(move.name);
            break;
        case "grass":
            coloredName = chalk.green(move.name);
            break;
        default:
            coloredName = move.name;
            break;
    }
    return coloredName;
}

function colorPokemonName(pokemon){
    let coloredName = "";
    switch (pokemon.type){
        case "electric":
            coloredName = chalk.yellow(pokemon.name);
            break;
        case "fire":
            coloredName = chalk.red(pokemon.name);
            break;
        case "water":
            coloredName = chalk.blue(pokemon.name);
            break;
        case "grass":
            coloredName = chalk.green(pokemon.name);
            break;
        default:
            coloredName = pokemon.name;
            break;
    }
    return coloredName;
}

export {intro, showHp, hasFainted, attackOutput};