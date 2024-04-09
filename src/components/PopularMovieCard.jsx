import React from "react";
import { Link } from "react-router-dom";

export default function PopularMovieCard({ popularMovie }) {
  console.log("popularMovie.id in PopularMovieCard:", popularMovie.id);

  return (
    <div
      className="popular-movie-card"
      style={{
        width: "200px",
        display: "flex",
        flexDirection: "column",
        padding: "50px",
        border: "2px solid gray",
        backgroundColor: "#000000",
        color: "white",
        borderTop: "2px solid #EE5325",
        borderBottom: "2px solid #EE5325",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={popularMovie.posterPath}
        alt={popularMovie.title}
        style={{ maxWidth: "100%", height: "auto", marginBottom: "10px" }}
      />
      <h2>{popularMovie.title}</h2>
      {/* Render the button only if popularMovie.id is truthy */}
      {popularMovie.id && (
        <Link to={`/popularMovies/${popularMovie.id}`}>
          <button
            style={{ backgroundColor: "green", color: "white", height: "30px" }}
            type="submit"
          >
            View Details
          </button>
        </Link>
      )}
    </div>
  );
}