import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, Button, Grid, Container, Stack } from '@mui/material';
import locale from '@/common/locale/en.json';
import navItems from './utils/routes.util';
import useStyles from './styles';

const Navbar: FunctionComponent = () => {
  const classes = useStyles();
  const { title } = locale;

  const renderNavItems = () =>
    navItems.map(({ label, route }) => (
      <NavLink
        key={route}
        className={({ isActive }) => (isActive ? classes.active : classes.noActive)}
        to={route}
      >
        <Button variant="text">{label}</Button>
      </NavLink>
    ));

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography variant="h6">{title}</Typography>
              </Grid>
              <Grid item>
                <Stack direction="row" spacing={2}>
                  {renderNavItems()}
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
