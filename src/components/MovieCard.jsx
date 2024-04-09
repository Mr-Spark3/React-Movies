import React, { useState } from 'react';

function MovieCard({ movie }) {
  const [isHovered, setIsHovered] = useState(false);
  const starRating = 4; 

  return (
    <div
      className="movie-card"
      style={{
        border: '2px solid #EE5325',
        padding: '50px',
        backgroundColor: 'gray',
        borderBottom: '2px solid black',
        borderTop: '2px solid black',
        position: 'relative',
        display: 'flex',
        justifyContent:'center',
        flexDirection:'column',
        fontSize:'12px',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={movie.posterPath} alt={movie.title} style={{ width: '200px' }} />
      {!isHovered && (
        <div className="pre-hover-info" style={{ color: 'white', marginTop: '10px' }}>
          <h2>{movie.title}</h2>
          
          <div>
            {Array.from({ length: starRating }).map((_, index) => (
              <span key={index}>⭐</span>
            ))}
          </div>
        </div>
      )}
      {isHovered && (
        <div
          className="movie-info"
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems:'center',
            padding: '15px',
          }}
        >
          <h2>{movie.title}</h2>
          <p>Release Date: {movie.releaseDate}</p>
          <h3>Cast:</h3>
          <ul>
            {movie.cast.map((actor, index) => (
              <li key={index}>{actor}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MovieCard;