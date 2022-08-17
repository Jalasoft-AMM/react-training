import { charactersAdapter, singleCharacterAdapter } from '@/adapters';
import { CharacterResponse, Character } from '@/models';
import validateResponse from './utils/validator.util';
import BASE_URL from './route';

export const getAll = (): Promise<Character[]> =>
  fetch(`${BASE_URL}/character`)
    .then((response) => {
      validateResponse(response);
      return response.json();
    })
    .then(({ results }: { results: CharacterResponse[] }) => charactersAdapter(results));

export const getSingleCharacter = (id: number): Promise<Character> =>
  fetch(`${BASE_URL}/character/${id}`)
    .then((response) => {
      validateResponse(response);
      return response.json();
    })
    .then((data: CharacterResponse) => singleCharacterAdapter(data));
