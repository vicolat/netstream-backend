import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const BASE_URL = "http://13.218.169.179:8080";

  /* ================= FETCH MOVIES ================= */
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`${BASE_URL}/movies`);

        if (!res.ok) {
          throw new Error("Failed to fetch movies");
        }

        const data = await res.json();

        const movieArray = Array.isArray(data)
          ? data
          : Array.isArray(data?.movies)
          ? data.movies
          : Array.isArray(data?.data)
          ? data.data
          : [];

        setMovies(movieArray);
      } catch (err) {
        console.error(err);
        setError(err.message);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  /* ================= HERO SLIDER + FADE ================= */
  useEffect(() => {
    if (movies.length === 0) return;

    const interval = setInterval(() => {
      setFade(false); // start fade out

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % movies.length);
        setFade(true); // fade in new movie
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [movies]);

  /* ================= SEARCH ================= */
  const filteredMovies = movies.filter((movie) =>
    movie?.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Arial"
      }}
    >
      {/* ================= HEADER ================= */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px"
        }}
      >
        <h1 style={{ color: "#FFD700", margin: 0 }}>
          NetStream
        </h1>

        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #FFD700"
          }}
        />
      </div>

      {/* ================= LOADING ================= */}
      {loading && (
        <p style={{ color: "#FFD700", textAlign: "center" }}>
          Loading movies...
        </p>
      )}

      {/* ================= ERROR ================= */}
      {error && (
        <p style={{ color: "red", textAlign: "center" }}>
          {error}
        </p>
      )}

      {/* ================= HERO SLIDER ================= */}
      {movies.length > 0 && (
        <div
          style={{
            position: "relative",
            height: "400px",
            marginBottom: "30px",
            borderRadius: "10px",
            overflow: "hidden"
          }}
        >
          {/* BACKGROUND IMAGE (safe + reliable) */}
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundImage: `url(${movies[currentIndex]?.posterUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "opacity 0.5s ease-in-out",
              opacity: fade ? 1 : 0.2
            }}
          />

          {/* OVERLAY */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.5)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "20px",
              color: "#fff"
            }}
          >
            <h2 style={{ color: "#FFD700" }}>
              {movies[currentIndex]?.title}
            </h2>

            <p>{movies[currentIndex]?.genre}</p>

            {movies[currentIndex]?.trailerUrl && (
              <a
                href={movies[currentIndex].trailerUrl}
                target="_blank"
                rel="noreferrer"
                style={{ color: "#FFD700", marginTop: "10px" }}
              >
                ▶ Watch Trailer
              </a>
            )}
          </div>
        </div>
      )}

      {/* ================= MOVIE GRID ================= */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px"
        }}
      >
        {filteredMovies.map((movie, index) => (
          <div
            key={index}
            style={{
              width: "180px",
              backgroundColor: "#111",
              border: "1px solid #FFD700",
              borderRadius: "10px",
              overflow: "hidden",
              color: "#fff",
              boxShadow: "0 4px 10px rgba(255, 215, 0, 0.2)",
              transition: "transform 0.2s",
              cursor: "pointer"
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            {/* POSTER */}
            <img
              src={
                movie?.posterUrl?.startsWith("http")
                  ? movie.posterUrl
                  : "https://via.placeholder.com/180x250"
              }
              alt={movie?.title}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover"
              }}
            />

            {/* DETAILS */}
            <div style={{ padding: "10px" }}>
              <h4 style={{ color: "#FFD700", margin: 0 }}>
                {movie?.title}
              </h4>

              <p style={{ fontSize: "12px", color: "#aaa" }}>
                {movie?.genre}
              </p>

              {movie?.trailerUrl && (
                <a
                  href={movie.trailerUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#FFD700", fontSize: "12px" }}
                >
                  ▶ Watch Trailer
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;