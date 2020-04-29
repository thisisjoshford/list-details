import React, { useState, useEffect } from 'react';
import getCharacters from './getCharacters';

const CharacterList = () => {

  const [characters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(newCharacters => characters(newCharacters));

  }, []);

  return (
    <>
      {characters.map (char => 
        <div key={char.id} className="charContainer">
          <img className="charImage" 
            src={char.PicUrl} 
            alt={`a sweet pic of ${char.Name}`}
          />           
          <h2 className="charName">{char.Name}</h2>
        </div>
      )
      }
    </>
  );
};

export default CharacterList;
