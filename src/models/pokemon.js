class Pokemon {
    constructor(name, hp, attack, defense, speed, moves, type){
        this.name = name;
        this.hp = hp;
        this.maxHp = hp;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.moves = moves;
        this.type = type
    }

    takeDamage(damage){
        this.hp -= damage;
    }

    isFainted(){
        return this.hp <= 0;
    }
}

export default Pokemon;