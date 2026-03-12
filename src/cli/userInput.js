import inquirer from "inquirer";

async function chooseMove(pokemon) {
  const answer = await inquirer.prompt([
    {
      type: "select",
      name: "move",
      message: "Choose your move",
      choices: [...pokemon.moves]
    }
  ]);

  return pokemon.moves.find(m => m.name === answer.move);
}

function showHp(pokemon){
    console.log(`${pokemon.name} has ${pokemon.hp}HP`);
}

function hasFainted(pokemon){
    console.log(`${pokemon.name} has fainted`);
}

export {chooseMove, showHp, hasFainted};