import React from 'react';
import NavBar from '../layouts/NavBar';
import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import SideNav from '../layouts/SideNav';
import GeolocationChart from '../../charts/GeolocationChart';
import PieChart from '../../charts/PieChart';
import HyBarchart from '../../charts/HyBarchart';
import CountUp from 'react-countup';

const Analytics = () => {
  return (
    <>
      <div className="colorbg">
        <NavBar />
        <Box height={70} />
        <Box sx={{ display: 'flex' }}>
          <SideNav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <Stack direction="row" spacing={2}>
                  <Box sx={{ width: '50%' }}>
                    <Card sx={{ height: 19 + 'vh' }} className="gradient">
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="p"
                          component="div"
                          sx={{ color: '#f0fcfc', padding: '7px 0px' }}
                        >
                          Visitors
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ color: '#f0fcfc' }}
                        >
                          €<CountUp delay={0.3} end={1750} duration={0.4} />
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ color: '#ccd1d1' }}
                        >
                          Since last week
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card
                      sx={{ height: '19vh', marginTop: '16px' }}
                      className="gradient"
                    >
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="p"
                          component="div"
                          sx={{ color: '#f0fcfc', padding: '7px 0px' }}
                        >
                          Visitors
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ color: '#f0fcfc' }}
                        >
                          €<CountUp delay={0.5} end={3370} duration={0.7} />
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ color: '#ccd1d1' }}
                        >
                          Since last week
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                  <Box sx={{ width: '50%', height: '50%' }}>
                    <Card sx={{ height: '19vh' }} className="gradientlet">
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="p"
                          component="div"
                          sx={{ color: '#f0fcfc', padding: '7px 0px' }}
                        >
                          Visitors
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ color: '#f0fcfc' }}
                        >
                          €<CountUp delay={0.7} end={2790} duration={0.8} />
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ color: '#ccd1d1' }}
                        >
                          Since last week
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card
                      sx={{ height: '19vh', marginTop: '16px' }}
                      className="gradientlet"
                    >
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="p"
                          component="div"
                          sx={{ color: '#f0fcfc', padding: '7px 0px' }}
                        >
                          Visitors
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ color: '#f0fcfc' }}
                        >
                          €<CountUp delay={0.3} end={7790} duration={0.5} />
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ color: '#ccd1d1' }}
                        >
                          Since last week
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </Stack>
              </Grid>

              <Grid item xs={7}>
                <Card sx={{ height: '40vh' }}>
                  <CardContent>
                    <HyBarchart />
                  </CardContent>
                </Card>
              </Grid>
              <Box height={16} />
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Card sx={{ height: 40 + 'vh' }}>
                    <CardContent>
                      <GeolocationChart />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card sx={{ height: 40 + 'vh' }}>
                    <CardContent>
                      <PieChart />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Analytics;
