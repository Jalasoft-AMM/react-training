import React, { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import CharacterProvider from '@/context/Character/character.provider';
import AppRouter from '@/common/Router';

const App: FunctionComponent = () => (
  <CharacterProvider>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </CharacterProvider>
);

export default App;
