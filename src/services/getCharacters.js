export const getCharacters = () => {
  return fetch('http://futuramaapi.herokuapp.com/api/v2/characters')
    .then(res => res.json());
};

export const getCharacter = (name) => {
  return fetch(`http://futuramaapi.herokuapp.com/api/v2/characters?search=${name}`)
    .then(res => res.json());
};


