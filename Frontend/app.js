const BASE_URL = "http://localhost:8080/movies";

let allMovies = [];


// =========================
// ADD MOVIE
// =========================
function addMovie() {

    const title = document.getElementById("title").value.trim();
    const genre = document.getElementById("genre").value.trim();

    if (!title || !genre) {
        document.getElementById("result").innerText =
            "Please enter title and genre!";
        document.getElementById("result").style.color = "red";
        return;
    }

    fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, genre })
    })
    .then(res => res.json())
    .then(data => {

        document.getElementById("result").innerText =
            "Movie added successfully!";
        document.getElementById("result").style.color = "lightgreen";

        document.getElementById("title").value = "";
        document.getElementById("genre").value = "";

        getMovies();
    })
    .catch(err => {
        console.error(err);
        document.getElementById("result").innerText =
            "Error connecting to backend!";
        document.getElementById("result").style.color = "red";
    });
}


// =========================
// GET MOVIES
// =========================
function getMovies() {

    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {

        console.log("API RESPONSE:", data);

        allMovies = data.data;

        renderMovies(allMovies);
    })
    .catch(err => console.error(err));
}


// =========================
// RENDER MOVIES (NETFLIX STYLE)
// =========================
function renderMovies(movies) {

    const container = document.getElementById("movieList");
    container.innerHTML = "";

    if (!movies || movies.length === 0) {
        container.innerHTML = "<p style='text-align:center;'>No movies found</p>";
        return;
    }

    movies.forEach(movie => {

        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.src = `https://source.unsplash.com/300x200/?movie,cinema`;

        const content = document.createElement("div");
        content.className = "card-content";

        const title = document.createElement("div");
        title.className = "title";
        title.innerText = movie.title;

        const genre = document.createElement("div");
        genre.className = "genre";
        genre.innerText = movie.genre;

        content.appendChild(title);
        content.appendChild(genre);

        card.appendChild(img);
        card.appendChild(content);

        container.appendChild(card);
    });
}


// =========================
// SEARCH
// =========================
function searchMovies() {

    const value = document.getElementById("search").value.toLowerCase();

    const filtered = allMovies.filter(movie =>
        movie.title.toLowerCase().includes(value)
    );

    renderMovies(filtered);
}


// =========================
// FILTER
// =========================
function filterMovies(genre) {

    if (genre === "all") {
        renderMovies(allMovies);
        return;
    }

    const filtered = allMovies.filter(movie =>
        movie.genre.toLowerCase().includes(genre.toLowerCase())
    );

    renderMovies(filtered);
}