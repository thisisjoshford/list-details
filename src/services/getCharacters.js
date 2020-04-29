export const getCharacters = () => {
  return fetch('http://futuramaapi.herokuapp.com/api/v2/characters')
    .then(res => res.json());
}