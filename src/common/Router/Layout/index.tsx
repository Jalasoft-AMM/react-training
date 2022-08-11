import React, { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

const RouterLayout: FunctionComponent = () => (
  <>
    <h1>Navbar</h1>
    <Outlet />
  </>
);

export default RouterLayout;
