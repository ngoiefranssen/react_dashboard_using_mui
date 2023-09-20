import { Box } from '@mui/material';
import React from 'react';
import SideNav from '../layouts/SideNav';
import NavBar from '../layouts/NavBar';
import ListingProduct from '../../products/ListingProduct';
// const SideNav = React.lazy(() => import('../layouts/SideNav'));

const Products = () => {
  return (
    <>
      <NavBar />
      <Box height={30} />
      <Box sx={{ display: 'flex' }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <ListingProduct />
        </Box>
      </Box>
    </>
  );
};

export default Products;
