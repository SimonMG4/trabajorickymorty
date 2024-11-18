import React from 'react';

const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p><strong>Species:</strong> {character.species}</p>
      <p><strong>Status:</strong> {character.status}</p>
      <p><strong>Gender:</strong> {character.gender}</p>
    </div>
  );
};

export default CharacterCard;