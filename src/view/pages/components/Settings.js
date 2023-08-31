import { Box } from '@mui/material';
import React from 'react';
import SideNav from '../layouts/SideNav';
import NavBar from '../layouts/NavBar';
// const SideNav = React.lazy(() => import('../layouts/SideNav'));

const Settings = () => {
  return (
    <>
      <NavBar />
      <Box height={30} />
      <Box sx={{ display: 'flex' }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Settings.....</h1>
        </Box>
      </Box>
    </>
  );
};

export default Settings;
