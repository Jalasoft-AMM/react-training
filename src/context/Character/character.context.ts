import { createContext } from 'react';
import { Character, CharacterEmptyState } from '@/models';

const CharacterContext = createContext<Character>(CharacterEmptyState);

export default CharacterContext;
