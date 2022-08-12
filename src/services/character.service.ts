import BASE_URL from './route';

export const getAll = () =>
  fetch(`${BASE_URL}/character`)
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((error) => console.log(error));

export const getSingleCharacter = (id: number) =>
  fetch(`${BASE_URL}/character/${id}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
