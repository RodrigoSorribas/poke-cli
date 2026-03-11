function damageCalculation(attacker, defender, move){
    const base = (attacker.attack / defender.defense) * move.power;
    const random = Math.random() * 0.15 + 0.85;
    return Math.floor(base * random);
}

export default damageCalculation;