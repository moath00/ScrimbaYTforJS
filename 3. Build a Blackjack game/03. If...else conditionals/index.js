let firstCard = 6;
let secondCard = 9;
let sum = firstCard + secondCard;

if (sum < 21) message = "Do you want to draw a new card?";
else if (sum === 21) message = "Congratulations! You got the Blackjack!";
else if (sum > 21) message = "You lost the game!";
