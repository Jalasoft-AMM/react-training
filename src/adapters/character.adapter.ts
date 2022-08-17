import { Character, CharacterResponse } from '@/models';

export const singleCharacterAdapter = (character: CharacterResponse): Character => ({
  id: character.id,
  name: character.name,
  gender: character.gender,
  status: character.status,
  image: character.image
});

export const charactersAdapter = (characters: CharacterResponse[]): Character[] =>
  characters.map((character) => singleCharacterAdapter(character));
