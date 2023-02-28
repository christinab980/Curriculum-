const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");
const dealButton = document.getElementById("deal-button");
const standButton = document.getElementById ("stand-button")
const hitButton = document.getElementById("hit-button");
const rank = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
let isGameOver = false;
let gameDeck = buildDeck();
let pHand = [];
let dHand = [];

// let dealersSum = 0;
// let yourSum = 0;

// let dealerAceCount = 0;
// let yourAceCount = 0;

// let hidden;
// let deck;
// let canHit = true;

// window.onload = () => {
//     buildDeck();
//     shuffleDeck();
//     startGame();
// }

const getCardImage = (card) => {
    const cardImage = document.createElement("img");
    if (card.rank === 1) {
        cardImage.setAttribute('src',`images/ace_of_${card.suit}.png`)
    }
    if (card.rank === 11) {
        cardImage.setAttribute('src',`images/jack_of_${card.suit}.png`)
    }
    if (card.rank === 12) {
        cardImage.setAttribute('src',`images/queen_of_${card.suit}.png`)
    }
    if (card.rank === 13) {
        cardImage.setAttribute('src',`images/king_of_${card.suit}.png`)
    } 
    if (card.rank <11 && card.rank >1)  {
        cardImage.setAttribute('src',`images/${card.rank}_of_${card.suit}.png`)
    }
    return cardImage
}; 

function buildDeck () {
    const deck = [];  
    const suits = ["hearts", "spades", "clubs", "diamonds"];

    for (let i=0; i<suits.length; i++) {
        const suit = suits[i]
        for (let rank = 1; rank<=13; rank++) {
            const card = {
                rank,
                suit,
                //pointvalue: rank > 10 ? 10 : rank
            }
            deck.push(card)
        }
    }    
    return deck;
};

const displayGame = () => {
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

// function firstDeal () {
//     let recipient = 'player'
//     for (let i =0; i < 4; i++ ) {
//     displayGame(deck.pop(), recipient);
//     if (recipient === 'player') {
//         recipient = 'dealer';
//     } else {
//         recipient = 'player'
//     }
// }
// }

function deal (deck, target) {
    const currentCard = deck.pop()
    target.push(currentCard)
};

function shuffleDeck (deck) {
    for (let i=0; i < deck.length; i++) {
        let shuffle = Math.floor(Math.random()* (deck.length));
        let temp = deck[i];
        deck[i] = deck[shuffle];
        deck[shuffle] = temp;
    }
}

// function startGame() {
//     hidden = deck.pop();
//     dealersSum += getValue(hidden);
//     dealerAceCount += checkAce(hidden);

//     while (dealerSum < 17) {
//         let cardImage = document.createElement("img");
//         let card = deck.pop;
//         cardImage.scr ="./images/" + card + ".png";
//         dealersSum += getValue(card);
//         dealerAceCount += checkAce(card);
//         document.getElementById('dealer-hand').append(cardImage)
//     }

//     for (let i=0; i < 2; i++) {
//         let cardImage = document.createElement("img");
//         let card = deck.pop;
//         cardImage.scr ="./images/" + card + ".png";
//         yourSum += getValue(card);
//         yourAceCount += checkAce(card);
//         document.getElementById('player-hand').append(cardImage)
//     }
// }

function hitMe () {
  for (let i=0; i<1; i++) {
    const newCard = gameDeck[i]
    const cardElement = getCardImage(newCard)
    playerHand.appendChild(cardElement)
  }
}

// function standByMe () {
//     dealerSum = reduceAceCount(dealerSum, dealerAceCount);
//     yourSum = reduceAce(yourSum, yourAceCount);

//     hitMe = false;
    
//     let message = " " 
//     if (yourSum > 21) {
//         message = "You Lose!";
//     } else if (dealerSum > 21) {
//         message = "You Win";
//     } else if (yourSum == dealerSum) {
//         message = "Tie";
//     } else if (yourSum < dealerSum) {
//         message = "You Lose!";
//     }
//     document.getElementById('dealer-points').innerText = dealerSum;
//     document.getElementById('player-points').innerText = yourSum
//     document.getElementById('result').innerText = message;
// };

// function getValue (card) {
//     let data = card.split('_');
//     let value = data[0];

//     if (isNaN(value)) {
//         if (value == 'ace') {
//             return 11;
//         } 
//         return 10;
//     }
//     return parseInt(value);
// }

// function checkAce (card) {
//     if (card[0] == "Ace") {
//         return = 1;
//     } 
//     return 0;
// }

// function reduceAce(playerSum, playerAceCount) {
//     while(playerSum > 21 && playerAceCount > 0) {
//         playerSum -= 10;
//         playerAceCount -= 1;
//     }
//     return playerSum
// }

shuffleDeck(gameDeck);

dealButton.addEventListener('click', function(){
    deal(gameDeck, pHand) 
    deal(gameDeck, dHand)
    deal(gameDeck, pHand) 
    deal(gameDeck, dHand)  
    displayGame()
})

hitButton.addEventListener('click', hitMe)
standButton.addEventListener('click', standByMe)
