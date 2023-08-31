import { Box, Grid } from '@mui/material';
import React from 'react';
import SideNav from '../layouts/SideNav';
import NavBar from '../layouts/NavBar';
// const SideNav = React.lazy(() => import('../layouts/SideNav'));

const Home = () => {
  return (
    <>
      <NavBar />
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}></Grid>
            <Grid item xs={4}></Grid>
          </Grid>

          <Box height={20} />

          <Grid container spacing={2}>
            <Grid item xs={8}></Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

// 1:50 min

export default Home;
