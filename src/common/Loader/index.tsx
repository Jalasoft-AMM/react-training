import React, { FunctionComponent } from 'react';
import { CircularProgress } from '@mui/material';

interface LoaderProp {
  color: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
}

const Loader: FunctionComponent<LoaderProp> = ({ color }) => <CircularProgress color={color} />;

export default Loader;
