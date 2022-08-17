import React, { FunctionComponent } from 'react';
import { Grid, Box } from '@mui/material';
import { useAppSelector } from '@/hooks/redux-hooks';
import Title from '@/common/Title';
import Loader from '@/common/Loader';
import List from '@/components/List';
import Card from '@/components/Profile';

const Characters: FunctionComponent = () => {
  const { loading, error } = useAppSelector(({ character }) => character);

  const renderLoading = () => (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
      <Loader color="inherit" />
    </Box>
  );

  const renderContent = () => {
    if (error) return <h1 style={{ textAlign: 'center' }}>{error}</h1>;

    return (
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <List />
        </Grid>
        <Grid item xs={6} md={4} sx={{ mt: 15 }}>
          <Card />
        </Grid>
      </Grid>
    );
  };

  return (
    <>
      <Title title="Characters" font="h3" />
      {loading ? renderLoading() : renderContent()}
    </>
  );
};

export default Characters;
