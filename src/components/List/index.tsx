import React, { FunctionComponent, useEffect } from 'react';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { fetchCharacters } from '@/redux/actions/character.action';
import Item from '@/components/Item';
import Loader from '@/common/Loader';
import { Character } from '@/models';

const List: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { characters, loading } = useAppSelector(({ character }) => character);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  return (
    <>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
          <Loader color="inherit" />
        </Box>
      ) : (
        characters.map((character: Character) => <Item key={character.id} character={character} />)
      )}
      <h2>Controls</h2>
    </>
  );
};

export default List;
