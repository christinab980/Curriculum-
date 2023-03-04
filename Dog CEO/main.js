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
    for(i = 0; i<4; i++) {
    const dog = document.createElement('img');
    const url = await customPromise();
    dog.src = url;
    output.append(dog);}
}

//creating a question about the breeds to the viewer and then stating if it is right/wrong 
const breeds = async() => {
    innerHeight.HTML = `Which dog is a ${breed}?`
}

button.addEventListener('click', dogImg);
