const BASE_URL = "http://13.218.169.179:8080/movies";

let allMovies = [];

/* LOAD MOVIES */
function getMovies() {
    fetch(BASE_URL)
        .then(res => res.json())
        .then(data => {
            allMovies = data.data || data;
            renderMovies(allMovies);
        })
        .catch(err => console.error("Fetch error:", err));
}

/* ADD MOVIE */
function addMovie() {
    const title = document.getElementById("title").value.trim();
    const genre = document.getElementById("genre").value.trim();
    const trailerUrl = document.getElementById("trailerUrl").value.trim();
    
    if (!title || !genre) {
        document.getElementById("result").innerText = "Please enter title and genre!";
        document.getElementById("result").style.color = "red";
        return;
    }

    fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, genre, trailerUrl })
    })
    .then(res => res.json())
    .then(() => {
        document.getElementById("result").innerText = "Movie added successfully!";
        document.getElementById("result").style.color = "lightgreen";

        document.getElementById("title").value = "";
        document.getElementById("genre").value = "";

        getMovies();
    })
    .catch(err => {
        console.error(err);
        document.getElementById("result").innerText = "Error adding movie!";
        document.getElementById("result").style.color = "red";
    });
}

/* RENDER MOVIES */
function renderMovies(movies) {
    const container = document.getElementById("movieList");
    container.innerHTML = "";

    if (!movies || movies.length === 0) {
        container.innerHTML = "<p style='text-align:center'>No movies found</p>";
        return;
    }

    movies.forEach(movie => {
        const card = document.createElement("div");
        card.className = "card";

        /* TRAILER CLICK */
        card.onclick = () => {
            if (movie.trailerUrl) {
                window.open(movie.trailerUrl, "_blank");
            } else {
                alert("No trailer available");
            }
        };

        const img = document.createElement("img");
        img.src = "https://source.unsplash.com/300x200/?movie,cinema";

        const content = document.createElement("div");
        content.className = "card-content";

        const title = document.createElement("h3");
        title.innerText = movie.title;

        const genre = document.createElement("p");
        genre.innerText = movie.genre;

        content.appendChild(title);
        content.appendChild(genre);

        card.appendChild(img);
        card.appendChild(content);

        container.appendChild(card);
    });
}

/* AUTO LOAD */
window.onload = getMovies;