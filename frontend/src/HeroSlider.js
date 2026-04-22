import { useEffect, useState } from "react";

function HeroSlider({ movies }) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (!movies || movies.length === 0) return;

    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % movies.length);
        setFade(true);
      }, 400);
    }, 5000);

    return () => clearInterval(interval);
  }, [movies]);

  if (!movies || movies.length === 0) return null;

  const movie = movies[index];

  return (
    <div
      style={{
        position: "relative",
        height: "420px",
        borderRadius: "12px",
        overflow: "hidden",
        marginBottom: "30px"
      }}
    >
      {/* BACKGROUND */}
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${movie?.posterUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: fade ? "scale(1.05)" : "scale(1)",
          transition: "all 0.6s ease",
          filter: "brightness(0.8)"
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
          background: "rgba(0,0,0,0.55)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "25px",
          color: "#fff"
        }}
      >
        <h1 style={{ color: "#FFD700", marginBottom: "10px" }}>
          {movie?.title}
        </h1>

        <p style={{ color: "#ccc", marginBottom: "10px" }}>
          {movie?.genre}
        </p>

        {movie?.trailerUrl && (
          <a
            href={movie.trailerUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#FFD700",
              fontWeight: "bold",
              textDecoration: "none"
            }}
          >
            ▶ Watch Trailer
          </a>
        )}
      </div>
    </div>
  );
}

export default HeroSlider;