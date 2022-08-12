import { GET_CHARACTERS, GET_CHARACTER } from '@/context/types';
import { Character } from '@/models';

interface Action {
  payload: Character | Character[];
  type: string;
}

export interface State {
  characters: Character[];
  selectedCharacter: Character;
}

export default (state: State, action: Action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: payload
      };
    case GET_CHARACTER:
      return {
        ...state,
        selectedCharacter: payload
      };
    default:
      return state;
  }
};
