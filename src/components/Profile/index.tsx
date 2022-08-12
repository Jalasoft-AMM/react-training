import React, { FunctionComponent } from 'react';
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { useAppSelector } from '@/hooks/redux-hooks';

const Profile: FunctionComponent = () => {
  const { singleCharacter } = useAppSelector(({ character }) => character);
  const { name, image, gender, status } = singleCharacter;
  return (
    <Box>
      {name ? (
        <Card sx={{ position: 'fixed' }}>
          <CardMedia component="img" height="450" image={image} alt={name} />
          <CardContent>
            <Typography variant="h5">{`Name: ${name}`}</Typography>
            <Typography variant="h6" color="text.secondary">
              {`Status: ${status}`}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {`Gender: ${gender}`}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Typography variant="h5">Select a Character</Typography>
      )}
    </Box>
  );
};

export default Profile;
