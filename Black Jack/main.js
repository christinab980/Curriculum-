const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");
const deck = [];
const suits = ["hearts", "spades", "clubs", "diamonds"];
const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
const deal = document.getElementById("deal-button")
const makeDeck = (rank, suit) => {
  const card = {
    rank: rank,
    suit: suit,
    pointValue: rank > 10 ? 10 : rank,
  };
  deck.push(card);
};

for (let suit of suits) {
  for (const rank of ranks) {
    makeDeck(rank, suit);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  // Execute after page load
});

function deal () {
    for (let i =1; i <=2; i++) {
        const card = document.createElement("img");
        card.src = "https://github.com/samuraijane/js-hw-blackjack-exercise/blob/main/images/10_of_clubs.png";
        card.id = "card";
        dealerHand.append(card);
    }
};

function deal () {
    for (let i =1; i <=2; i++) {
        const card = document.createElement("img");
        card.src = "https://github.com/samuraijane/js-hw-blackjack-exercise/blob/main/images/10_of_clubs.png";
        card.id = "card";
        playerHand.append(card);
    }
};

deal.addEventListener('click', deal);



