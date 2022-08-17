import React, { FunctionComponent } from 'react';
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { useAppSelector } from '@/hooks/redux-hooks';
import DefaultImage from '@/assets/default-placeholder.png';

const Profile: FunctionComponent = () => {
  const { singleCharacter } = useAppSelector(({ character }) => character);
  const { name, image, gender, status } = singleCharacter;

  return (
    <Box>
      <Card sx={{ position: 'fixed' }}>
        <CardMedia component="img" height="450" image={image || DefaultImage} alt={name} />
        <CardContent sx={{ textAlign: 'center' }}>
          {name ? (
            <>
              <Typography variant="h5">{`Name: ${name}`}</Typography>
              <Typography variant="h6" color="text.secondary">
                {`Status: ${status}`}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {`Gender: ${gender}`}
              </Typography>
            </>
          ) : (
            <Typography variant="h5">Select a Character</Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Profile;
