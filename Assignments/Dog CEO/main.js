const button = document.getElementById('dogButton');
const output = document.getElementById('output');
const thePrompt = document.getElementById('question');
const yourScore = document.getElementById('your-score');
const fetchUrl = "https://dog.ceo/api/breeds/image/random"
const tryAgain = document.getElementById('try-again');

let canAnswer = true;
let breeds = [];
let answer = '';
let finalResult = [];
let score = 0;

output.addEventListener('click', handleSelection)

//promise to get the dog API 
const customPromise = async() => {
  const response = await fetch (fetchUrl);
  const data = await response.json();
  const url = await data.message;
  const breed = url.split("/")[4];
  return {url, breed};
};

//creating the image from the DOM to turn the API into an actual image
const dogImg = async() => {
    output.innerHTML = '';
    thePrompt.innerHTML = ''; 
    breeds = [];
    canAnswer = true;

    for(i = 0; i<4; i++) {
      const div = document.createElement('div');
      div.className = 'dog-img'
      const dog = document.createElement('img');
      const {url, breed} = await customPromise();
      breeds.push(breed);
      dog.src = url;
      dog.setAttribute('data-breed', breed)
      div.append(dog);
      output.append(div); 
  }
  setRandomAnswer();
}

//eventlistener function - handles whether or not the user can answer and getting the correct anwswer 
function handleSelection(e) {
  if (canAnswer) {
    canAnswer = false;
    const breed = e.target.getAttribute('data-breed');
  if (breed) {
    giveFeedback(breed === answer)
    }
  } 
}

//calculating the score 
function calculateScore() {
      score++;
      yourScore.innerText = `Your score is ${score} out of 5`
   if (score === 5) {
      yourScore.innerText = `Your final score is ${score} out of 5`
      canAnswer = false
   }
}

//Creates the prompt for the random dog breed 
function setRandomAnswer() {
  answer = breeds[Math.floor(Math.random()* breeds.length)];
  const prompt = document.createElement('div');
  prompt.innerText = `Which image shows the ${answer} breed?`
  thePrompt.append(prompt);
}

//Tells user if they are correct/incorrect 
function giveFeedback(isCorrect) {
  const feedback = document.createElement('div');
  const message = isCorrect ? 'CORRECT' : 'INCORRECT'
  if (isCorrect) {
    calculateScore()
    feedback.innerText = `That is ${message}`;
    thePrompt.append(feedback)
  } else {
    tryAgain.innerHTML = "Sorry, wrong answer! Click the Play button again";
  }
}

button.addEventListener('click', dogImg);