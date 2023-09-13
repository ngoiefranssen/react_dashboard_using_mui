import React from 'react';
import NavBar from '../layouts/NavBar';
import { Box } from '@mui/material';
import SideNav from '../layouts/SideNav';

const Users = () => {
  return (
    <>
      <NavBar />
      <Box height={30} />
      <Box sx={{ display: 'flex' }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Users.....</h1>
        </Box>
      </Box>
    </>
  );
};

export default Users;
