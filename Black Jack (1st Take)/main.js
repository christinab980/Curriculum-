const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");

const dealButton = document.getElementById("deal-button");
const standButton = document.getElementById ("stand-button")
const hitButton = document.getElementById("hit-button");
const playAgainButton = document.getElementById("play-again-button");

const dealerHandPoints = document.getElementById("dealer-points");
const playerHandPoints = document.getElementById("player-points");

const rank = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];

let playerScoreShown = document.querySelector('player-points');
let dealerScoreShown = document.querySelector('dealer-points');

let cardLeft = document.querySelector("cards-left");
let isGameOver = false;
let gameDeck = buildDeck();
let pHand = [];
let dHand = [];

let playerPoints = 0;
let dealerPoints = 0;
let playerScore = 0;
let dealerScore = 0;
let cardAmount = 52;

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

    // cardAmount -= 4;
    // cardsLeft.innerHTML = cardAmount

};


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

function hitMe () {
    // playerPoints = 0;
    // let playerCard = deck.pop();
    // pHand.push(playerCard);
    // let playerHitCard = document.createElement("img");
    // playerHitCard.src = pHand[pHand.length -1].img
    // playerHand.appendChild(playerHitCard)
    // cardAmount -=1;
    // cardsLeft.innerHTML = cardAmount;

  for (let i=0; i<1; i++) {
    const newCard = gameDeck[i]
    const cardElement = getCardImage(newCard)
    playerHand.appendChild(cardElement)
  }

}


shuffleDeck(gameDeck);

dealButton.addEventListener('click', function(){
    deal(gameDeck, pHand) 
    deal(gameDeck, dHand)
    deal(gameDeck, pHand) 
    deal(gameDeck, dHand)  
    displayGame()
})

hitButton.addEventListener('click', hitMe)
// standButton.addEventListener('click', standByMe)


// window.addEventListener('DOMContentLoaded', function() {
//     })
    
//     let suits = ['clubs', 'diamonds', 'hearts', 'spades'];

//     let deck = [];
//     let playerHand = document.querySelector('#player-hand');
//     let dealerHand = document.querySelector('#dealer-hand'); 
//     let dealerHandPoints = document.querySelector('#dealer-points'); 
//     let playerHandPoints = document.querySelector('#player-points');  
//     let deal = document.querySelector('#deal-button');  
//     let hit = document.querySelector('#hit-button');  
//     let stand = document.querySelector('#stand-button');  
//     let playAgain = document.querySelector('#again-button');  
//     let names = document.querySelectorAll('.player-name2'); 
 
//     let playerScoreShown = document.querySelector('.player-score-shown')  
//     let dealerScoreShown = document.querySelector('.dealer-score-shown')
//     let cardsLeft = document.querySelector('.cards-left-shown') 
//     let initialPlayerHand = document.createElement('img');  
//     let initialDealerHand = document.createElement('img'); 
//     let dealerHandList = [];
//     let playerHandList = [];
//     let playerPoints = 0;
//     let dealerPoints = 0;
//     let playerScore = 0;
//     let dealerScore = 0;
//     let cardAmount = 52;
    
//     function getCardImage() {
//         for (let i = 0; i < suits.length; i++) {
//             for (let a = 1; a < 14; a++) {
//                 let card = {};
//                 card.rank = a
//                 card.suit = suits[i]
//                 card.img = `images/${a}_of_${suits[i]}.png`              
//                 deck.push(card)
//             }
//         }
//         }

// /**
//  * The function takes an array as an argument and returns a shuffled array.
//  * @param array - the array to shuffle
//  * @returns The array is being returned.
//  */
//     function shuffleDeck(array) {
//         for (let i = array.length - 1; i > 0; i--) { 
//             let a = Math.floor(Math.random() * (i + 1));           
//             let temp = array[i];
//             array[i] = array[a];
//             array[a] = temp;
//         }
//         return array;
//     }

    
    
//     function dealDeck(){ 
//         let playerCard1 = deck.pop(); 
//         let playerCard2 = deck.pop(); 
//         playerHandList.push(playerCard1); 
//         playerHandList.push(playerCard2);
//         let dealerCard1 = deck.pop(); 
//         let dealerCard2 = deck.pop();
//         dealerHandList.push(dealerCard1); 
//         dealerHandList.push(dealerCard2);
//         for(i=0 ; i < playerHandList.length ; i++){   
//             let initialPlayerHand = document.createElement('img');
//             initialPlayerHand.src = playerHandList[i].img;  
//             playerHand.appendChild(initialPlayerHand); 

