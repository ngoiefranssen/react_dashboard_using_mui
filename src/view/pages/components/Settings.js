import { Box } from '@mui/material';
import React from 'react';
import SideNav from '../layouts/SideNav';
import NavBar from '../layouts/NavBar';
import Listing from '../settings/Listing';
// const SideNav = React.lazy(() => import('../layouts/SideNav'));

const Settings = () => {
  return (
    <>
      <NavBar />
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Listing />
        </Box>
      </Box>
    </>
  );
};

export default Settings;
