import Move from "../models/move.js";

const moves = {
    // Electric moves
    thunderbolt: new Move(
        "Thunderbolt",
        90,
        70,
        "electric"
    ),

    // Fire moves
    firePunch: new Move(
        "Fire Punch",
        80,
        80,
        "fire"
    ),

    // Water moves
    waterGun: new Move(
        "Water Gun",
        75,
        75,
        "water"
    ),

    // Grass moves
    leechSeed: new Move(
        "Leech Seed",
        55,
        100,
        "grass"
    ),

    // Normal moves
    headbutt: new Move(
        "Headbutt",
        50,
        100,
        "normal"
    ),
};

export default moves;