const searchButton = document.getElementById("search-button");

async function getData() {
  const data = await fetch('') 
  .then(response => response.json())
  .catch(error => console.err(err))
}
console.log(data)