import { Character, CharacterEmptyState } from '@/models';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CharacterState {
  characters: Character[];
  singleCharacter: Character;
  loading: boolean;
  error: string;
}

const initialState: CharacterState = {
  characters: [],
  singleCharacter: CharacterEmptyState,
  loading: false,
  error: ''
};

const characterSlice = createSlice({
  name: 'character',
  initialState,

  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    setError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
      state.loading = false;
    },
    setCharacters: (state, { payload }: PayloadAction<Character[]>) => {
      state.characters = payload;
      state.loading = false;
    },
    setSingleCharacter: (state, { payload }: PayloadAction<Character>) => {
      state.singleCharacter = payload;
    }
  }
});

export default characterSlice;
