import { Character } from '@/models';

export const singleCharacterAdapter = (character: Character) => ({
  id: character.id,
  name: character.name,
  gender: character.gender,
  status: character.status,
  image: character.image
});

export const charactersAdapter = (characters: Character[]) =>
  characters.map((character) => singleCharacterAdapter(character));
