const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");
const dealButton = document.getElementById("deal-button");
const hitButton = document.getElementById("hit-button");
console.log(Deck);

const createCard = (rank, suit) => {
  const card = {
    rank: rank,
    suit: suit,
    pointValue: rank > 10 ? 10 : rank,
  };
  return card;
};

function buildDeck () {
    const deck = [];  
    const suits = ["hearts", "spades", "clubs", "diamonds"];
    const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];

    for (let suit of suits) {
        for (const rank of ranks) {
            const card = createCard(rank,suit);
            deck.push(card);
        }
    }    
    return deck;
};

window.addEventListener("DOMContentLoaded", () => {
  // Execute after page load
});

function hand () {
    for (let i =1; i <=2; i++) {
        const card = document.createElement("img");
        const card2 = document.createElement("img");
        //card.src = "https://raw.githubusercontent.com/samuraijane/js-hw-blackjack-exercise/main/images/10_of_clubs.png"
        //card2.src = 
        //card.id = "card";
        //dealerHand.append(card);
    }
};

function playersHand () {
    for (let i =1; i <=2; i++) {
        const card = document.createElement("img");
        //card.src = "https://raw.githubusercontent.com/samuraijane/js-hw-blackjack-exercise/main/images/10_of_clubs.png"
        //card.id = "card";
        playerHand.append(card);
    }
};

function hitMe () {
    for (let i=1; i<=1; i++) {
        const card = document.createElement("img");
        card.src = "https://raw.githubusercontent.com/samuraijane/js-hw-blackjack-exercise/main/images/10_of_clubs.png"
        card.id = "card";
        playerHand.append(card);
    }
};

dealButton.addEventListener('click', hand);
dealButton.addEventListener('click', playersHand);
hitButton.addEventListener('click', hitMe);


