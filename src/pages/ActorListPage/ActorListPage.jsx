import React from 'react';
import { movies } from '../../data'; 
import ActorCard from '../../components/ActorCard';

function ActorListPage() {

  const allActors = movies.reduce((actors, movie) => {
    movie.cast.forEach(actor => {
      if (!actors.includes(actor)) {
        actors.push(actor);
      }
    });
    return actors;
  }, []);

  return (
    <div className="actor-list">
      <h1 style={{ textAlign: 'center' }}>Actors List</h1>
      <div className="actor-list" style={{ 
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        padding: '20px',
      }}>
        {allActors.map((actor, index) => (
          <ActorCard key={index} actor={{ name: actor }} />
        ))}
      </div>
    </div>
  );
}

export default ActorListPage;

