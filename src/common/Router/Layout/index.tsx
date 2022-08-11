import React, { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import Navbar from '@/common/Navbar';

const RouterLayout: FunctionComponent = () => (
  <>
    <Navbar />
    <Container maxWidth="xl" sx={{ mt: 1 }}>
      <Outlet />
    </Container>
  </>
);

export default RouterLayout;
