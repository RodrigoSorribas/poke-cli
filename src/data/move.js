import Move from "../models/move.js";

const moves = {
    // Electric moves
    thunderbolt: new Move(
        "Thunderbolt",
        9,
        70,
        "electric"
    ),

    // Fire moves
    firePunch: new Move(
        "Fire Punch",
        8,
        80,
        "fire"
    ),

    // Water moves
    waterGun: new Move(
        "Water Gun",
        7,
        75,
        "water"
    ),

    // Grass moves
    leechSeed: new Move(
        "Leech Seed",
        5,
        100,
        "grass"
    ),

    // Normal moves
    headbutt: new Move(
        "Headbutt",
        5,
        100,
        "normal"
    ),
};

export default moves;