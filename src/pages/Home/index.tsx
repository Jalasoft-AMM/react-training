import React, { FunctionComponent } from 'react';
import { CardMedia, Typography } from '@mui/material';
import RickAndMorty from '@/assets/rick_and_morty_home.png';
import locale from '@/common/locale/en.json';
import useStyles from './styles';

const Home: FunctionComponent = () => {
  const classes = useStyles();
  const { title } = locale;

  return (
    <>
      <CardMedia
        className={classes.card}
        component="img"
        alt="rick_and_morty"
        image={RickAndMorty}
      />

      <Typography className={classes.font} variant="h2">
        {title}
      </Typography>
    </>
  );
};

export default Home;
