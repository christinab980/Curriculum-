const button = document.getElementById('dogButton');
const output = document.getElementById('output');
const dogQuestion = document.getElementById('question')
const fetchUrl = "https://dog.ceo/api/breeds/image/random"

//promise to get the dog API 
const customPromise = async() => {
  const response = await fetch (fetchUrl);
  const data = await response.json();
  const url = await data.message;
  console.log(data.message)
  return url;
};

//creating the image from the DOM to turn the API into an actual image
const dogImg = async() => {
    const list = [];
    for(i = 0; i<4; i++) {
      const dogImgUrl = customPromise();
      const dog = document.createElement('img');
      const url = await customPromise();
      dog.src = url;
      output.append(dog);
      list.push(dogImgUrl);
  }
    return list
}

//creating a question about the breeds to the viewer and then stating if it is right/wrong 
const breedsQuestion = async() => {
    const urlList = dogImg();
    const prompt = document.createElement('div');
    for (let i=0; i<=4, i++;) {
      const dogImgBreeds = await urlList
      const findbreed = dogImgBreeds[Math.floor(Math.random() * dogImgBreeds.length)];
      const breedindex = findbreed.split('/');
      const whichBreed = breedindex[2];
      prompt.innerText(`Which dog is ${whichBreed}`)
    }
    return prompt
}

const breedsAnswer = e => {
  let breed = breedsQuestion
  const answer = document.createElement('div');
  if (e.target.matches === `${breed}`) {
    answer.innerText('Correct!');
    header.append(answer);
  } else {
    answer.innerText('Wrong');
    header.append(answer);
  }
}

button.addEventListener('click', dogImg);
