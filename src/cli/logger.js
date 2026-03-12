function intro(player, enemy){
    console.log("Battle Start!\n");
    console.log(`${player.name} vs ${enemy.name}\n`);
}

function showHp(pokemon){
    console.log(`${pokemon.name} has ${pokemon.hp}HP!\n`);
}

function hasFainted(pokemon){
    console.log(`${pokemon.name} has fainted!\n`);
}

function attackOutput(attacker, move){
    console.log(`${attacker.name} used ${move.name}!`);
}

export {intro, showHp, hasFainted, attackOutput};