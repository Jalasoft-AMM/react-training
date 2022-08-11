import React, { FunctionComponent } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Characters from '@/pages/Characters';
import Home from '@/pages/Home';
import Layout from './Layout';

const AppRouter: FunctionComponent<{}> = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/home" replace />} />
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Home />} />
      <Route path="characters" element={<Characters />} />
    </Route>
  </Routes>
);

export default AppRouter;
