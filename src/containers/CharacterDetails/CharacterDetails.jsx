import React, { useState, useEffect } from 'react';
import { getCharacters } from '../../services/getCharacters';
import { Link } from 'react-router-dom';

const CharacterDetails = () => {

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(newCharacters => setCharacters(newCharacters));

  }, []);

  return (
    <>
    </>
  );
};

export default CharacterDetails;
