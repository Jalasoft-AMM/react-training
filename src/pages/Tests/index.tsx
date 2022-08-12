import React, { FunctionComponent, useEffect, useContext } from 'react';
import CharacterContext from '@/context/Character/character.context';
import Character from './components/Character';

const Tests: FunctionComponent = () => {
  const value = useContext(CharacterContext);

  useEffect(() => {
    console.log('Tests', value);
  }, []);
  return <Character />;
};

export default Tests;
