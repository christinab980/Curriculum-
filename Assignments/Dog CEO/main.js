const button = document.getElementById('dogButton');
const output = document.getElementById('output');
const thePrompt = document.getElementById('question');
const fetchUrl = "https://dog.ceo/api/breeds/image/random"

let breeds = [];
let answer = '';

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

function handleSelection(e) {
  const breed = e.target.getAttribute('data-breed');
  if (breed) {
    giveFeedback(breed === answer)

  }

}

function setRandomAnswer() {
  answer = breeds[Math.floor(Math.random()* breeds.length)];
  const prompt = document.createElement('div');
  prompt.innerText = `Which image shows the ${answer} breed?`
  thePrompt.append(prompt);
}

function giveFeedback(isCorrect) {
  const feedback = document.createElement('div');
  const message = isCorrect ? 'CORRECT' : 'INCORRECT'
  feedback.innerText = `That is ${message}`;
  thePrompt.append(feedback)
}

button.addEventListener('click', dogImg);