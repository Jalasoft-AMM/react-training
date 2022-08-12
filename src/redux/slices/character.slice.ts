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
    setCharacters: (state, action: PayloadAction<Character[]>) => {
      state.characters = action.payload;
    },
    setSingleCharacter: (state, action: PayloadAction<Character>) => {
      state.singleCharacter = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    }
  }
});

export default characterSlice;
