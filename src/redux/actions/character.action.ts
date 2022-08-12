import { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import characterSlice from '@/redux/slices/character.slice';
import { RootState } from '@/redux/store';
import { Character } from '@/models';
import { getAll, getSingleCharacter } from '@/services/character.service';

export const characterActions = characterSlice.actions;

export const fetchCharacters =
  (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch, getState) => {
    dispatch(characterActions.setLoading(true));
    if (getState().character.characters.length === 0) {
      const response: Character[] = await getAll();
      dispatch(characterActions.setCharacters(response));
    }
    dispatch(characterActions.setLoading(false));
  };

export const fetchSingleCharacter =
  (id: number): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    const response: Character = await getSingleCharacter(id);
    dispatch(characterActions.setSingleCharacter(response));
  };
