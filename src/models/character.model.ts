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

export interface CharacterResponse {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}
