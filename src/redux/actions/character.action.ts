import { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import characterSlice from '@/redux/slices/character.slice';
import { RootState } from '@/redux/store';
import { Character } from '@/models';
import { getAll, getSingleCharacter } from '@/services/character.service';

export const characterActions = characterSlice.actions;

export const fetchCharacters =
  (): ThunkAction<void, RootState, unknown, AnyAction> => (dispatch, getState) => {
    dispatch(characterActions.setLoading(true));
    if (getState().character.characters.length === 0) {
      getAll().then((response: Character[]) => {
        setTimeout(() => {
          dispatch(characterActions.setCharacters(response));
          dispatch(characterActions.setLoading(false));
        }, 2000);
      });
    }
  };

export const fetchSingleCharacter =
  (id: number): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch) => {
    getSingleCharacter(id).then((response: Character) => {
      dispatch(characterActions.setSingleCharacter(response));
    });
  };
