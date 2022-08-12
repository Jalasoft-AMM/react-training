import React, { FunctionComponent, useContext } from 'react';
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material';
import Title from '@/common/Title';
import CharacterContext from '@/context/Character/character.context';

const Character: FunctionComponent = () => {
  const { name, image, gender, status } = useContext(CharacterContext);

  return (
    <Box sx={{ mt: 2 }}>
      {name && (
        <>
          <Title title={name} font="h3" />
          <Card>
            <CardMedia component="img" image={image} alt={name} />
            <CardContent>
              <Typography variant="h6" color="text.secondary">
                {`Status: ${status}`}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {`Gender: ${gender}`}
              </Typography>
            </CardContent>
          </Card>
        </>
      )}
    </Box>
  );
};

export default Character;
