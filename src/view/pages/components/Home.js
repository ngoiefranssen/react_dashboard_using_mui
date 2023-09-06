import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import SideNav from '../layouts/SideNav';
import NavBar from '../layouts/NavBar';
import '../../styles/Dash.css';
import StorefrontIcon from '@mui/icons-material/Storefront';
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
            <Grid item xs={8}>
              <Stack spacing={2} direction="row">
                <Card sx={{ maxWidth: '49%', height: 140 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ maxWidth: '49%', height: 140 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
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
                  </CardContent>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent></CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>

          <Box height={20} />

          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: 60 + 'vh' }}>
                <CardContent></CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: 60 + 'vh' }}>
                <CardContent></CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Home;
