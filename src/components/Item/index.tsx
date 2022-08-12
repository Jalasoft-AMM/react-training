import React, { FunctionComponent } from 'react';
import { Card, CardMedia, Box, CardContent, Typography, CardActionArea } from '@mui/material';
import { Character } from '@/models/character.model';
import { useAppDispatch } from '@/hooks/redux-hooks';
import { fetchSingleCharacter } from '@/redux/actions/character.action';
import useStyles from './styles';

interface Props {
  character: Character;
}

const Item: FunctionComponent<Props> = ({ character }) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const onSelectCharacter = (id: number) => {
    dispatch(fetchSingleCharacter(id));
  };

  return (
    <Card>
      <CardActionArea
        className={classes.cardAction}
        onClick={() => onSelectCharacter(character.id)}
      >
        <CardMedia
          component="img"
          className={classes.cardMedia}
          image={character.image}
          alt={character.name}
        />
        <Box className={classes.boxContent}>
          <CardContent>
            <Typography variant="h5">{character.name}</Typography>
            <Typography variant="h6" color="text.secondary">
              {character.status}
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default Item;
