let movieInfo = [];

function addMovie() {
    let movieName = document.getElementById("movie").value;
    let year = document.getElementById("year").value;
    let actors = document.getElementById("actors").value;

    let movie = {
        name: movieName,
        year: year,
        actors: actors
    }
    movieInfo.push(movie);
    display();
}

function deleteLast() {
    movieInfo.pop();
    display();
}

function deleteAll() {
    movieInfo = [];
    display();
}

function display() {
    let listOfMovies = document.getElementById("list-of-movies");
    listOfMovies.innerHTML = "";

    for (item of movieInfo) {
        let createLi = document.createElement("li");
        createLi.innerText = `Movie name: ${item.name}, year: ${item.year}, actors: ${item.actors} `;
        listOfMovies.appendChild(createLi);
    }
}