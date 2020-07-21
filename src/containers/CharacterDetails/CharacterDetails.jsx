import React, { useState, useEffect } from 'react';
import { getCharacter } from '../../services/getCharacters';
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {

  const [character, setCharacter] = useState([]);

  let { charName } = useParams();
  
  useEffect(() => {
    getCharacter(charName)
      .then(newCharacter => setCharacter(newCharacter[0]));
  }, []);

  return (
    <>
      <h2>{character.Name}</h2>
      <img src={character.PicUrl}/>
      <ul>
        <li>{character.Species}</li>
        <li>{character.Age}</li>
        <li>{character.Planet}</li>
        <li>{character.Profession}</li>
        <li>{character.Status}</li>
        <li>{character.FirstAppearance}</li>
        <li>{character.Relatives}</li>
        <li>{character.VoicedBy}</li>
      </ul>
    </>
  );
};

export default CharacterDetails;
