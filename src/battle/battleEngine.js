import chooseMove from "../cli/userInput.js";
import {showHp, hasFainted, attackOutput} from "../cli/logger.js"
import damageCalculation from "./damageCalculation.js";

async function battleLoop(player, enemy){
    while(true){
        const move = await chooseMove(player);
        const enemyMove = enemy.moves[Math.floor(Math.random()*enemy.moves.length)];

        if(player.speed > enemy.speed){
            resolveTurn(player, enemy, move);
            if(checkFainted(player, enemy)) break;
            resolveTurn(enemy, player, enemyMove);
            if(checkFainted(player, enemy)) break;

        } else{
            resolveTurn(enemy, player, enemyMove);
            if(checkFainted(player, enemy)) break;
            resolveTurn(player, enemy, move);
            if(checkFainted(player, enemy)) break;
        }
    }
    logFainted(player, enemy);
}

function resolveTurn(attacker, defender, move){
    let damage = damageCalculation(attacker, defender, move);
    defender.takeDamage(damage);
    attackOutput(attacker, move);
    showHp(defender)
}

function checkFainted(player, enemy){
    if(player.isFainted() || enemy.isFainted()){
        return true;
    } 
    return false;
}

function logFainted(player, enemy){
    if(player.isFainted()){
        hasFainted(player);
    } else if(enemy.isFainted()){
        hasFainted(enemy);
    }
}

export default battleLoop;