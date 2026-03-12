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



export default chooseMove;