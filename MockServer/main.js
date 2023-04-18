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

function renderResponse(data, y, type) {
  if (type === "year") {

    const div = document.createElement("div")
    div.class = "responseDiv"
    div.innerHTML = `Year: ${data.year}` 
    output.append(div)

    const div1 = document.createElement("div")
    div1.class = "responseDiv"
    div1.innerHTML = `Player: ${data.player}`
    output.append(div1)

    const div2 = document.createElement("div")
    div2.class = "responseDiv"
    div2.innerHTML = `Team: ${data.team}` 
    output.append(div2)

  } else { 
    const div = document.createElement("div")
    div.class = "responseDiv"
    div.innerHTML = `Year: ${data.year}` 
    output.append(div)

    const div1 = document.createElement("div")
    div1.class = "responseDiv"
    div1.innerHTML = `Player: ${data.player}` 
    output.append(div1)

    const div2 = document.createElement("div")
    div2.class = "responseDiv"
    div2.innerHTML = `Team: ${data.team}` 
    output.append(div2) }
} 

searchButton.addEventListener("click", () => {
  let output = document.getElementById("output") 
  output.innerHTML = " ";
  output.setAttribute("style", "");
  getData()
});