import React from "react";
import { popularMovies, movies } from "../../data";
import PopularMovieCard from "../../components/PopularMovieCard";
import MovieCard from "../../components/MovieCard";

function MoviesListPage() {
  return (
    <div className="movies-list" style={{ marginTop: "100px" }}>
      <h1 style={{ textAlign: "center" }}>New Releases</h1>
      {/* New Releases */}
      <div
        className="movie-list"
        style={{
          display: "flex",
          justifyContent: "center",
          overflowX: "scroll",
          margin: "auto",
          height: "500px",
          gap: "20px",
          backgroundColor: "#3d3d3d",
        }}
      >
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            id={index + 1}
            movie={{ ...movie, id: index + 1 }}
          />
        ))}
      </div>

      {/* Popular Movies */}
      <h1 style={{ textAlign: "center" }}>Popular Movies</h1>
      <div
        className="popular-movies-list"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          gap: "10px",
        }}
      >
        {popularMovies.map((popularMovie, index) => (
          <PopularMovieCard
            key={index}
            id={index + 1}
            popularMovie={{ ...popularMovie, id: index + 1 }}
          />
        ))}
      </div>
    </div>
  );
}

export default MoviesListPage;
