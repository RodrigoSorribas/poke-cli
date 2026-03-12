import {chooseMove, showHp, hasFainted} from "../cli/userInput.js";
import damageCalculation from "./damageCalculation.js";

async function battleLoop(player, enemy){
    while(!player.isFainted() || !enemy.isFainted){
        const move = await chooseMove(player);
        const enemyMove = enemy.moves[Math.floor(Math.random()*enemy.moves.length)];
        
        let playerDamage = damageCalculation(player, enemy, move);
        let enemyDamage = damageCalculation(enemy, player, enemyMove);

        if(player.speed > enemy.speed){
            enemy.takeDamage(playerDamage);
            if(enemy.isFainted()) break;
            showHp(enemy)

            player.takeDamage(enemyDamage);
            if(player.isFainted()) break;
            showHp(player)
        } else{
            player.takeDamage(enemyDamage);
            if(player.isFainted()) break;
            showHp(player)
            
            enemy.takeDamage(playerDamage);
            if(enemy.isFainted()) break;
            showHp(enemy)
        }
    }
    if(player.isFainted()){
        hasFainted(player);
    } else if(enemy.isFainted()){
        hasFainted(enemy);
    }
}

export default battleLoop;