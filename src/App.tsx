import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '@/common/Router';

const App: FC = () => (
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);

export default App;
