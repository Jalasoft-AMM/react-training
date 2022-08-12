import React, { FunctionComponent, useReducer } from 'react';
import { getAll, getSingleCharacter } from '@/services/character.service';
import { Character, CharacterEmptyState } from '@/models';
import CharacterReducer, { State } from './character.reducer';
import CharacterContext from './character.context';

interface CharacterProviderProps {
  children: React.ReactNode;
}

export const initialState: State = {
  characters: [],
  selectedCharacter: CharacterEmptyState
};

const CharacterProvider: FunctionComponent<CharacterProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(CharacterReducer, initialState);

  const getCharacters = async () => {
    const response: Character[] = await getAll();
    console.log(response);
  };

  const getCharacterById = async (id: number) => {
    const response: Character = await getSingleCharacter(id);
    console.log(response);
  };

  return (
    <CharacterContext.Provider
      value={{
        ...state,
        getCharacters,
        getCharacterById
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterProvider;
