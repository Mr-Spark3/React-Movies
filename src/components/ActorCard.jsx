import React from 'react';

const ActorCard = ({ actor }) => {
  const imageUrl = `https://picsum.photos/200/300?random=${actor.id}`;

  return (
    <div className="actor-card" style={{ width: '200px', margin: '10px', textAlign: 'center' }}>
      <div
        className="actor-image"
        style={{
          width: '200px',
          height: '300px',
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginBottom: '10px',
        }}
      />
      <h3>{actor.name}</h3>
      <ul>
        {actor.movies && actor.movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActorCard;