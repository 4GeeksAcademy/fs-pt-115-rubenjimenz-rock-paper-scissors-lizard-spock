//write your code here
const hand = ["rock", "paper", "scissors", "lizard", "spock"]
const getRamdonhand = () => {
    const index = Math.floor(Math.random() * hand.length)
    return hand[index]
}
const checkhandGuess = (userGuess) => {
    userGuess = userGuess.toLowerCase();
    const actualhand = getRamdonhand().toLowerCase();

    console.log(`You hand ${userGuess}`);
    console.log(`Opponent's current ${actualhand}`);
    if (userGuess === actualhand) {
        console.log("Draw"); // Empate
    }
    else if (userGuess === "rock" && (actualhand === "scissors" || actualhand === "lizard")) {
        console.log("You win"); // Roca aplasta Tijeras y Lagarto
    }
    else if (userGuess === "rock" && (actualhand !== "scissors" && actualhand !== "lizard")) {
        console.log("You lose");
    }
    else if (userGuess === "paper" && (actualhand === "rock" || actualhand === "spock")) {
        console.log("You win"); // Papel cubre Roca y refuta Spock
    }
    else if (userGuess === "paper" && (actualhand !== "rock" && actualhand !== "spock")) {
        console.log("You lose");
    }
    else if (userGuess === "scissors" && (actualhand === "paper" || actualhand === "lizard")) {
        console.log("You win"); // Tijeras cortan Papel y decapitan Lagarto
    }
    else if (userGuess === "scissors" && (actualhand !== "paper" && actualhand !== "lizard")) {
        console.log("You lose");
    }
    else if (userGuess === "lizard" && (actualhand === "spock" || actualhand === "paper")) {
        console.log("You win"); // Lagarto envenena Spock y se come Papel
    }
    else if (userGuess === "lizard" && (actualhand !== "spock" && actualhand !== "paper")) {
        console.log("You lose");
    }
   else if (userGuess === "spock" && (actualhand === "scissors" || actualhand === "rock")) {
        console.log("You win"); // Spock rompe Tijeras y vaporiza Roca
    }
    else if (userGuess === "spock" && (actualhand !== "scissors" && actualhand !== "rock")) {
        console.log("You lose");
    } else {
        console.log("Onli rock, paper, scissors, lizard or spock.")

    }

};
const guess = prompt("Guess: rock, paper, scissors, lizard or spock.").toLowerCase();
checkhandGuess(guess);