//         }
    
//         for(i=0 ; i < dealerHandList.length ; i++){
//             let initialDealerHand = document.createElement('img');
//             initialDealerHand.src = dealerHandList[i].img;
//             dealerHand.appendChild(initialDealerHand);
//         }
        
//         cardAmount -= 4;
//         cardsLeft.innerHTML = cardAmount
        
//         }
        
//     function hitPlayer() { 
        
//         playerPoints = 0;
//         let playerCard = deck.pop();
//         playerHandList.push(playerCard); 
//         //this takes the card that was just popped/now labeled playerCard/ and adds it to the players hand. Note that we will not be able to see the image of the card at this point.
        
//         let playerHitCard = document.createElement('img'); 
//         //this creates the image element for the card mentioned above 

//         playerHitCard.src = playerHandList[playerHandList.length - 1].img 
//         //this displays the image for the corresponding cards value 

//         playerHand.appendChild(playerHitCard); 
//         //append is being used to add the card that was created above to the players hand where the user can see
        
//         cardAmount -= 1;
//         cardsLeft.innerHTML = cardAmount;
//         }
        
//     function hitDealer() { 
//         //this function is designed to give the dealer an additional card, or to 'hit them' woth the card.

//         dealerPoints = 0;

//         let dealerCard = deck.pop(); 
//         //this sets the letiable dealerCard to equal the card that was popped, which would be the last card in the deck

//         dealerHandList.push(dealerCard); 
//         //this takes the card that was just popped/now labeled dealerCard/ and adds it to the dealers hand. Note that we will not be able to see the image of the card at this point.
        
//         let dealerHitCard = document.createElement('img'); 
//         //this creates the image element for the card mentioned above

//         dealerHitCard.src = dealerHandList[dealerHandList.length - 1].img 
//         //this displays the image for the corresponding cards value

//         dealerHand.appendChild(dealerHitCard); 
//         //append is being used to add the card that was created above to the dealers hand where the user can see
        
//         cardAmount -= 1;
//         cardsLeft.innerHTML = cardAmount;
        
//         }

//     function calculatePlayerPoints() { 
//         //this function is designed to calculate and display the players points

//         for (let i = 0; i < playerHandList.length; i++) {
//             if (playerHandList[i].rank === 1) {
//                 if (playerPoints < 11) {
//                     playerPoints += 11;
//                 } else {
//                 playerPoints += 1;
//             }
//             } else if (playerHandList[i].rank > 1 && playerHandList[i].rank < 11) {
//             playerPoints += playerHandList[i].rank;
//             } else {
//             playerPoints += 10;
//             }
//         }
        
//         playerHandPoints.innerHTML = playerPoints.toString();
        
//         let message = document.querySelector('.message');
//         if (playerPoints > 21) {
//             message.textContent = "You Busted! Dealer Wins!"
//             hit.setAttribute('class', 'none');
//             stand.setAttribute('class', 'none');
//             playAgain.setAttribute('class', '');
//             dealerScore++;
//             gameOver();
//         } 
//         } 
        
        
//     function calculateDealerPoints() {

//         for (let i = 0; i < dealerHandList.length; i++) {
//         if (dealerHandList[i].rank === 1) {
//             if (dealerPoints < 11) {
//             dealerPoints += 11;
//             } else {
//             dealerPoints += 1;
//             }
//         } else if (dealerHandList[i].rank > 1 && dealerHandList[i].rank < 11) {
//             dealerPoints += dealerHandList[i].rank;
//         } else {
//             dealerPoints += 10;
//         }
//         }
//         dealerHandPoints.innerHTML = dealerPoints.toString();
    
//         let message = document.querySelector('.message');
//         if (dealerPoints > 21) {
//         message.textContent = "Dealer Busted! You Win!";
//         hit.setAttribute('class', 'none');
//         stand.setAttribute('class', 'none');
//         playAgain.setAttribute('class', '');
//         playerScore++;
//         gameOver();
//         }
//     } 

