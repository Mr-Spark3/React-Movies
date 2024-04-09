import React from 'react';
import { useParams } from 'react-router-dom';

export default function MovieDetailPage({ movies }) {
  console.log("movies:", movies);
  const { movieTitle } = useParams();

  const movie = movies.find(movie => movie.title === movieTitle);
  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <img src={movie.posterPath} alt={movie.title} />
      <p>Release Date: {movie.releaseDate}</p>
      <h3>Cast:</h3>
      <ul>
        {movie.cast.map((actor, index) => (
          <li key={index} id={index}>{actor}</li>
        ))}
      </ul>
    </div>
  );
}