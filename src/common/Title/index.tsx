import React, { FunctionComponent } from 'react';
import { Box, Typography, Divider } from '@mui/material';

interface TitleProp {
  title: string;
  font: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Title: FunctionComponent<TitleProp> = ({ title, font }) => (
  <Box textAlign="center">
    <Typography variant={font}>{title}</Typography>
    <Divider />
  </Box>
);

export default Title;