//     function updateScore() {
//         playerScoreShown.textContent = playerScore;
//         dealerScoreShown.textContent = dealerScore;
//     }

//     function clearCards() {
//         playerHandList = [];
//         playerHand.innerHTML = "";
    
//         dealerHandList = [];
//         dealerHand.innerHTML = "";
//     }

//     function gameOver() {
//         let message = document.querySelector('.message');
//         if (cardAmount === 0 || cardAmount < 4) {
//         if (playerScore > dealerScore) {
//             message.innerHTML = "Congratulations! You beat the Dealer!";
//             hit.setAttribute('class', 'none');
//             stand.setAttribute('class', 'none');
//             playAgain.setAttribute('class', 'none');
//             deal.setAttribute('class', 'none');
//         } else if (dealerScore > playerScore) {
//             message.innerHTML = "The Dealer won this round. Better luck next time!";
//             hit.setAttribute('class', 'none');
//             stand.setAttribute('class', 'none');
//             playAgain.setAttribute('class', 'none');
//             deal.setAttribute('class', 'none');
//         } 
//         else {
//             message.innerHTML = "A Draw! Want to Play Again?";
//             hit.setAttribute('class', 'none');
//             stand.setAttribute('class', 'none');
//             playAgain.setAttribute('class', 'none');
//             deal.setAttribute('class', 'none');
//         }
//         }
//         }
           
//         getCardImage();
//         shuffleDeck(deck);
        
//         hit.setAttribute('class', 'none');
//         stand.setAttribute('class', 'none');
//         playAgain.setAttribute('class', 'none');
//         names[0].setAttribute('class', 'none player-name2');
//         names[1].setAttribute('class', 'none player-name2');
//         cardsLeft.innerHTML = cardAmount;
        
//         deal.addEventListener('click', ()=>{
//         let message = document.querySelector('.message');
//         message.textContent = "";
//         hit.setAttribute('class', '');
//         stand.setAttribute('class', '');
//         names[0].setAttribute('class', 'player-name2');
//         names[1].setAttribute('class', 'player-name2');
        
//         dealDeck();
//         calculatePlayerPoints();
//         calculateDealerPoints();

            
//         deal.setAttribute('class', 'none');
        
    
//         })
        
        
//         hit.addEventListener('click', ()=>{
//             hitPlayer();
//             calculatePlayerPoints();
//             updateScore();
//             gameOver();
            
//         })
        
        
//         stand.addEventListener('click', ()=>{
//             let message = document.querySelector('.message');
        
//         while (dealerPoints < 18 || dealerPoints <= playerPoints) {
//             hitDealer();
//             calculateDealerPoints();
//         }
        
//         if (dealerPoints < playerPoints && dealerPoints < 22) {
//             message.textContent = "Congratulations! You Win!";
//             playerScore++
//         } else if (dealerPoints > playerPoints && dealerPoints < 22) {
//             message.textContent = "Dealer Wins!";
//             dealerScore++
//         } else if (dealerPoints === 21 && playerPoints === 21) {
//             message.textContent = "You tied with the Dealer!";
//         }
        
        
//         gameOver(); 
//         //calling the gameOver function
//         updateScore(); 
//         //calling the updateScore function
        
//         hit.setAttribute('class', 'none');
//         stand.setAttribute('class', 'none');
//         playAgain.setAttribute('class', '');
        
        
//         })
        
//         playAgain.addEventListener('click', ()=>{ 
//             //this allows for the program to listen for a click on the play again button, and once it is pressed the following occures:

//         updateScore(); 
//         //the updateScore function is called so that the player may play another game and the score will be updated without a need to refresh the page
            
//         dealerPoints = 0;
//         playerPoints = 0;
            
        
//         hit.setAttribute('class', '');
//         stand.setAttribute('class', '');
//         playAgain.setAttribute('class', 'none');
            
//         let message = document.querySelector('.message');
//         message.innerHTML = "";
            
        
//         clearCards(); 
//         //calling the clearCards function
//         dealDeck(); 
//         //calling the dealDeck function
//         calculatePlayerPoints(); 
//         //calling the calculatePlayerPoints function
//         calculateDealerPoints();  
//         //calling the calculateDealerPoints function
            
//         })