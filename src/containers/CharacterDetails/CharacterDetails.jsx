import React, { useState, useEffect } from 'react';
import { getCharacter } from '../../services/getCharacters';
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {

  const [character, setCharacter] = useState([]);
  let { charName } = useParams();

  useEffect(() => {
    getCharacter(charName)
      .then(newCharacter => setCharacter(newCharacter));

  }, []);

  console.log(character);

  return (
    <>
    </>
  );
};

export default CharacterDetails;
