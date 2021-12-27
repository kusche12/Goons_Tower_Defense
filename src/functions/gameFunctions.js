import GoonsPerRound from '../assets/GoonsPerRound.json';

// Get all the goons for the round
// TODO: Return an array whith each goon and a randomized time to be released
const addGoons = (round) => {
    const allGoons = GoonsPerRound["round" + round];
    return allGoons;
    // for (let i = 0; i < allGoons.length; i++) {
    //     const goon = allGoons[i];

    // }
};

// Use the character to decide which position to move the goon in the next clock tick
const moveGoon = (direction) => {
    if (direction === "D") {
        return [1, 0];
    } else if (direction === "R") {
        return [0, 1];
    } else if (direction === "L") {
        return [0, -1];
    } else if (direction === "U") {
        return [-1, 0];
    } else {
        console.error("ERROR: Unkown tile type");
        return null;
    }
}

export { addGoons, moveGoon };