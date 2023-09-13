import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import SideNav from '../layouts/SideNav';
import NavBar from '../layouts/NavBar';
import '../../styles/Dash.css';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import AccordionDash from './AccordionDash';
import BarChart from '../../charts/BarChart';
// const SideNav = React.lazy(() => import('../layouts/SideNav'));

const Home = () => {
  return (
    <>
      <div className="colorbg">
        <NavBar />
        <Box height={70} />
        <Box sx={{ display: 'flex' }}>
          <SideNav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Stack spacing={2} direction="row">
                  <Card
                    sx={{ minWidth: '49%', height: 150 }}
                    className="gradient"
                  >
                    <CardContent>
                      <div className="icon_style">
                        <CreditCardIcon />
                      </div>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: '#ffffff' }}
                      >
                        $570.00
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: '#ccd1d1' }}
                      >
                        Total Earnings
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card
                    sx={{ minWidth: '49%', height: 150 }}
                    className="gradientlet"
                  >
                    <CardContent>
                      <div className="icon_style">
                        <ShoppingCartCheckoutIcon />
                      </div>

                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ color: '#ffffff' }}
                      >
                        $975.00
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body2"
                        component="div"
                        sx={{ color: '#ccd1d1' }}
                      >
                        Total Orders
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={4}>
                <Stack spacing={2}>
                  <Card sx={{ maxWidth: 345 }}>
                    <Stack spacing={2} direction="row">
                      <div className="icon_style">
                        <StorefrontIcon />
                      </div>
                      <div className="allpadding">
                        <span className="title_price">$273k</span>
                        <br />
                        <span className="title_sub_price">Total incomes</span>
                      </div>
                    </Stack>
                  </Card>
                  <Card sx={{ maxWidth: 345 }} className="icon_style">
                    <Stack spacing={2} direction="row">
                      <div className="icon_style_black">
                        <StorefrontIcon />
                      </div>
                      <div className="allpadding">
                        <span className="title_price">$273k</span>
                        <br />
                        <span className="title_sub_price">Total incomes</span>
                      </div>
                    </Stack>
                  </Card>
                </Stack>
              </Grid>
            </Grid>

            <Box height={20} />

            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card sx={{ height: 60 + 'vh' }}>
                  <CardContent>
                    <BarChart />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ height: 60 + 'vh' }}>
                  <CardContent>
                    <div className="allpadding">
                      <span className="title_price">Popular Products</span>
                    </div>
                    <AccordionDash />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Home;
