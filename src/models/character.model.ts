export interface Character {
  id: number;
  name: string;
  gender: string;
  status: string;
  image: string;
}

export const CharacterEmptyState: Character = {
  id: 0,
  name: '',
  gender: '',
  status: '',
  image: ''
};
