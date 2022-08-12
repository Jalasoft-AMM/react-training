import React, { FunctionComponent, useEffect, useState } from 'react';
import { Character, CharacterEmptyState } from '@/models';
import { useAppSelector } from '@/hooks/redux-hooks';
import CharacterContext from './character.context';

interface CharacterProviderProps {
  children: React.ReactNode;
}

const CharacterProvider: FunctionComponent<CharacterProviderProps> = ({ children }) => {
  const [state, setSate] = useState<Character>(CharacterEmptyState);
  const { singleCharacter } = useAppSelector(({ character }) => character);

  useEffect(() => {
    console.log('Dentro de Aqui');
    setSate(singleCharacter);
  }, [singleCharacter]);

  return <CharacterContext.Provider value={state}>{children}</CharacterContext.Provider>;
};

export default CharacterProvider;
