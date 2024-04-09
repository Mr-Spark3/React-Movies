import React from 'react';
import { useParams } from 'react-router-dom';
import { popularMovies } from '../../data'; 

export default function PopularMovieDetailPage() {
    const { popularMovieId } = useParams();
    const index = parseInt(popularMovieId) - 1;
    const popularMovie = popularMovies[index];
  
    if (!popularMovie) {
      return <div>Popular movie not found</div>;
    }
  
    return (
      <div className="popular-movie-details" style={{ margin:'auto'}}>
        <h2>{popularMovie.title}</h2>
        <img src={popularMovie.posterPath} alt={popularMovie.title} />
        <p>Release Date: {popularMovie.releaseDate}</p>
        <h3>Cast:</h3>
        <ul>
          {popularMovie.cast.map((actor, index) => (
            <li key={index}>{actor}</li>
          ))}
        </ul>
      </div>
    );
  }