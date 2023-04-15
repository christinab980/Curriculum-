const searchButton = document.getElementById('search-button')

async function getData() {
    const data = await fetch('http://localhost:8080/mvps').then((response) =>
        response.json()
    )
    console.log(data)
}

getData()
