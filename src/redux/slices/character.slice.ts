import { Character, CharacterEmptyState } from '@/models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CharacterState {
  characters: Character[];
  singleCharacter: Character;
  loading: boolean;
  errors: any;
}

const initialState: CharacterState = {
  characters: [],
  singleCharacter: CharacterEmptyState,
  loading: false,
  errors: null
};

const characterSlice = createSlice({
  name: 'character',
  initialState,

  reducers: {
    setCharacters: (state, { payload }: PayloadAction<Character[]>) => {
      state.characters = payload;
    },
    setSingleCharacter: (state, { payload }: PayloadAction<Character>) => {
      state.singleCharacter = payload;
    },
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    }
  }
});

export default characterSlice;
