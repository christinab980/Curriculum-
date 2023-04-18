const searchButton = document.getElementById('search-button')
const searchInput = document.getElementById('search-input')
const output = document.getElementById('output')

async function getData() {
  const inputData = searchInput.value
  
  if (!isNaN(inputData * 1) ) {
    const x = await fetch(`http://localhost:8080/mvps/${inputData}`);
    const data = await x.json();
    console.log(data)
    renderResponse(data, "year")
  } else {
    const newData = inputData.replaceAll(" ", "").toLowerCase()
    const x = await fetch(`http://localhost:8080/mvp/${newData}`)
    const y = await x.json();
    console.log(y)
    renderResponse(y, "player")
  }
}

function renderResponse(data, type) {
  if (type === "year") {
    
  } else (type === "player") {

  }
} 

searchButton.addEventListener("click", getData)