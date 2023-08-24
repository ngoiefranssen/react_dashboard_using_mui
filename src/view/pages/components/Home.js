import { Box } from '@mui/material';
import React from 'react';
import SideNav from '../layouts/SideNav';
// const SideNav = React.lazy(() => import('../layouts/SideNav'));

const Home = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <SideNav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1>Home.....</h1>
      </Box>
    </Box>
  );
};

export default Home;
