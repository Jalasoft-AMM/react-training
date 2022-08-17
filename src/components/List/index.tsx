import React, { FunctionComponent, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { fetchCharacters } from '@/redux/actions/character.action';
import Item from '@/components/Item';
import { Character } from '@/models';

const List: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { characters } = useAppSelector(({ character }) => character);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  return (
    <>
      {characters.map((character: Character) => (
        <Item key={character.id} character={character} />
      ))}
    </>
  );
};

export default List;
