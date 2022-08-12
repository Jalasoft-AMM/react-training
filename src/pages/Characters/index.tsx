import React, { FunctionComponent } from 'react';
import { Grid } from '@mui/material';
import Title from '@/common/Title';
import List from '@/components/List';
import Card from '@/components/Profile';

const Characters: FunctionComponent = () => (
  <>
    <Title title="Characters" font="h3" />
    <Grid container spacing={2}>
      <Grid item xs={6} md={8}>
        <List />
      </Grid>
      <Grid item xs={6} md={4} sx={{ mt: 15 }}>
        <Card />
      </Grid>
    </Grid>
  </>
);

export default Characters;
