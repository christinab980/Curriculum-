const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");
const dealButton = document.getElementById("deal-button");
const hitButton = document.getElementById("hit-button");
let isGameOver = false;
let gameDeck = buildDeck();
let pHand = [];
let dHand = [];


const getCardImage = (card) => {
    let 11 = 'jack'
    const cardImage = document.createElement("img");
    if (card.rank === 1) {
        cardImage.setAttribute('src',`images/ace_of_${card.suit}.png`)
    }
    if (card.rank === 11) {
        cardImage.setAttribute('src',`images/jack_of_${card.suit}.png`)
    }
    if (card.rank === 13) {
        cardImage.setAttribute('src',`images/queen_of_${card.suit}.png`)
    }
    if (card.rank === 14) {
        cardImage.setAttribute('src',`images/king_of_${card.suit}.png`)
    } 
    else  {
        cardImage.setAttribute('src',`images/${card.rank}_of_${card.suit}.png`)
    }
    return cardImage
}; 

function buildDeck () {
    const deck = [];  
    const suits = ["hearts", "spades", "clubs", "diamonds"];
    const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];

    for (let i=0; i<suits.length; i++) {
        const suit = suits[i]
        for (let rank = 1; rank<=14; rank++) {
            const card = {
                rank: rank,
                suit: suit,
            }
            deck.push(card)
        }
    }    
    return deck;
};

function displayGame () {
    dealerHand.innerHTML = " "
    playerHand.innerHTML = " "
    for (let i=0; i<dHand.length; i++) {
        const newCard = dHand[i]
        const cardElement = getCardImage(newCard)
        dealerHand.appendChild(cardElement)
    }
    for (let i=0; i<pHand.length; i++) {
        const newCard = pHand[i]
        const cardElement = getCardImage(newCard)
        playerHand.appendChild(cardElement)
    }
};

function deal (deck, target) {
    const currentCard = deck.pop()
    target.push(currentCard)
};

// window.addEventListener("DOMContentLoaded", () => {
//   // Execute after page load
// });

// function hand () {
//     for (let i =1; i <=2; i++) {
//         const card = document.createElement("img");
//         card.src = "https://raw.githubusercontent.com/samuraijane/js-hw-blackjack-exercise/main/images/10_of_clubs.png"
//         card.id = "card";
//         dealerHand.append(card);
//     }
// };

// function playersHand () {
//     for (let i =1; i <=2; i++) {
//         const card = document.createElement("img");
//         card.src = "https://raw.githubusercontent.com/samuraijane/js-hw-blackjack-exercise/main/images/10_of_clubs.png"
//         card.id = "card";
//         playerHand.append(card);
//     }
// };

// function hitMe () {
//     for (let i=1; i<=1; i++) {
//         const card = document.createElement("img");
//         card.src = "https://raw.githubusercontent.com/samuraijane/js-hw-blackjack-exercise/main/images/10_of_clubs.png"
//         card.id = "card";
//         playerHand.append(card);
//     }
// };

// dealButton.addEventListener('click', hand);
// dealButton.addEventListener('click', playersHand);
// hitButton.addEventListener('click', hitMe);

dealButton.addEventListener('click', function(){
    deal(gameDeck, pHand) 
    deal(gameDeck, dHand)
    deal(gameDeck, pHand) 
    deal(gameDeck, dHand)  
    displayGame()
})