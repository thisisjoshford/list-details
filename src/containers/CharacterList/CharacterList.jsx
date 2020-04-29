import React, { useState, useEffect } from 'react';

const CharacterList = () => {

  const [characters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then(characters => characters);

  }, []);
  return (
    <>

    </>
  );
};
